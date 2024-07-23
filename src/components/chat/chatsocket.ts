import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_SOCKET_URL || "ws://192.168.5.57:8002";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjE3MTI5MTQsIm5iZiI6MTcyMTcxMjkxNCwianRpIjoiMzY3NmY2NjEtOGU1OC00NTRkLWE3NTYtNzRmYjJmYWFmNDIwIiwiZXhwIjoxNzIxNzk5MzE0LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.8Ecf0ap7pWczRhVkJm6P1Z1WmnQ_DlvgGIDnKalz3qI"

export const socket = io(URL, {
    transports: ['websocket'],
    autoConnect: false,
    query: {
        "token": `${token}`
    }
});