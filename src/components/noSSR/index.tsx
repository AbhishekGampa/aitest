import React, { ReactElement, ReactNode } from "react";

interface NoSSRProps {
  children: ReactNode;
  onSSR?: ReactElement;
}

interface NoSSRState {
  canRender: boolean;
}

class NoSSR extends React.Component<NoSSRProps, NoSSRState> {
  constructor(props: NoSSRProps) {
    super(props);
    this.state = {
      canRender: false,
    };
  }

  componentDidMount() {
    this.setState({ canRender: true });
  }

  render() {
    const { children, onSSR = <DefaultOnSSR /> } = this.props;
    const { canRender } = this.state;

    return canRender ? (children as ReactElement) : onSSR;
  }
}

const DefaultOnSSR: React.FC = () => {
  return <span></span>;
};

export default NoSSR;
