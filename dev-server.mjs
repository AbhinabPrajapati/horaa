import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const publicDirectory = resolve(fileURLToPath(new URL("./public/", import.meta.url)));
const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".json", "application/json; charset=utf-8"],
]);
const port = Number(process.env.PORT || 5173);

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  const requestedPath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = resolve(publicDirectory, requestedPath);
  if (!filePath.startsWith(`${publicDirectory}${sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileInfo = await stat(filePath);
    if (!fileInfo.isFile()) {
      response.writeHead(404);
      response.end("Not Found");
      return;
    }

    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes.get(extname(filePath).toLowerCase()) || "application/octet-stream",
      "Content-Length": content.length,
      "Cache-Control": "no-store",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") {
      response.writeHead(404);
      response.end("Not Found");
      return;
    }

    console.error(`Failed to serve ${pathname}:`, error);
    response.writeHead(500);
    response.end("Internal Server Error");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Development server running at http://127.0.0.1:${port}`);
});
