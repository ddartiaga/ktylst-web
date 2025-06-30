# syntax=docker/dockerfile:1

# --- Build Stage ---
  FROM node:18-alpine AS builder

  WORKDIR /app
  
  # Install dependencies
  COPY package.json package-lock.json ./
  RUN npm ci
  
  # Copy everything (including .ts/.tsx and config)
  COPY . .
  
  # Build the project — Next.js will automatically pick up `next.config.ts`
  RUN npm run build
  
  # --- Runtime Stage ---
  FROM node:18-alpine AS runner
  
  ENV NODE_ENV=production \
      PORT=8080 \
      HOST="0.0.0.0"
  
  WORKDIR /app
  
  # Copy runtime files only
  COPY --from=builder /app/package.json ./
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/public ./public
  
  EXPOSE 8080
  
  CMD ["npm", "start"]
  