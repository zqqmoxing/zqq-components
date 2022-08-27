const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const path = require("path");
const fsExtra = require("fs-extra");
const fs = require("fs");
const option = {
  name: "zqq-components",
  version: "1.0.1",
  keywords: JSON.stringify(["element-plus", "ts", "封装组件", "二次封装"])
}; //发布用的配置
//打包的入口文件夹
const entryDir = path.resolve(__dirname, "../src/components");
//打包的出口文件夹
const outDir = path.resolve(__dirname, "../lib");

//vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
});

//rollup配置
const rollupOptions = {
  //这两个库不需要打包
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
};

//全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, "index.ts"),
        //组件库名字
        name: "index",
        fileName: "index",
        //输出格式
        formats: ["es", "umd"]
      },
      outDir
    }
  });
};

//-----------------start单组件打包构建----------------
const buildSingle = async name => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: "index",
        fileName: "index",
        formats: ["es", "umd"]
      },
      outDir: path.resolve(outDir, name)
    }
  });
};
//每个组件生成package.json
const createPackageJson = name => {
  let fileStr;
  if (name) {
    fileStr = `{
      "name":"${name}",
      "main":"index.mjs",
      "module":"index.umd.js",
      "style":"style.css"
    }`;
  } else {
    name = ".";
    fileStr = `{
      "name": "${option.name}",
      "version": "${option.version}",
      "main": "index.umd.js",
      "module": "index.mjs",
      "types": "index.d.ts",
      "author": {
        "name": "zqq"
      },
      "keywords": ${option.keywords}
    }`;
  }

  //输出
  fsExtra.outputFile(path.resolve(outDir, `${name}/package.json`), fileStr, "utf-8");
};
// 每个组件生成index.d.ts
const createIndexDTs = name => {
  if (!name) {
    name = ".";
  }
  const fileStr = `//告诉使用我们组件库的项目
//我们这个组件是一个Vue插件
import { App } from "vue";
declare const _default: {
  install(app: App): void;
};
export default _default;
  `;
  //输出
  fsExtra.outputFile(path.resolve(outDir, `${name}/index.d.ts`), fileStr, "utf-8");
};
//-----------------end单组件打包构建----------------
//打包成库
const buildLib = async () => {
  await buildAll();
  //生成package.json,用于npm发布
  createPackageJson();
  //生成index.d.ts,用于npm发布
  createIndexDTs();

  //获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();

    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  console.log(components);
  //循环构建
  for (const name of components) {
    await buildSingle(name);
    //每个组件生成package.json
    createPackageJson(name);
    //每个组件生成index.d.ts
    createIndexDTs(name);
  }
};

buildLib();
