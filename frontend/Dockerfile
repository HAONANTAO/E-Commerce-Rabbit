FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# 需要添加这个环境变量让 Vite 能够在 Docker 中正常工作
ENV HOST=0.0.0.0

CMD ["npm", "run", "dev", "--", "--host"]