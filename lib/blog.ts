import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Use a safe calculation for the directory
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export async function getAllPosts(locale: string = "en") {
  // Default to "en" if missing
  try {
    // Safety: Ensure locale is a string
    const safeLocale = locale || "en";
    const localeDir = path.join(BLOG_DIR, safeLocale);

    if (!fs.existsSync(localeDir)) {
      console.warn(`Directory not found: ${localeDir}`);
      return [];
    }

    const files = fs.readdirSync(localeDir);

    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(localeDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
          slug: filename.replace(".md", ""),
          metadata: data,
          content: content,
        };
      });

    return posts.sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    );
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string, locale: string = "en") {
  try {
    const safeLocale = locale || "en";
    const filePath = path.join(BLOG_DIR, safeLocale, `${slug}.md`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      metadata: data,
      content: content,
    };
  } catch (e) {
    return null;
  }
}
