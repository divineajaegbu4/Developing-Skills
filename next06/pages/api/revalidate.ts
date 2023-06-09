// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/ap/revalidate?path=/&secret='6bc3b5a5383c0a87cbca4309ac717e00'

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true });
}
