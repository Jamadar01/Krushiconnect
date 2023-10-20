from django.shortcuts import render
from rest_framework.views import APIView
from .models import products,sell,carts,farmer_user
from rest_framework.response import Response
from .serializer import productserializer,sellserializer,farmerserializer,customers_user,cart,recommendation # Corrected import
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.http import JsonResponse, HttpResponseBadRequest
import speech_recognition as sr
class ProductView(APIView):

    serializer_class = productserializer

    def get(self, request):
        products_data = products.objects.all()
        serialized_data = productserializer(products_data, many=True).data
        return Response(serialized_data)

    def post(self, request):
        serializer = productserializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class sellview(APIView):
    serializer_class = sellserializer

    def get(self, request):
        sell_data = sell.objects.all()
        serialized_data = sellserializer(sell_data, many=True).data
        return Response(serialized_data)

    def post(self, request):
        serializer = sellserializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class cartview(APIView):
    serializer_class = cart

    def get(self, request):
        cart_data = carts.objects.all()
        serialized_data = cart(cart_data, many=True).data
        return Response(serialized_data)

    def post(self, request):
        serializer = sellserializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class farmerview(APIView):
    serializer_class = farmerserializer

    def get(self, request):
        farmer_data = farmer_user.objects.all()
        serialized_data = farmerserializer(farmer_data, many=True).data
        return Response(serialized_data)

    def post(self, request):
        serializer = farmerserializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


 
@csrf_exempt  # Use this decorator for development purposes; apply proper security measures for production.
def speech_recognition_view(request):
    if request.method == 'POST':
        audio = request.FILES['audio']  # Assuming the audio file is sent as a POST file.
        r = sr.Recognizer()

        try:
            with sr.AudioFile(audio) as source:
                r.adjust_for_ambient_noise(source)
                audio_data = r.record(source)
                text = r.recognize_google(audio_data)
                return JsonResponse({'text': text})
        except sr.UnknownValueError:
            return JsonResponse({'error': 'Sorry, I could not understand what you said.'}, status=400)
        except sr.RequestError:
            return JsonResponse({'error': 'Sorry, the speech recognition service is limited.'}, status=500)
    else:
        return JsonResponse({'error': 'Unsupported HTTP method'}, status=405)