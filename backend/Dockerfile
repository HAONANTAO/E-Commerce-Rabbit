FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# 添加环境变量
ENV NODE_ENV=development

CMD ["npm", "run", "dev"]