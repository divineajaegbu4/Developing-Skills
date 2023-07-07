import Link from "next/link";

type Props = {
  params: {
    userId: string;
  };
};

export default function BlogPostPage({ params: { userId } }: Props) {
    console.log("userId", userId)
  return (
    <>
      <h1>Blog post page</h1>
      <Link href={`/blog/${userId}`}>Redirect to user Id</Link>
    </>
  );
}
