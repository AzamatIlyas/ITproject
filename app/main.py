from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqladmin import Admin, ModelView
from app.admin.authentication import AdminAuth
from app.admin.views import UsersAdmin
from app.db.db_config import engine

from app.api.router.user import router as user_router

app = FastAPI()
authentication_backend = AdminAuth(secret_key="your-secret-key")

admin = Admin(
    app,
    engine,
    authentication_backend=authentication_backend
)

admin.add_view(UsersAdmin)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(user_router)
