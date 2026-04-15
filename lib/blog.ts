import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Point to our content folder
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function getAllPosts(locale: string) {
  const localeDir = path.join(BLOG_DIR, locale);

  // If the folder doesn't exist yet, return empty array
  if (!fs.existsSync(localeDir)) return [];

  const files = fs.readdirSync(localeDir);

  const posts = files.map((filename) => {
    const filePath = path.join(localeDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // matter() separates the metadata (data) from the article text (content)
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      metadata: data,
      content: content,
    };
  });

  // Sort by date (newest first)
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );
}

export async function getPostBySlug(slug: string, locale: string) {
  try {
    const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);
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
