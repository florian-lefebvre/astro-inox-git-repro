import type { AstroIntegration } from "astro";
import contentUtils from "@inox-tools/content-utils";
import "@inox-tools/content-utils";

export const integration = (): AstroIntegration => {
  return {
    name: "something",
    hooks: {
      "astro:config:setup": (params) => {
        params.updateConfig({
          integrations: [contentUtils()],
        });
        params.injectRoute({
          pattern: "/[...id]",
          entrypoint: new URL("./route.astro", import.meta.url),
        });
      },
      "@it/content:git:listed": (params) => {
        console.log("Git listed:", params);
      },
      "@it/content:git:resolved": (params) => {
        console.log("Git resolved:", params);
      },
    },
  };
};
