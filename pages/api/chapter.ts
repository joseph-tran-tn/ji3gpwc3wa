// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/ls-chapter-24293-chapter-data.json";
import { Chapter } from "../../utils/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Chapter>
) {
  res.status(200).json(data);
}
