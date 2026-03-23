# 🌐 在线学习平台 - 部署指南

## 📋 目录
- [快速开始](#快速开始)
- [本地运行](#本地运行)
- [部署到公网](#部署到公网)
- [常见问题](#常见问题)

---

## 🚀 快速开始

### 方式1: 使用Python本地服务器（推荐）

#### Windows用户：
```powershell
# 进入文件夹
cd "e:\web开发文件夹"

# 运行服务器
python server.py
```

#### Mac/Linux用户：
```bash
cd "e:/web开发文件夹"
python3 server.py
```

✅ **完成！** 浏览器会自动打开 `http://localhost:8000`

### 方式2: 使用Node.js

如果已安装Node.js，可以使用http-server：
```bash
npm install -g http-server
cd "e:\web开发文件夹"
http-server
```

---

## 💻 本地运行

### Python服务器特点：
- ✅ 无需安装依赖
- ✅ 自动打开浏览器
- ✅ 支持CORS跨域访问
- ✅ 按 `Ctrl+C` 停止服务器

### Python版本要求：
- Python 3.6+ (大多数系统都已预装)

检查Python版本：
```powershell
python --version
# 或
python3 --version
```

---

## 🌍 部署到公网

### 选项1: Vercel (推荐，最简易)

1. **创建GitHub账户**（如未有）- https://github.com

2. **上传文件到GitHub**：
   - 创建新的仓库
   - 上传所有HTML和相关文件
   - 确保main分支有index.html

3. **访问 Vercel** - https://vercel.com
   - 点击 "New Project"
   - 选择你的GitHub仓库
   - 点击 "Deploy"
   - 等待部署完成（通常1-2分钟）

4. **访问你的网站**：
   ```
   https://你的项目名.vercel.app
   ```

### 选项2: Netlify

1. **访问 Netlify** - https://netlify.com
2. **Sign up with GitHub**
3. **New site from Git**
4. **选择你的仓库**
5. **Publish**

网址格式：`https://你的项目名.netlify.app`

### 选项3: GitHub Pages

1. **创建GitHub仓库** （名称格式: `用户名.github.io`）
2. **上传所有文件**
3. **自动访问**: `https://用户名.github.io`

### 选项4: 000webhost（完全免费）

1. 访问 https://www.000webhost.com
2. 注册免费账户
3. 上传文件
4. 获取免费域名

---

## 📁 文件结构

```
e:/web开发文件夹/
├── index.html                    # ✨ 首页（新增）
├── server.py                     # ✨ 本地服务器脚本（新增）
├── README.md                     # ✨ 本文件（新增）
│
├── course_english.html           # 英文课程
├── course_math.html              # 数学课程
├── course_physics.html           # 物理课程
├── courses.html                  # 课程总览
│
├── EX1书推荐1.html               # EX1 书籍推荐
├── ex2.html                      # EX2 实验教材
├── guilin_exhibition.html        # 桂林展览
│
├── 发给学生的实验素材/
│   ├── ex_1_1/                  # 书籍阅读项目
│   │   ├── book1.html
│   │   ├── book2.html
│   │   ├── book3.html
│   │   └── book4.html
│   └── kwtz32/                  # 综合技术项目
│       ├── kwtz32-1.html
│       ├── kwtz32-2.html
│       ├── kwtz32-3.html
│       └── kwtz32-4.html
│
└── images/                       # 图片文件夹
```

---

## ✨ 新增功能

### index.html （首页）
- 🎨 现代化设计，响应式布局
- 📱 适配所有设备（手机、平板、电脑）
- 🔗 整合所有课程和资源链接
- 🎯 快速导航和分类展示

### server.py （本地服务器）
- ⚡ 启动快速HTTP服务器
- 🌐 支持CORS跨域请求
- 🔄 自动打开浏览器
- 📊 显示访问日志

---

## 🔧 常见问题

### Q: Python报错 "No module named..." 
**A:** 确保安装了Python 3.6+。可以重新下载安装。

### Q: 端口8000被占用
**A:** 修改server.py中的`PORT = 8000`为其他端口，如8080, 9000等

### Q: 如何在手机上访问？
**A:** 
1. 保持电脑和手机在同一WiFi
2. 获取电脑的IP地址：`ipconfig` (Windows) 或 `ifconfig` (Mac/Linux)
3. 在手机浏览器访问：`http://电脑IP:8000`

### Q: 如何让他人访问我的网站？
**A:** 部署到云平台（Vercel/Netlify/GitHub Pages）后，任何人都可以通过网址访问

### Q: 部署后如何更新内容？
**A:** 
- 修改本地文件
- 提交到GitHub
- Vercel/Netlify会自动重新部署

### Q: 如何添加自己的域名？
**A:** 大多数平台都支持自定义域名设置，具体步骤见各平台文档

---

## 📞 技术支持

如遇到问题，请检查：

1. ✅ Python版本是否 ≥ 3.6
2. ✅ 是否在正确的文件夹运行
3. ✅ 防火墙是否阻止端口8000
4. ✅ 是否有其他程序占用该端口

---

## 🎉 完成！

你现在可以：
- ✅ 本地运行网站 (访问 http://localhost:8000)
- ✅ 部署到公网 (供全球访问)
- ✅ 邀请他人查看你的资源

祝您使用愉快！ 🚀
