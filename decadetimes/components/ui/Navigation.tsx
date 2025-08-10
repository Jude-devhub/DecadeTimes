import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <ul className="menu-sm menu-horizontal bg-base-200">
      <li>
        <Link href="/news">News</Link>
      </li>
      <li>
        <Link href="/business">Business</Link>
      </li>
      <li>
        <Link href="/politics">politics</Link>
      </li>

      <li>
        <Link href="/sports">Sports</Link>
      </li>
      <li>
        <Link href="/users">User</Link>
      </li>
    </ul>
  );
};

export default Navigation;
