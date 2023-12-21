#! /usr/bin/env node
import { program } from "commander";

import { versions, downloadTemplate, list } from "../controller/index.js";

import { defaultNodeVersion } from "../config/index.js";

// -v, --version 输出版本号
program.version(versions(), "-v, --version");

program
  .command("init")
  .description("初始化项目模版")
  .action(() => {
    // 校验node版本是否符合要求
    if (process.version < defaultNodeVersion) {
      console.log("node版本过低，请升级node版本");
      process.exit(1);
    }
    downloadTemplate();
  });

program
  .command("list")
  .description("查看所有可用模版")
  .action(() => {
    list();
  });

program.parse(process.argv);
