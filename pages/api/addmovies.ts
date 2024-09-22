import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

import moviesJson from "../../test.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const movies = [];
    for (let index = 0; index < moviesJson.length; index++) {
      const { title, description, videoUrl, thumbnailUrl, genre, duration } =
        moviesJson[index];
      const movie = await prismadb.movie.create({
        data: { title, description, videoUrl, thumbnailUrl, genre, duration },
      });
      console.log("created:", title);
      movies.push(movie);
    }
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
