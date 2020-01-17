FROM node

WORKDIR /usr/src/app

COPY ./ui/package*.json ./ui/
COPY ./api/package*.json ./api/
RUN cd api && npm install
RUN cd ui && npm install
RUN npm install -g nodemon webpack webpack-cli @nestjs/cli

# RUN apt-get install wget -y

# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#   && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#   && apt-get update \
#   && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
#   --no-install-recommends \
#   && rm -rf /var/lib/apt/lists/*

# CMD ["google-chrome-unstable"]