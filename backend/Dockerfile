FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

RUN npm install

ENTRYPOINT [ "node", "server.js" ]

# # Base image
# FROM node:18

# # Create app directory
# WORKDIR /app

# # Copy package files first (for caching)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy rest of the code
# COPY . .

# # Expose port (change if needed)
# EXPOSE 3000

# # Run your app
# CMD ["npm", "start"]