# 人间仍存 · the-fool.xyz

零依赖静态档案站：世界观、人物、第一卷章节与仓库内核心设定文档。

## 本地预览

```bash
npx wrangler pages dev .
```

或直接打开 `index.html`。页面不依赖构建步骤。

## 功能

- 响应式阅读首页与移动目录
- 人物卡片
- 第一卷章节状态筛选
- 档案索引搜索，直达 GitHub 源文件
- `Ctrl/⌘ + K` 聚焦档案搜索
- `/api/health` 健康检查（Cloudflare Pages Functions）

## 密钥与部署

真实密钥只放在 Cloudflare Pages 或 GitHub Repository Secrets：

- `CLOUDFLARE_API_TOKEN`：仅部署用；最小权限为目标账户的 **Cloudflare Pages: Edit**。
- `CLOUDFLARE_ACCOUNT_ID`：部署目标账户 ID。

不要把 GitHub PAT、Cloudflare token、DNS 验证值或 `.env` 文件提交进仓库。`.env.example` 只保留变量名与公开站点地址。

在 Cloudflare Pages 创建项目时，连接本仓库，构建命令留空，输出目录填 `.`。自定义域名绑定为 `the-fool.xyz` 后再在 Cloudflare DNS 中完成验证。
