import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, world!</h1>
      <Link href="/dashboard">Go to dashboard page</Link>
      <Link href="/account">Go to Route Group page account</Link>
      <Link href="/cart">Go to Route Group page cart</Link>
      <Link href="/checkbox">Go to Route Group page checkout</Link>
      <Link href="/blog">Go to dynamic route blog post</Link>
      <Link href="/parallelRouting">ParallelRouting</Link>
      <Link href="/interceptingRoutes/@modal">Intercepting routes</Link>
    </main>
  );
}
