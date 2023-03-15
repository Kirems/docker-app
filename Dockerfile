# syntax=docker/dockerfile:1

# STAGE 1: Build the Angular project
FROM node:16 AS builder

# Install Angular CLI
RUN npm install -g @angular/cli@15.0.0

# Change my working directory to a custom folder created for the project
WORKDIR /my-project

# Copy everything from the current folder (except the ones in .dockerignore) 
# into my working directory on the image
COPY . .

# Install dependencies and build my Angular project
RUN npm install && ng build


# STAGE 2: Build the final deployable image
#FROM nginx:1.22.1

# Allow the HTTP port needed by the Nginx server for connections
#EXPOSE 80

# Copy the generated static files from the builder stage
# to the Nginx server's default folder on the image
#COPY --from=builder /my-project/dist/docker-image-build /usr/share/nginx/html
