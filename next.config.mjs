// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;

import { paraglide } from '@inlang/paraglide-next/plugin'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
// your usual next config
}
 
export default paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './paraglide'
  },
  ...nextConfig
})
