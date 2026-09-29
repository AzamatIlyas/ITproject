# ITProject

```
ITProject/
├── frontend/   # React + Vite
├── backend/    # FastAPI
├── docker-compose.yml
└── .env
```

## Запуск через Docker

1. Создайте `.env` в корне (на основе переменных бэкенда).
2. Поднимите оба сервиса:

```bash
docker compose up --build
```

- Frontend: http://localhost:5173  
- Backend API: http://localhost:8000  
- Docs: http://localhost:8000/docs  

Остановить:

```bash
docker compose down
```
