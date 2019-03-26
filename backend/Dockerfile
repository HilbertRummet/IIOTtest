from node
WORKDIR /
COPY package.json /
RUN npm install
COPY src /src
EXPOSE 4444
CMD [ "npm", "start" ]