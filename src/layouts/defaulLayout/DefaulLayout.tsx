import React, { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <h1 className="w-full bg-rose-500">Header</h1>
      </div>
      {children}
      <div>
        <h1 className="w-full bg-blue-500">Footer</h1>
      </div>
    </>
  );
};

export default DefaultLayout;
