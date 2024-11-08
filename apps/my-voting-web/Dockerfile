# Dockerfile.dev
FROM node:20-alpine

# Install necessary build tools
RUN apk add --no-cache python3 make g++ libc6-compat

# Set working directory
WORKDIR /app

# Install global nx
RUN npm install -g nx

# We don't copy node_modules when mounting volumes
COPY package.json package-lock.json ./
COPY nx.json ./
COPY tsconfig.base.json ./

# Install dependencies
RUN npm ci

# Command to start development server
CMD ["sh", "-c", "if [ ! -d \"node_modules\" ]; then npm ci; fi && npx nx serve my-voting-web --host 0.0.0.0"]