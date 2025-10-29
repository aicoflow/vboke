import { readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// 获取当前文件目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * 自动扫描 articles 目录，生成侧边栏配置
 * @param excludeDirs 需要排除的目录名数组，默认排除 "fragment"
 * @returns 侧边栏配置数组
 */
export function getArticlesDirectories(excludeDirs: string[] = ["fragment"]) {
  const articlesPath = join(__dirname, "..", "articles");
  
  try {
    const items = readdirSync(articlesPath);
    const directories = items.filter((item) => {
      const fullPath = join(articlesPath, item);
      return statSync(fullPath).isDirectory() && !excludeDirs.includes(item);
    });
    
    // 为每个目录生成 sidebar 配置
    return directories.map((dir) => ({
      documentRootPath: "docs",
      scanStartPath: `articles/${dir}`,
      resolvePath: `/articles/${dir}/`,
      useTitleFromFileHeading: false, // 使用文件名而不是文件内的标题
      useFolderTitleFromIndexFile: false,
      hyphenToSpace: true,
      underscoreToSpace: true,
      collapsed: false,
      sortMenusByName: false,
      sortMenusByFrontmatterOrder: true,
      excludeFilesByFrontmatterFieldName: "catalogue",
      // 自动移除文件名前的数字前缀（如 "01. ", "02. " 等）
      removePrefixAfterOrdering: true,
      prefixSeparator: ".",
    }));
  } catch (error) {
    console.error("Error reading articles directory:", error);
    return [];
  }
}

