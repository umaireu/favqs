# FavQs API

A RESTful API built with NestJS for managing favorite quotes. This API allows users to create, read, and delete favorite quotes.

## Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB
- **Container**: Docker

## API Endpoints

### Quotes

- `GET /api/quotes` - Get all favorite quotes
- `POST /api/quotes` - Create a favorite quote
- `DELETE /api/quotes/:id` - Delete a favorite quote

## Local Development Setup

### Prerequisites

- Docker
- Docker Compose

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
PORT=3000
NODE_ENV=development

# DB Configuration
DATABASE_HOST=localhost
DATABASE_NAME=quotes
```

### Running with Docker

1. Start the MongoDB container:

```bash
docker-compose up -d mongodb
```

2. Build and run the API:

```bash
# Build the Docker image
docker build -t favqs-api .

# Run the container
docker-compose up
```

The API will be available at `http://localhost:3000`

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run start:dev
```
