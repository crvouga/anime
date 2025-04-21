# Use Node.js as the build environment
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the static site
RUN npm run build

# Use Nginx for serving the static site
FROM nginx:alpine

# Copy custom nginx config for SPA routing`
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from the build stage to nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
