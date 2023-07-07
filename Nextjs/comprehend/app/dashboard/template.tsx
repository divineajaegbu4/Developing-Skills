function Template({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>Dashboard Template</nav>
      {children}
    </section>
  );
}

export default Template;
