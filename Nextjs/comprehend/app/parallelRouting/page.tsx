import Link from "next/link";

function LinkPage(props: any) {
  return (
    <>
      <div>Hi, link page!</div>
      <Link href="/@team/settings">Settings</Link>
      <br />
      <Link href="/@analytics">Analytics</Link>
    </>
  );
}

export default LinkPage;
