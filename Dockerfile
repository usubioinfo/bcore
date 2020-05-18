FROM node:12
WORKDIR	~/apps/bioinftest
COPY package*.json ./

RUN npm	install

COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]
