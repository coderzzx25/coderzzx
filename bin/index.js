#! /usr/bin/env node
import { program } from "commander";

import { versions, downloadTemplate, list } from "../controller/index.js";

// -v, --version 输出版本号
program.version(versions(), "-v, --version");

program
  .command("init")
  .description("初始化项目模版")
  .action(() => {
    downloadTemplate();
  });

program
  .command("list")
  .description("查看所有可用模版")
  .action(() => {
    list();
  });

program.parse(process.argv);
