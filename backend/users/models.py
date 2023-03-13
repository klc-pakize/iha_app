from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

# Create your models here.

#! We added phone field by inheriting User from AbstractUser
#! User'ı AbstractUser'dan devralarak telefon alanını ekledik
class User(AbstractUser):
    phone = models.CharField(max_length=25)
    