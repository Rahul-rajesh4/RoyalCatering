from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import login,UserRegister,Bookingslot,AddEvent
from .serializers import loginSerializer,registerSerializer,bookingSerializer,EventSerializer
from .mail import sendmail

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
    serializer_class=bookingSerializer
    def post(self,request):
        progress='0'
        name=request.data.get('name')
        email=request.data.get('email')
        contact=request.data.get('contact')
        date=request.data.get('date')
        time=request.data.get('time')
        noofperson=request.data.get('noofperson')
        typeofevent=request.data.get('typeofevent')
         
        serializers_booking = self.serializer_class(data={'name':name,'email':email,'contact':contact,'email':email,'date':date,'time':time,'typeofevent':typeofevent,'noofperson':noofperson,'status':progress})
        print(serializers_booking)
        if(serializers_booking.is_valid()):
            serializers_booking.save()
            return Response({'data':serializers_booking.data,'message':'Added successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializers_booking.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)


class viewBooking(GenericAPIView):
    serializer_class = bookingSerializer
    def get(self,request):
        queryset = Bookingslot.objects.all()
        if(queryset.count()>0):
            serializer = bookingSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'successfull','Success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'non data avilable','Success':False},status=status.HTTP_400_BAD_REQUEST)





class getsinglecontactView(GenericAPIView):
    serializer_class=bookingSerializer
    def get(self,request,id):   
        queryset=Bookingslot.objects.filter(pk=id).values()
        if(queryset.count()>0):
            serializer=bookingSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'get  show data','success':True},status=status.HTTP_200_OK)
        return Response({'data':[],'message':'no data ','success':False},status=status.HTTP_400_BAD_REQUEST)
    


class replyMessage(GenericAPIView):
    def post(self,request):
        id=request.data.get("id")
        Reply=request.data.get('Reply')
        to_email=request.data.get('email')
        print(Reply,to_email)
        sendmail(to_email,Reply)
        # print("dfhfdshfkjhdsfmhdskjfdskjhgfvkdshgfhjdsfkhdskjfvadskj")
        progress='1'
        content = Bookingslot.objects.get(id=id)
        content.reply = Reply
        content.status = progress
        content.save()
        # serializer = bookingSerializer(content)
        # if serializer.is_valid():
        try:
            return Response({'message':'Replay Added successfully','success':True },status=status.HTTP_201_CREATED)
        except:
            return Response({'message':'Replay failed','success':False},status=status.HTTP_400_BAD_REQUEST)

   



class Addeventapi(GenericAPIView):
    serializer_class = EventSerializer
    def post(self,request):
        events=request.data.get('events')
        serializers_booking = self.serializer_class(data={'events': events})
        print(serializers_booking)
        if(serializers_booking.is_valid()):
            serializers_booking.save()
            return Response({'data':serializers_booking.data,'message':'Added successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializers_booking.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)


class viewEvent(GenericAPIView):
    serializer_class = EventSerializer
    def get(self,request):
        queryset = AddEvent.objects.all()
        if(queryset.count()>0):
            serializer = EventSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'successfull','Success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'non data avilable','Success':False},status=status.HTTP_400_BAD_REQUEST)     




