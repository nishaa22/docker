# definiton
# Docker Notes

Docker is a platform for building, packaging, and running applications in lightweight, portable containers. A container includes the application code, runtime, libraries, and other dependencies, which helps the app behave consistently across development, testing, and production.

Docker uses images as reusable blueprints for containers. Compared to traditional virtual machines, containers usually start faster and use fewer system resources.

## Build an image

Use the following command to build the image for this project:

```bash
docker build -t my-docker .
```

- `-t` adds a tag (name) to the image.
- `my-docker` is the image name.
- `.` means Docker should use the current folder as the build context.

## Run a Docker image

To run a standard image from Docker Hub interactively:

```bash
docker run -it ubuntu
```

- `ubuntu` is a public image from Docker Hub.
- `-it` runs the container in interactive terminal mode.

## Run this project image

To run the custom image created from this folder:

```bash
docker run -p 3000:3000 my-docker
```

- `-p` maps ports in the format `<host_port>:<container_port>`.

If you want to pass the `PORT` environment variable explicitly:

```bash
docker run -p 3000:3000 -e PORT=3000 my-docker
```

- `-e` sets an environment variable inside the container.

## Open a shell inside the container

```bash
docker exec -it <container_id> bash
```

This opens a shell inside a running container so you can inspect files and directories.

## Share the image with another system

### 1. Create a Docker Hub account

Create an account on Docker Hub if you do not already have one.

### 2. Log in from the terminal

```bash
docker login
```

### 3. Push the image to Docker Hub

```bash
docker push <docker_username>/<docker_image>:latest
```

### 4. Pull the image on another laptop

```bash
docker pull <docker_username>/<docker_image>:latest
```

On some systems, such as certain MacBook setups, you may also need to specify a platform while running the image.

### 5. Run the pulled image

```bash
docker run -p 3000:3000 -e PORT=3000 <docker_username>/<docker_image>:latest
```

Use port mapping and pass environment variables if your application needs them.





## Docker Compose commands

Use these commands from the project root where `docker-compose.yml` exists.

### Start services

```bash
docker compose up
```

Run in detached mode:

```bash
docker compose up -d
```

### Build and start services

```bash
docker compose up --build
```

### View running services

```bash
docker compose ps
```

### View logs

All services:

```bash
docker compose logs -f
```

Specific service:

```bash
docker compose logs -f <service_name>
```

### Stop services

```bash
docker compose stop
```

### Stop and remove containers/networks

```bash
docker compose down
```

Also remove named and anonymous volumes:

```bash
docker compose down -v
```

### Restart services

```bash
docker compose restart
```

Restart a specific service:

```bash
docker compose restart <service_name>
```