import chalk from "chalk";

// 最低支持的node版本
export const defaultNodeVersion = "v18.0.0";

// 下载模版地址配置
export const templates = {
  "react-vite-ts-template": {
    url: "https://github.com/coderzzx25/react-vite-ts-template",
    downloadUrl: "https://github.com:coderzzx25/react-vite-ts-template#master",
    description: "react vite ts",
  },
  "vue-vite-ts-template": {
    url: "https://github.com/coderzzx25/vue-vite-ts-template",
    downloadUrl: "https://github.com:coderzzx25/vue-vite-ts-template#master",
    description: "vue vite ts",
  },
};

// 交互提示配置
export const promptList = [
  {
    type: "list",
    name: "templateName",
    message: chalk.yellow("请选择模版"),
    choices: Object.keys(templates),
  },
  {
    type: "input",
    name: "projectName",
    message: chalk.yellow("请输入项目名称"),
    default: "my-project",
  },
];
