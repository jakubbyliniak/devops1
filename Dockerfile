FROM node:20-alpine

WORKDIR /app

# Najpierw kopiujemy package.json — Docker cachuje warstwy
# Jeśli nie zmieniłeś zależności, nie będzie robił npm install od nowa
COPY package*.json ./
RUN npm install --production

COPY src/ ./src/

EXPOSE 3000

USER node

CMD ["node", "src/index.js"]

