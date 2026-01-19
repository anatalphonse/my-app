# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# EXPOSE 5173

# CMD ["npm", "run", "dev", "--", "--host"]



# Use Node.js for building
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve the build
FROM nginx:alpine
# Check your local project: if 'npm run build' creates a 'dist' folder, use /app/dist
# If it creates a 'build' folder, use /app/build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]