from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from django.utils import timezone

from rest_framework import status, filters
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Brand, Iha, Reservation
from .serializers import BrandSerializer, IhaSerializer, ReservationSerializer, CustomerReservationSerializer
from .permissions import IsStaffOrReadOnly

# Create your views here.

class BrandMVS(ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

    #! Brands can wiew users, and post, put, delete can only be done if they are user staff.
    #! #! Markalar kullanıcıları görüntüleyebilir ve put, patch, delete, post işlemleri ancak user staff ise yapılabilir.
    permission_classes = [IsAuthenticated, IsStaffOrReadOnly]



class IhaMVS(ModelViewSet):
    queryset = Iha.objects.all()
    serializer_class = IhaSerializer
    permission_classes = [IsStaffOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['brand__name']


    def get_queryset(self):
        queryset = super().get_queryset()
        
        #! We do a detailed filtering with query_params:
        #! query_params ile detaylı filtreleme yapıyoruz
        start = self.request.query_params.get('start')
        end = self.request.query_params.get('end')
        
        if start is not None or end is not None:

            not_available = Reservation.objects.filter(
                start_date__lt=end, end_date__gt=start, approval = True
            ).values_list('iha_id', flat=True)  # [1, 2]
            queryset = queryset.exclude(id__in=not_available)
        
        return queryset


class ReservationMVS(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    #! When the user is logged in, they can make a reservation.
    #! Kullanıcı login olduğu zaman rezervasyon işlemi yapabilir
    permission_classes = [IsAuthenticated]

    #! #! If the user is an admin, he/she will see all the reservations, and if the user is a customer, he/she will only see his/her reservations after confirmation.
    #! Kullanıcı admin ise tüm rezervasyonları görsün, kullanıcı müşteri ise sadece kendi rezervasyonlarını onay işlemi gerçekleştirildikten sonra görsün.
    def get_queryset(self):
        if self.request.user.is_staff:
            return super().get_queryset()
        return super().get_queryset().filter(customer = self.request.user, approval = True)
    
    def get_serializer_class(self):
        if self.request.user.is_staff:
            return super().get_serializer_class()
        return CustomerReservationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            current_user = self.request.user
            serializer.validated_data['customer_id'] = current_user.id
            serializer.save()
            data = {
                "message" : "Your reservation request has been received. We will contact you as soon as possible."
            }
            return Response(data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
