# 选择基于 Node.js 18 和 Alpine Linux 的轻量级镜像作为基础环境
FROM node:18-alpine

# 设置容器内的工作目录为 /app，后续操作都基于此目录
WORKDIR /app

# 复制本地的 package.json 和 package-lock.json 文件到容器工作目录
COPY package*.json ./

# 在容器内运行 npm install，安装项目依赖
RUN npm install

# 复制本地项目的所有文件到容器工作目录
COPY . .

# 声明容器暴露的端口号 5173（Vite 默认开发服务器端口）
EXPOSE 5173

# 设置环境变量 HOST=0.0.0.0，确保 Vite 监听所有网络接口，方便外部访问
ENV HOST=0.0.0.0

# 容器启动时执行命令，运行 npm 脚本 dev，并加上 --host 参数，启动 Vite 开发服务器
CMD ["npm", "run", "dev", "--", "--host"]
