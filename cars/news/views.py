from django.shortcuts import render
from rest_framework import viewsets
from django.http import HttpResponse

from .serializers import NewsSerializer
from .models import News

# Create your views here.

class NewsViewSet(viewsets.ModelViewSet):
    queryset=News.objects.all().order_by('title')
    serializer_class=NewsSerializer

    # def news(self, request):
    #     cover = request.data['cover'],
    #     title = request.data['title'],
    #     content = request.data['content']
    #     News.objects.create(title = title, cover=cover, content = content)
    #     return HttpResponse({'message':'create'}, status = 200)