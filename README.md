# epam-test

### Task: Directory and File Printer

#### Objective
Write a function that accepts a unique file path and reads the contents of the directory.
The function should print the names of directories and files in a well-structured and readable format.

#### Requirements
Input: The function should accept a single argument, which is the path to the directory.
Processing:
If the item at the path is a file, print the file name in a "pretty" format
(e.g., with some indentation or special characters).

If the item is a directory, recursively call the function on this directory to print its contents.
The recursion should continue until all nested directories and files have been printed, reaching the root of the given path.

Output:
Directory names should be clearly distinguished from file names.
The structure should visually represent the hierarchy of directories and files.
