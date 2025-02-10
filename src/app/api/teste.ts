import type { NextApiRequest, NextApiResponse } from 'next'
import { auth } from "@/auth";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const session = await session();

    res.status(200).json(session?.user)
}