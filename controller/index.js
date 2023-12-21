import inquirer from "inquirer";
import download from "download-git-repo";
import ora from "ora";
import chalk from "chalk";
import logSymbols from "log-symbols";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { templates, promptList } from "../config/index.js";

/**
 * version
 * @returns {string} 版本号
 */
export const versions = () => {
  // 读取工具的package.json文件
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const packagePath = path.resolve(__dirname, "../package.json");
  // 读取文件内容
  const packageContent = fs.readFileSync(packagePath, "utf8");
  // 转为json对象
  const packageResult = JSON.parse(packageContent);
  // 返回版本号
  return packageResult.version;
};

/**
 * init
 * @param {string} templateName 模版名称
 * @param {string} projectName 项目名称
 * @returns {void}
 */
export const downloadTemplate = async (templateName, projectName) => {
  inquirer.prompt(promptList).then((answers) => {
    const spinner = ora(chalk.bgGreen("正在创建项目...")).start();
    const { templateName, projectName } = answers;
    const { downloadUrl } = templates[templateName];
    /**
     * downloadUrl: 下载地址
     * projectName: 项目名称
     * { clone: true }: 是否使用git clone
     * (err) => {}: 回调函数
     */
    download(downloadUrl, projectName, { clone: true }, (err) => {
      if (err) {
        spinner.fail(chalk.red("项目创建失败"));
        console.log(logSymbols.error);
        return;
      }
      // 修改模版文件中的package.json文件
      const packagePath = `${projectName}/package.json`;
      const packageContent = fs.readFileSync(packagePath, "utf8");
      const packageResult = handlebars.compile(packageContent)(answers);
      fs.writeFileSync(packagePath, packageResult);
      // 修改模版中的package-lock.json文件
      const packageLockPath = `${projectName}/package-lock.json`;
      const packageLockContent = fs.readFileSync(packageLockPath, "utf8");
      const packageLockResult = handlebars.compile(packageLockContent)(answers);
      fs.writeFileSync(packageLockPath, packageLockResult);
      spinner.succeed(chalk.yellow("项目创建成功")); // 下载成功提示
    });
  });
};

/**
 * list
 * @returns {void}
 */

export const list = () => {
  console.log(chalk.bgGreen("可用模版列表:"));
  Object.keys(templates).forEach((item) => {
    console.log(`${chalk.yellow(item)}`);
  });
};
