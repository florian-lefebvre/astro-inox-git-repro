import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
    schema: z
      .object({
        title: z.string(),
      })
      .strict(),
  }),
};
