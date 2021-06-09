function getCommonDirectoryPath(paths) {
    const dirs = paths.map(path => path.split("/"));
    const index = dirs[0].findIndex((folder, i) => dirs.some(dir => folder != dir[i]));
    return index ? dirs[0].slice(0, index).join("/") + "/" : "";
  }