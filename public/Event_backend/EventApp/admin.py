from django.contrib import admin
from .models import login,UserRegister,Bookingslot,AddEvent

# Register your models here.
admin.site.register(login)
admin.site.register(UserRegister)
admin.site.register(Bookingslot)
admin.site.register(AddEvent)