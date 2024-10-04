import React from "react";
import LangBtn from "../lang-btn";

export default function Header() {
  return (
    <header className="sticky top-0 border-b z-50">
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          <div>Logo</div>
          <div>
            <LangBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
