# 使用官方 Node.js 18 的轻量 Alpine 版本作为基础镜像
FROM node:18-alpine

# 设置工作目录为 /app，后续操作都基于这个目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）到容器中，用于安装依赖
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制整个项目代码到容器内 /app 目录
COPY . .

# 声明容器暴露的端口 5000，后端服务监听这个端口
EXPOSE 5000

# 设置环境变量 NODE_ENV=development，告诉应用当前是开发环境
ENV NODE_ENV=development

# 容器启动时执行命令，运行 npm 脚本 dev（通常是启动后端开发服务器）
CMD ["npm", "run", "dev"]
