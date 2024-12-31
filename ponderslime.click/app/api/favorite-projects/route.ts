import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public/projects/favoriteProjects.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const favoriteProjects = JSON.parse(fileContents);

    return new Response(JSON.stringify(favoriteProjects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
