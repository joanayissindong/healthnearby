# 🏥 HealthNearby

> Find healthcare facilities in Cameroon — with real-time open/closed status and Mobile Money filters.

**It is 11 PM in Bépanda, Douala. A mother's child has a fever that won't break. She needs a pharmacy — open right now, that accepts MTN MoMo. She has no app to check. She starts calling neighbors.**

HealthNearby was built to end that walk.

🔗 **Live demo:** https://healthnearby-8kw8.vercel.app
💻 **API:** https://healthnearby.vercel.app/api/v1/facilities
📝 **DEV.to article:** https://dev.to/joanayissindong/healthnearby-find-healthcare-facilities-in-cameroon

---

## The Problem

- **7.9%** of Cameroonians have health insurance — 92.1% navigate the system entirely on their own
- **70%** of all healthcare spending comes directly from households
- **19.5 million** active Mobile Money accounts — yet no way to filter facilities by payment method
- On-duty pharmacy rotations are published only in local newspapers — inaccessible at 11 PM

The facilities exist. The payment infrastructure exists. **What's missing is the information layer.**

HealthNearby is that information layer.

---

## Features

| Feature | Description |
|---|---|
| 🔍 **Search** | By city (Douala, Yaoundé) and facility type |
| 💛 **MTN MoMo filter** | Find facilities that accept Mobile Money |
| 🟠 **Orange Money filter** | Same for Orange Money users |
| 🌙 **On-duty filter** | Surface pharmacies open late at night |
| 🕐 **Real-time status** | Open/closed computed from current local time — no manual updates |
| 📞 **One-tap call** | Native `tel:` link, works on any Android phone |
| 📱 **Mobile-first** | Designed for low-end Android phones first |

---

## Tech Stack

| Layer | Technology | Hosting |
|---|---|---|
| Frontend | React + TailwindCSS (Vite) | Vercel |
| Backend | Node.js + Express REST API | Vercel (serverless) |
| Database | PostgreSQL — 20 seeded facilities | Neon |

---

## Architecture

This project follows **Clean Architecture** combined with **Domain-Driven Design (DDD)**, with strict dependency rules between layers.

```
Presentation   →  Controllers · Routes · Middleware
Application    →  Use Cases · DTOs · Mappers · Filters
Domain         →  Entities · Value Objects · Repository Interfaces
Infrastructure →  PostgreSQL · Repository Implementations · Seeders
```

**Golden rule:** the Domain layer has zero external dependencies. It does not know about PostgreSQL, Express, or React.

### Design Patterns

| Pattern | Role |
|---|---|
| **Repository** | Abstracts data access behind an interface — swap the DB without touching business logic |
| **Use Case** | One class = one business action, fully testable in isolation |
| **Value Object** | `OpeningHours` computes real-time open/closed status — immutable, no cron job needed |
| **Strategy** | Filters are composable strategies chained via `FilterChain` |
| **DTO** | Clean data contracts between layers |
| **Factory** | Builds valid `Facility` entities from raw data |
| **Mapper** | Converts domain entities to response DTOs |

---

## Project Structure

```
healthnearby/
├── client/                        # React frontend (Vite)
│   └── src/
│       ├── components/
│       │   ├── facility/          # FacilityCard, FacilityList, FacilityDetail
│       │   ├── search/            # SearchBar, FilterBar
│       │   ├── layout/            # Header, Footer
│       │   └── ui/                # Badge, StatusIndicator, CallButton, Loader
│       ├── pages/                 # HomePage, FacilityDetailPage, NotFoundPage
│       ├── hooks/                 # useFacilities, useFacilityDetail
│       ├── services/              # facilityApiService
│       └── utils/                 # openingHoursHelper, formatHelper
│
└── server/                        # Node.js + Express backend
    └── src/
        ├── domain/                # Entities, Value Objects, Repository interfaces
        ├── application/           # Use Cases, DTOs, Mappers, Filters
        ├── infrastructure/        # PostgreSQL, Repository implementations, Seeds
        └── presentation/          # Controllers, Routes, Middleware
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/facilities` | All facilities |
| GET | `/api/v1/facilities/search?city=douala&type=pharmacy&mtn_momo=true` | Search with filters |
| GET | `/api/v1/facilities/:id` | One facility by ID |
| GET | `/api/v1/facilities/meta/cities` | Available cities |
| GET | `/api/v1/facilities/meta/types` | Available types |
| GET | `/api/v1/health` | Health check |

---

## Getting Started Locally

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
# Create the database
createdb healthnearby

# Run migration
psql -d healthnearby -f server/src/infrastructure/database/migrations/001_create_facilities.sql

# Seed 20 facilities
node server/src/infrastructure/database/seeds/facilities.seed.js
```

### Run locally

```bash
# Backend (from /server)
npm run dev

# Frontend (from /client)
npm run dev
```

---

## Data

20 healthcare facilities across **Douala** (15) and **Yaoundé** (5):

| Type | Count |
|---|---|
| Hospitals | 4 |
| Clinics | 5 |
| Pharmacies | 6 |
| Laboratories | 3 |
| Community health centers | 2 |

Each facility includes: name, type, city, district, address, phone, opening hours, services, and accepted payment methods (Cash, MTN MoMo, Orange Money, Insurance).

---

## Roadmap

- [ ] GPS-based geolocation — show facilities closest to current position
- [ ] Expand to Bafoussam, Bamenda, Garoua and more Cameroonian cities
- [ ] On-duty pharmacy weekly notifications via WhatsApp or SMS
- [ ] Facility self-registration portal
- [ ] Patient reviews and ratings
- [ ] Expand to Gabon, Congo, Côte d'Ivoire
- [ ] Health access analytics dashboard for NGOs and health agencies

---

## License

MIT

---

*Built with ❤️ from Yaoundé, Cameroon*
*Joan Wilfried AYISSI NDONG · DEV Weekend Challenge 2026*
