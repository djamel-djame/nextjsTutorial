import React from "react";
import Link from "next/link";
import Image from "next/image"
export default function FirstPost() {
  return (
    <>
      <h1>hi</h1>
      <Image
        src="../public/vercel.svg"
        height={144}
        width={144}
      />
      <Link href="/">
        <a style={{textDecoration: 'none', fontSize: "10em", color: "black"}}>Now go back</a>
      </Link>
    </>
  );
}
