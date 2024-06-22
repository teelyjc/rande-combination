import express from "express";
import path from "path";

import { render } from "@/utils/EsBuildUtils";

const publicDir = path.join(process.cwd(), "public");

const { NODE_ENV, ADDRESS, PORT } = process.env;
if (NODE_ENV !== "production") {
  /**
   * If running in development mode. It will always watch your tsx files for re-build.
   */
  console.warn("You are running in development mode");
  render();
}

if (!ADDRESS) {
  throw new Error("You are not define `ADDRESS` in .env");
}

if (!PORT) {
  throw new Error("You are not define `PORT` in .env");
}

const app = express();

app.use(express.static(publicDir));

/**
 * Waiting for any request for path that did not start with `/api` for return frontend.
 */
app.get("*", (req, res) => {
  /**
   * Just send a html file.
   */
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(PORT, ADDRESS, () => {
  console.info("Ready, %s:%d", ADDRESS, PORT);
});
