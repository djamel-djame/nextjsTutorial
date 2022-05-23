import React from "react";
import Link from "next/link";
export default function FirstPost() {
  return (
    <>
      <h1>hi</h1>
      <Link href="/">
        <a style={{textDecoration: 'none', fontSize: "10em", color: "black"}}>Now go back</a>
      </Link>
    </>
  );
}
