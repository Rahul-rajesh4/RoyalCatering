from django.urls import path
from . import views


urlpatterns = [
    path('Registerapi',views.Registerapi.as_view(),name='Registerapi'),
    path('loginAPI',views.loginAPI.as_view(),name='loginAPI'),
    path('Bookingapi',views.Bookingapi.as_view(),name='Bookingapi'),
    path('viewBooking',views.viewBooking.as_view(),name='viewBooking'),
    path('Addeventapi',views.Addeventapi.as_view(),name='Addeventapi'),
    path('viewEvent',views.viewEvent.as_view(),name='viewEvent'),
    path('getsinglecontactView/<int:id>',views.getsinglecontactView.as_view(),name='getsinglecontactView'),
    path("replyMessage",views.replyMessage.as_view(),name='replyMessage'),

    
]