# frontend/Dockerfile

# Use Node LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start the frontend
CMD ["npm", "run", "dev"]