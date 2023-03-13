from django.conf import settings
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your models here.

class Brand(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
        

class Iha(models.Model):
    SHB = (
        ("Mach", "Mach"),
        ("Knot", "Knot"),
    )
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name="iha")
    model_name = models.CharField(max_length=50)
    air_stay_time = models.CharField(max_length=25)
    cruise_speed = models.PositiveSmallIntegerField()
    cruise_speed_unit = models.CharField(max_length=5, choices=SHB)
    useful_load_capacity = models.CharField(max_length=50)
    communication_range = models.CharField(max_length=100)
    wingspan = models.PositiveSmallIntegerField()
    length = models.FloatField()
    image = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.brand.name} {self.model_name}"

class Reservation(models.Model):
    customer = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'customers', null=True)
    iha = models.ForeignKey(Iha, on_delete = models.CASCADE, related_name = 'iha')
    start_date = models.DateField()
    end_date = models.DateField()
    approval = models.BooleanField(default=False)
    

    def __str__(self):
        return f"{self.iha}"
    