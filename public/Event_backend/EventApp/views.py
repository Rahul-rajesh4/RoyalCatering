from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import login,UserRegister
from .serializers import loginSerializer,registerSerializer

class Registerapi(GenericAPIView):
    serializer_class=loginSerializer
    serializer_class_reg=registerSerializer
    def post(self,request):
        name=request.data.get('name')
        contact=request.data.get('contact')
        email=request.data.get('email')
        password=request.data.get('password')
        role='user'
        log_id=''
        if(login.objects.filter(email=email)):
            return Response({'message':'duplicate username found'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class(data={'email':email,'password':password,'role':role})
        if serializer_login.is_valid():
            log=serializer_login.save()
            log_id=log.id
        serializer_reg=self.serializer_class_reg(data={'name':name,'contact':contact,'log_id':log_id})
        if serializer_reg.is_valid():
             serializer_reg.save()
             return Response({'data':serializer_reg.data,'message':'Registered success','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_reg.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
        

class loginAPI(GenericAPIView):
    serializer_class=loginSerializer
    def post(self,request):
        email=request.data.get('email')
        password=request.data.get('password')
        logreg=login.objects.filter(email=email,password=password)
        if (logreg.count()>0):
            serializer=loginSerializer(logreg,many=True)
            for i in serializer.data:
                l_id=i['id']
                role=i['role']
            regdata=UserRegister.objects.all().filter(log_id=l_id).values()
            for i in regdata:
                user_id=i['id']
            return Response({'data':{'email':email,'log_id':l_id,'role':role,'user_id':user_id},'message':'success','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':'invalid credentials','success':False},status=status.HTTP_400_BAD_REQUEST)
    
class Bookingapi(GenericAPIView):
    def post(self,request):
        Name=request.data.get('name')
        email=request.data.get('email')
        contact=request.data.get('contact')
        date=request.data.get('date')
        time=request.data.get('time')
        TypeofEvent=request.data.get('TypeofEvent')
        NoofPerson=request.data.get('namNoofPersone')


        








        




