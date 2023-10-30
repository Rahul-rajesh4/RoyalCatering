from rest_framework import serializers
from .models import login,UserRegister,Bookingslot,AddEvent

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model=login
        fields='__all__'

class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserRegister
        fields='__all__'

class bookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Bookingslot
        fields='__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddEvent
        fields = '__all__'