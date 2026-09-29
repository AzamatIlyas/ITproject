from typing import Optional

from pydantic import BaseModel, EmailStr


class SLogin(BaseModel):

    email: EmailStr
    password: str

class SUserRegistration(SLogin):
    first_name: str
    last_name: str
    student_id: str

class SUserResponse(BaseModel):
    first_name: str
    last_name: str
    email: str
