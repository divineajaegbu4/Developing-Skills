import { Metadata } from "next";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
  title: "Checkbox Page",
  description: "Routing by group",
};


function RouteGroupPage() {
  return (
    <>
      <div>Hi, Route Group Checkbox</div>
      <Link href="/">Redirect to homepage</Link>
    </>
  );
}

export default RouteGroupPage;
