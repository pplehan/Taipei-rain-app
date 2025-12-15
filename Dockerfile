# 使用 Node.js 官方映像
FROM node:20

# 建立工作目錄
WORKDIR /app

# 複製 package.json 並安裝依賴
COPY package*.json ./
RUN npm install

# 複製其餘程式碼
COPY . .

# 編譯 Vue 專案 (產生 dist 資料夾)
RUN npm run build

# 設定環境變數 (Cloud Run 慣例)
ENV PORT=8080
EXPOSE 8080

# 啟動伺服器
CMD ["node", "server.cjs"]