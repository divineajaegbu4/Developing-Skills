"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import GetUser from "./Components/GetUser";

export default function Layout(props: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  const isLoggedIn = GetUser();

  const loginSegment = useSelectedLayoutSegment("authModal");
  return (
    <>
      <h1>Parallel Routing</h1>
      {props.children}
      {props.team}
      {props.analytics}
      

      <h1>IS LOGGED IN</h1>
      <div>{isLoggedIn ? props.team : props.analytics}</div>
      {loginSegment}
    </>
  );
}
