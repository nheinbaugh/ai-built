# Build stage
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy all configuration files first
COPY package.json package-lock.json ./
COPY nx.json tsconfig.base.json ./
COPY jest.preset.js ./
COPY eslint.config.js ./

# Copy the entire workspace structure needed for NX
COPY apps ./apps
COPY libs ./libs

# Install dependencies
RUN npm ci

# Build the application (using correct nx flags)
RUN npx nx run my-voting-api:build --configuration=production --skip-nx-cache

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files for production install
COPY package.json package-lock.json ./

# Copy built assets from builder
COPY --from=builder /app/dist/apps/my-voting-api ./

# Install production dependencies
RUN npm ci --production && \
    npm install --production tslib express cors helmet

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start the application
CMD ["node", "main.js"] 