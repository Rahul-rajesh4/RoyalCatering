from django.urls import path
from . import views


urlpatterns = [
    path('Registerapi',views.Registerapi.as_view(),name='Registerapi'),
    path('loginAPI',views.loginAPI.as_view(),name='loginAPI'),
    path('Bookingapi',views.Bookingapi.as_view(),name='Bookingapi'),

    
]