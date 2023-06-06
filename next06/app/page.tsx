import Posts from "./Components/Posts";

export default function Home() {
  return (
    <main>
      <p className="mt-12 mb-12 text-3xl text-center text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Divine</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
