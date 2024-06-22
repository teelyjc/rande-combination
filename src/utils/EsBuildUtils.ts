import esbuild from "esbuild";
import path from "path";

const appPath = path.resolve(__dirname, "..", "app/main.tsx");
const appDist = path.resolve(__dirname, "..", "..", "public", "js");

/**
 * Function for watch tsx's files for build and bundle.
 */
export async function render() {
  const ctx = await esbuild.context({
    entryPoints: [appPath],
    outdir: appDist,
    bundle: true,
    minify: true,
  });

  await ctx.watch();
}
