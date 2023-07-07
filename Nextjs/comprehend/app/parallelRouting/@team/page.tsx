"use client";

import { Suspense } from "react";
import Loading from "./loading";
import Modal from "../Components/Modal";
import { useRouter } from "next/navigation";

function Team() {
  const router = useRouter();
  return (
    <Modal>
      <button onClick={() => router.back()}>close modal</button>
      <div>Hi, team</div>
      <Suspense fallback={<Loading />} />
    </Modal>
  );
}

export default Team;
