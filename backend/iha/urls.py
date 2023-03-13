from django.urls import path

from rest_framework import routers

from .views import BrandMVS, IhaMVS, ReservationMVS

router = routers.DefaultRouter()
router.register('brands', BrandMVS)
router.register('ihas', IhaMVS)
router.register('reservations', ReservationMVS)

urlpatterns = [] + router.urls
