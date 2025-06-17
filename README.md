# 🎓 Student Dashboard – DevOps CI/CD Project

This is a React-based Student Dashboard application with a mock backend (JSON Server), fully containerized with Docker and integrated into a complete DevOps CI/CD pipeline using Jenkins, Git, Docker, Graphite, and Grafana.

---

## 🚀 Features

- Responsive React frontend
- Mock backend using JSON Server (`db.json`)
- CI/CD integration with Jenkins (build → test → Dockerize → deploy)
- Docker-based deployment using Nginx
- Application and server monitoring using Collectd, Graphite, and Grafana

---

## 🛠️ Tech Stack

| Layer         | Technology                       |
|---------------|----------------------------------|
| Frontend      | React + Bootstrap                |
| Backend       | JSON Server (Mock API)           |
| CI/CD         | Jenkins + Git                    |
| Containerization | Docker + Docker Compose       |
| Monitoring    | Collectd → Graphite → Grafana    |

---

## 🧪 Available Scripts

In the project directory, you can run:

```bash
npm install       # Install dependencies
npm run server    # Run JSON backend on port 3001
npm start         # Run React app on port 3000 or 3002
npm run build     # Build static production files
