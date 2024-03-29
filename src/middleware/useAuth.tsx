import React from "react";

type Props = {
  children: React.ReactNode | React.ReactElement;
};

const useAuth: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default useAuth;
