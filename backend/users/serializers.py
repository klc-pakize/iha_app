from rest_framework import serializers, validators
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import make_password
from dj_rest_auth.serializers import TokenSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
        required=True,
        validators=[validators.UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={"input_type": "password"}
    )

    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={"input_type": "password"}
    )

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'phone',
            'email',
            'password',
            'password2'
        ]

        extra_kwargs = {
            "password": {"write_only": True},
            "password2": {"write_only": True}
        }

    def create(self, validated_data):
        password = validated_data.get("password")
        validated_data.pop("password2")

        user = User.objects.create(**validated_data)
        user.password = make_password(password)
        user.save()
        return user

    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})
        return data

#! We have customized the TokenSerializer so that when the user logs in, not only the key information is returned, but also personal information.
#! TokenSerializer'ı, kullanıcı oturum açtığında yalnızca anahtar bilgilerinin değil, kişisel bilgilerinin de döndürüleceği şekilde özelleştirdik.
class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', "username",'email', 'first_name', 'last_name','phone')


class CustomTokenSerializer(TokenSerializer):

    user = UserTokenSerializer(read_only=True)

    class Meta(TokenSerializer.Meta):
        fields = ('key', 'user')