from rest_framework import serializers

from .models import Brand, Iha, Reservation

class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = ('id', 'name')


class IhaSerializer(serializers.ModelSerializer):

    brand = serializers.StringRelatedField()
    brand_id = serializers.IntegerField()

    class Meta:
        model = Iha
        fields = (
            'id',
            'brand',
            'brand_id',
            'model_name',
            'air_stay_time',
            'cruise_speed',
            'cruise_speed_unit',
            'useful_load_capacity',
            'communication_range',
            'wingspan',
            'length',
            'image',
        )


class ReservationSerializer(serializers.ModelSerializer):

    customer = serializers.StringRelatedField()

    class Meta:
        model = Reservation
        fields = (
            'id',
            'customer',
            'customer_id',
            'iha',
            'start_date',
            'end_date',
            'approval',
        )

class CustomerReservationSerializer(serializers.ModelSerializer):

    customer = serializers.StringRelatedField()

    class Meta:
        model = Reservation
        fields = (
            'id',
            'customer',
            'customer_id',
            'iha',
            'start_date',
            'end_date',
        )
