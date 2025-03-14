// @ts-check
import { defineConfig } from "astro/config"
import { integration } from "pkg/integration"

export default defineConfig({
    integrations: [integration()]
})