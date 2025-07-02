# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.4.1

# Base image
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

# Stage 1: Install dependencies
FROM base as deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Stage 2: Build the application
FROM base as build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 3: Final runtime image
FROM base as final
ENV NODE_ENV=production
USER node

# Copy base package.json
COPY package.json ./

# Copy production dependencies from deps stage
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copy built Next.js app and other runtime files from build stage
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/prisma ./prisma/    
COPY --from=build /usr/src/app/package.json ./   


EXPOSE 3000
CMD ["npm", "start"]
