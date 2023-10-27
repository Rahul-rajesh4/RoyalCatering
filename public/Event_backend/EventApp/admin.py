from django.contrib import admin
from .models import login,UserRegister,Bookingslot

# Register your models here.
admin.site.register(login)
admin.site.register(UserRegister)
admin.site.register(Bookingslot)