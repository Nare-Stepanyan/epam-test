import * as path from "path";
import * as fs from 'fs/promises';

const filePathPrint = path.join(__dirname, "txt/print.txt");
const startPath = path.resolve('node_modules')

const readDirectory = async (dirPath: string): Promise<void> => {
  const data = await fs.readdir(dirPath, { recursive: true });
  console.log(data)
};


readDirectory(startPath);