import React, { Suspense } from "react";
import { Metadata } from "next";
import Loading from "./loading";
import ErrorPage from "./error"

export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "dasboard for total content of website",
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Dashboard Layout</nav>
      <Suspense fallback={<Loading />}>
        {/* <ErrorBoundary fallback={<ErrorPage/>}>{children}</ErrorBoundary>d */}
      </Suspense>
    </div>
  );
}

export default DashboardLayout;
