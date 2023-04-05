import React from "react";
import Link from "next/link";
import { headerData } from "../data/headerData";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>{headerData.top}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{headerData.profile}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{headerData.portfolio}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{headerData.blog}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{headerData.contact}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
