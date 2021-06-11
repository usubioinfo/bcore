FROM node:15
WORKDIR	~/apps/bioinfocore
COPY package*.json ./

RUN npm	install
RUN npm audit; exit 0 && npm audit fix

COPY . .

RUN npm run sass:build

EXPOSE 3000
CMD ["node", "src/index.js"]
