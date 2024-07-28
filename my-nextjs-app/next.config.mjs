/** @type {import('next').NextConfig} */
const nextConfig = {};
import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin"

export default paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
})
// export default nextConfig;
