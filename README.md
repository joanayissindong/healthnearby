# 🏥 HealthNearby

> Find healthcare facilities near you in Cameroon — hospitals, clinics, pharmacies, and laboratories — with real-time open/closed status and Mobile Money payment information.

🔗 **Live demo:** https://healthnearby-8kw8.vercel.app 

🔗 **API:** https://healthnearby.vercel.app


💻 **Author:** Joan Wilfried AYISSI NDONG · Douala, Cameroon

---

## 🎯 Problem

In Cameroon, only 7.9% of the population has health insurance. Finding the right facility — open right now, accepts MTN MoMo, runs the right test — relies entirely on word of mouth. HealthNearby fixes that.

---

## ✨ Features

- 🔍 Search by city (Douala, Yaoundé)
- 🏷️ Filter by facility type (hospital, clinic, pharmacy, laboratory)
- 💸 Filter by payment method (MTN MoMo, Orange Money)
- 🕐 Real-time open/closed status based on current local time
- 📞 One-tap call button — native mobile experience
- 📱 Fully responsive: mobile → tablet → desktop

---

## 🛠️ Tech Stack

| Layer                      | Technology                 |
|----------------------------|----------------------------|
| Frontend                   | React + TailwindCSS (Vite) |
| Backend                    | Node.js + Express REST API |
| Database                   | PostgreSQL                 |
| Deployment (frontend)      | Vercel                     |
| Deployment (backend)       | Vercel (serverless)        |
| Deployment (database)      | Neon                       |

---

## 🏗️ Architecture

This project follows **Clean Architecture** combined with **Domain-Driven Design (DDD)** principles.

```
Presentation  →  Controllers, Routes
Application   →  Use Cases, DTOs, Mappers, Filters
Domain        →  Entities, Value Objects, Repository Interfaces
Infrastructure → PostgreSQL, Repository Implementations, Seeders
```

**Design patterns used:** Repository, Use Case, DTO, Factory, Value Object, Strategy, Mapper.

---

## 🗂️ Project Structure

```
healthnearby/
├── client/                  # React frontend
└── server/
    └── src/
        ├── domain/          # Entities, Value Objects, Repository interfaces
        ├── application/     # Use Cases, DTOs, Mappers, Filters
        ├── infrastructure/  # PostgreSQL, Repository implementations
        └── presentation/    # Controllers, Routes, Middleware
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### Installation

```bash
# Clone the repository
git clone https://github.com/joanayissindong/healthnearby.git
cd healthnearby

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### Environment variables

**client/.env**
```
VITE_API_URL=http://localhost:5000
```

**server/.env**
```
PORT=5000
DATABASE_URL=postgresql://sudojayn:Healthnearby@localhost:5432/healthnearby
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Database setup

```bash
createdb healthnearby
psql -d healthnearby -f server/src/infrastructure/database/migrations/001_create_facilities.sql
node server/src/infrastructure/database/seeds/facilities.seed.js
```

### Run locally

```bash
# Start the backend (from /server)
npm run dev

# Start the frontend (from /client)
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint                                                            | Description           |
|--------|---------------------------------------------------------------------|-----------------------|
| GET    | `/api/v1/facilities`                                                | All facilities        |
| GET    | `/api/v1/facilities/search?city=douala&type=pharmacy&mtn_momo=true` | Search with filters   |
| GET    | `/api/v1/facilities/:id`                                            | One facility by ID    |
| GET    | `/api/v1/facilities/meta/cities`                                    | Available cities      |
| GET    | `/api/v1/facilities/meta/types`                                     | Available types       |

---

## 📦 Data

20 healthcare facilities across **Douala** (15) and **Yaoundé** (5), covering hospitals, clinics, pharmacies, laboratories, and community health centers.

---

## 🗺️ Roadmap

- [ ] GPS-based geolocation search
- [ ] Expand to more Cameroonian cities
- [ ] Facility self-registration portal
- [ ] Mobile app (React Native)

---

## 📄 License

MIT

---

*Built with ❤️ from Douala, Cameroon · DEV Weekend Challenge 2026*