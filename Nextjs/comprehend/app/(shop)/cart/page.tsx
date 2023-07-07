import { Metadata } from "next";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
  title: "Cart Page",
  // description: "Routing by group",
};

function RouteGroupPage() {
  return (
    <>
      <div>Hi, Route Group Cart</div>
      <Link href="/">Redirect to homepage</Link>
    </>
  );
}

export default RouteGroupPage;
