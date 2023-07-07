import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next",
    description: "Routing by group",
  };

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section >
      <nav></nav>
      <body>{children}</body>
    </section>
  );
}

export default layout;
