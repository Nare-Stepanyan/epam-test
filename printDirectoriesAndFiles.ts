import * as path from "path";
import * as fs from "fs/promises";

const filePathPrint = path.join(__dirname, "txt/print.txt");
const startPath = path.resolve("node_modules/diff");

const writeNameInFile = async (name: string): Promise<void> => {
  fs.appendFile(filePathPrint, name);
};

const indent = (count: number) => "  ".repeat(count);

const readDirectory = async (dirPath: string, space = 0): Promise<void> => {
  const directories = await fs.readdir(dirPath, {
    withFileTypes: true,
  });

  for (const directory of directories) {
    const fullPath = path.join(dirPath, directory.name);
    const tabs = indent(space);
    await writeNameInFile(`${tabs}${directory.name}/\n`);
    if (directory.isDirectory()) {
      await readDirectory(fullPath, space + 1);
    }
  }
};

readDirectory(startPath);
