# 目标

## 业务 => 工具 GUI 控制版

- 架构: electron + chrome 项目 + 微前端 + 离线
- 发布到 github: Jenkins
- 流程: prettier + eslint + githook + mocha + 测试覆盖率

- 首页菜单，菜单内容后端控制
- 菜单 1: 文件上传 + 断点续传
- 菜单 2: react 项目 => 爬虫豆瓣数据内容大致展示
- 菜单 3: vue 项目 => 随便

## 功能涉及技术点

- 离线打包 => service worker + Offline Plugin
- webpack5 配置 (后续)

  1. 联邦 => 微前端
  2. 多线程打包
  3. 分包
  4. 开发和生产模式区分
  5. 单元测试
     6、编写插件和 loader

- electron
- jenkins + github
- 多进程
- 前后端 (后续)
- 有大文件上传
- 断点续传
