# 🧩 Serverless AWS Backend with DynamoDB Local

This repository is a full-featured, **serverless backend system** built using:

- **Node.js + TypeScript**
- **AWS Lambda** (via Serverless Framework)
- **DynamoDB Local** for development/testing
- **Docker + Docker Compose** for infrastructure
- **Event-driven architecture** using EventBridge patterns

You can build, test, and run the entire backend locally using `serverless-offline` and `dynamodb-local` — no cloud account required to start building.

---

## 📦 Project Structure

```bash
<rootDir>/
│
├── backend/
│   ├── src/
│   │   ├── products/   # All product-related logic: handlers, types, events
│   │   ├── invoices/   # Invoice service: handlers, types, rules
│   │   ├── orders/     # Order processing, flows, state transitions
│   │   └── shared/     # Shared utils, types, constants, and integrations
│   ├── serverless.yml  # Serverless framework declaration
│   └── tsconfig.json   # TypeScript configuration for backend
│
├── docker-compose.yml  # Local DynamoDB service
└── .env                # Environment variables for local/dev usage
```

Each domain folder (`products`, `invoices`, `orders`) follows a **modular structure**, grouping all logic, types, and handlers related to that domain in one place. This improves testability, ownership, and scalability.

---

## 🧪 Local Setup

Follow these instructions to run **DynamoDB Local** in a Docker container on your machine:

### 1. 📥 Install Docker

Make sure Docker is installed and running.

- [Install Docker](https://docs.docker.com/get-docker/)

### 2. ⚙️ Install Docker Compose

Docker Compose is used to define and run the local services.

- [Install Docker Compose](https://docs.docker.com/compose/install/)

> ✅ Note: Docker Desktop comes with Compose pre-installed for most systems.

### 3. 🚀 Start DynamoDB Local

Once Docker and Docker Compose are installed, navigate to the project root and run:

```bash
docker compose up --detach
```

This will start DynamoDB Local on `http://localhost:8000`.

You can verify it's working by hitting:

```
GET http://localhost:8000/shell
```

---

## 🧬 Serverless + Local DynamoDB Setup

To run the backend offline with your local DynamoDB:

1. Make sure `.env` contains:

```env
IS_OFFLINE=true
AWS_REGION=us-east-1
```

2. Then run:

```bash
npx serverless offline
```

Your Lambdas are now running locally and connected to the DynamoDB container.

---

## 🧪 Running Tests

The project supports local testing using `jest`. Tests use the local DynamoDB instance and will auto-create/delete test tables.

```bash
npm run test
```

> Tests are located in:  
> `backend/src/tests/**/*.test.ts`

---

## ✨ Features

- Dynamically loads local DynamoDB if `IS_OFFLINE=true`
- Shared `dynamo-client.ts` to reuse configuration
- Fully isolated test setup with `beforeAll` and `afterAll`
- EventBridge-style Lambda handlers with typed events
- Modular domain architecture

---

## 🚧 Roadmap

- [ ] CI/CD integration
- [ ] Add OpenAPI (Swagger) for handlers
- [ ] More domain services (Users, Billing)
- [ ] Test coverage badge and reports

---

## 🧠 Tips

- Use `.env.test` for isolated testing config.
- Prefer running tests with Docker container **already running** (`docker compose up --detach`).
- Make sure your DynamoDB table keys and types are consistent with your data models.

---

## 📬 Contact

Feel free to open issues, ask questions, or suggest improvements!

---

> _Build what you dream._ – Jesus Plasencia
