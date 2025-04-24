# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install ts-node and typescript globally if not in dependencies
RUN npm install -g ts-node typescript

# Copy source files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Run the app
CMD ["npx", "ts-node", "index.ts"]
