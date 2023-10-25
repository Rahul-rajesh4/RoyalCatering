from rest_framework import serializers
from .models import login,UserRegister

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model=login
        fields='__all__'

class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserRegister
        fields='__all__'