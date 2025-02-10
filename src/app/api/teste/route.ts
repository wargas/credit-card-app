import type { NextApiRequest, NextApiResponse } from 'next'
import { auth } from "@/auth";


export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const session = await session();

    res.status(200).json(session?.user)
}