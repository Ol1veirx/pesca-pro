# Express Docker Backend

This project is a simple backend application built with Express and PostgreSQL, running in Docker containers. It also includes PgAdmin for database management.

## Project Structure

```
express-docker-backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── index.js          # Route definitions
│   ├── controllers
│   │   └── database.js       # Database operations
│   └── config
│       └── database.js       # Database configuration
├── docker-compose.yml         # Docker Compose configuration
├── Dockerfile                 # Dockerfile for building the Express app
├── package.json               # NPM dependencies and scripts
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:

   ```
   git clone <repository-url>
   cd express-docker-backend
   ```

2. Build and run the Docker containers:

   ```
   docker-compose up --build
   ```

3. Access the application:

   - The Express app will be running on `http://localhost:3000`
   - PgAdmin will be accessible at `http://localhost:5050`

### Usage

- You can define your SQL queries in the `src/controllers/database.js` file.
- Use the routes defined in `src/routes/index.js` to interact with the database.

### Stopping the Application

To stop the application, press `CTRL+C` in the terminal where the Docker containers are running. You can also run:

```
docker-compose down
```

### License

This project is licensed under the MIT License.