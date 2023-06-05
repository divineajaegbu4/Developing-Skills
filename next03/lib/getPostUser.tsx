async function getPostUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );

  // if (!res.ok) throw new Error("Fetch to post data!");
  
  if (!res.ok) return undefined;

  return res.json();
}

export default getPostUser;
