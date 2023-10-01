import React, { ReactNode } from "react";
import Header from "../components/Header";

interface HeaderOnlyProp {
  children: ReactNode;
}

function HeaderOnly({ children }: HeaderOnlyProp) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="min-h-[70vh]">{children}</div>
    </>
  );
}

export default HeaderOnly;
