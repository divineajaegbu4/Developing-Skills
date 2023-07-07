"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";



function DashboardPage() {
  const router = useRouter();
  return (
    <>
      <div>Hello, dashboard page!</div>
      <Link href="/">Redirect to homepage</Link>
      <br />
      <button type="button" onClick={() => router.push("/")}>
        Go to Homepage with router
      </button>
      {/* <Link href="/#hashid" scroll={false}>
        Scroll to specific id.
      </Link> */}
    </>
  );
}

export default DashboardPage;
