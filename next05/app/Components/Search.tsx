"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`)
  }

  return (
    <form className="w-50 flex justify-center md:justify-between" onClick={handleSubmit}>

        
    </form>
  );
}

export default Search;
