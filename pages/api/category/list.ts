import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { client } from "../../../utils";
import Category from "../../../types/category.type";

const query = groq`*[_type== "category"] {
    _id,
    slug,
    title
}`;

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await client.fetch(query);
  res.status(200).json({ categories });
}
