import * as React from "react";
import "../App.css";

export interface INavbarProps {
  logo: string;
  name: string;
}

export function Navbar({ logo, name }: INavbarProps) {
  return (
    <div className="navbar">
      <div className="group">
        <img src={logo} alt="" className="logo" />
        <h3>{name}</h3>
      </div>
    </div>
  );
}
