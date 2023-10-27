from django.db import models


class login(models.Model):
    email=models.CharField(max_length=50)
    password=models.CharField(max_length=50)
    role=models.CharField(max_length=50)


class UserRegister(models.Model):
    name=models.CharField(max_length=50)
    contact=models.CharField(max_length=50)
    log_id=models.ForeignKey(login,on_delete=models.CASCADE)

class Bookingslot(models.Model):
    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    contact=models.CharField(max_length=50)
    date=models.CharField(max_length=50)
    time=models.CharField(max_length=50)
    noofperson=models.CharField(max_length=50)
    typeofevent=models.CharField(max_length=50)


