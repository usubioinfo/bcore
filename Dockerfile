FROM node:12
WORKDIR	~/apps/bioinftest
COPY package*.json ./

RUN npm	install
RUN npm run sass:build

COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]
