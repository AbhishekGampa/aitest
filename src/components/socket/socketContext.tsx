import React, { createContext, ReactNode, useContext, useEffect, useMemo } from "react";
import io, { Socket } from "socket.io-client";

const URL = "ws://192.168.5.57:8001";

const SocketContext = createContext<Socket | null>(null);

interface SocketProviderProps {
    children: ReactNode;
}

export const useSocket = () => {
    const socket = useContext(SocketContext);
    if (!socket) {
        throw new Error("useSocket must be used within a SocketProvider");
    }
    return socket;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const socket = useMemo(() => io(URL, { transports: ['websocket'], autoConnect: false }), []);

    useEffect(() => {
        socket.connect();

        socket.on("669b50f0ec5119a1fe600a51", (msg: any) => {
            console.log("msg", msg);
        }); 
        
        return () => {
            socket.disconnect();
        };
    }, [socket]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};