import * as path from "path";
import * as fs from "fs/promises";

const folderName = "txt";
const startPath = path.resolve("node_modules/diff");

const createDirectoryIfNotExist = async (dirName: string): Promise<void> => {
  try {
    await fs.access(dirName);
  } catch (error) {
    await fs.mkdir(dirName);
  }
};

const writeNameInFile = async (name: string): Promise<void> => {
  const lastPartOfStartPath = path.basename(startPath);
  const filePrintDirectory = path.join(__dirname, folderName);
  const filePathPrint = path.join(
    filePrintDirectory,
    `${lastPartOfStartPath}.txt`
  );

  try {
    await createDirectoryIfNotExist(filePrintDirectory);
    await fs.appendFile(filePathPrint, name);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to write: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

const indent = (count: number) => "  ".repeat(count);

const readDirectory = async (dirPath: string, space = 0): Promise<void> => {
  try {
    const directories = await fs.readdir(dirPath, {
      withFileTypes: true,
    });

    for (const directory of directories) {
      const fullPath = path.join(dirPath, directory.name);
      const tabs = indent(space);
      const entryName = directory.isDirectory()
        ? `${directory.name}/`
        : directory.name;

      await writeNameInFile(`${tabs}${entryName}\n`);
      if (directory.isDirectory()) {
        await readDirectory(fullPath, space + 1);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.name} - ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

readDirectory(startPath);
