# SkyPath Global - 国际机票代理网站

## 快速部署到 Vercel（免费）

### 方法一：GitHub 部署（推荐）

1. **创建 GitHub 仓库**
   - 访问 https://github.com/new
   - 仓库名称：`skypath-global`
   - 选择 Public
   - 点击 "Create repository"

2. **上传文件**
   - 将以下文件上传到仓库：
     - `index.html`
     - `SPEC.md`
     - `vercel.json`

3. **连接 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录
   - 点击 "Add New..." → "Project"
   - 选择刚创建的 GitHub 仓库
   - 点击 "Deploy"

4. **完成！**
   - 等待约1分钟部署完成
   - Vercel 会给你一个免费域名（如 `skypath-global.vercel.app`）
   - 打开即可访问

### 方法二：命令行部署

1. **安装 Node.js**（如果没有）
   - 下载：https://nodejs.org

2. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **登录并部署**
   ```bash
   vercel login
   vercel
   ```

4. **按提示操作**
   - Set up and deploy? Yes
   - Which scope? 选择你的Vercel账号
   - Link to existing project? No
   - What's your project's name? skypath-global
   - In which directory is your code? 直接回车
   - Want to modify settings? No

### 方法三：拖拽上传（最简单）

1. 访问 https://vercel.com/drag-and-drop
2. 将 `index.html` 文件拖入页面
3. 等待部署完成

---

## 绑定自定义域名（可选）

部署完成后：
1. 访问 Vercel Dashboard
2. 进入你的项目 → Settings → Domains
3. 添加你的域名（如 aliticket.com）
4. 按提示配置 DNS 解析

---

## 搜索引擎收录

### Google
1. 访问 https://search.google.com/search-console
2. 添加你的网站域名
3. 验证所有权
4. 提交 sitemap：https://your-site.vercel.app/sitemap.xml

### 百度（中国大陆）
1. 访问 https://ziyuan.baidu.com/
2. 添加网站并验证
3. 提交链接

---

## 费用说明

| 项目 | 费用 |
|------|------|
| Vercel 托管 | 免费 |
| SSL证书 | 免费 |
| 自定义域名 | ¥30-80/年 |
| **总计** | **¥30-80/年** |
