# Wechat Mini Program Meets TypeScript

让TS用户更舒适得开发小程序应用。 🤗

[minapp](https://github.com/qiu8310/minapp)真的是个非常棒的项目，一直维护着好用的VSC插件以及json-schema，如果觉得不错，可以直接使用minapp开发。但是对我而言，这个repo里给我提供的工具已经满足了我的基本需求了。

## Usage

建议直接**点击右上角[Download Zip](https://github.com/fimars/wechat-mini-program-meets-ts/archive/master.zip)**, 下载本项目当作模板，暂时没有使用模板CLI工具的打算。

**建议使用[Visual Stuido Code](https://code.visualstudio.com/)进行开发**

## Recipes

1. VSC支持通过在json中定义`$schema`字段进行声明此json文件可以使用的字段。schema文件可以使用社区中比较完善的[minapp所定义的schema文件](https://github.com/qiu8310/minapp/tree/master/schema)。在json文件中`Ctrl + <space>`然后输入`mina`就会出现可选择的`$schema`。

2. 对TypeScript有良好的支持，当前小程序项目通过引入`wx.d.ts`文件为小程序原生接口提供开发支持。目前该类型文件使用的是第三方所维护的一个[repo](https://github.com/Adherentman/Typescript-wxApi.d.ts)。

3. 一些有用的插件`tslint`, `minapp`, `GitLens`

4. 满足TS用户的修饰器库，参考`pages/index/index.ts`

## Notice

开发者工具的项目目录直接指向生成的dest目录
