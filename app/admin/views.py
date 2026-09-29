from sqladmin import ModelView

from app.auth.auth import get_password_hash
from app.db.models.user import User


class UsersAdmin(ModelView, model=User):

    column_list = [
        User.id,
        User.student_id,
        User.first_name,
        User.last_name,
        User.email
    ]

    form_excluded_columns = [
        User.created_at,
        User.is_admin
    ]

    can_delete = True

    name = "User"
    name_plural = "Users"

    async def on_model_change(self, data, model, is_created, request):
        if is_created and data.get("password"):
            data["password"] = get_password_hash(data["password"])