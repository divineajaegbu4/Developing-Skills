import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Route Group Page",
  description: "Routing by group",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>Route Group</nav>
      {children}
    </section>
  );
}

export default layout;
