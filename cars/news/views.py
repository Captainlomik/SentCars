from django.http.response import HttpResponseRedirect
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
    #      cover = request.data['cover'],
    #     title = request.data['title'],
    #     content = request.data['content']
    #     news_date = request.data['news_date']
    #     publish = request.data['publish']

    #     News.objects.create(
    #     title = title, 
    #     # cover=cover,
    #     content = content,
    #     news_date =news_date, 
    #     publish = publish)
    #     return HttpResponse({'message':'create'}, status = 200)

    # def create( request):
    #     if request.method == "POST":
    #         new = News()
    #         new.title = request.POST.get("title")
    #         new.content = request.POST.get("content")
    #         new.cover = request.POST.get("cover")
    #         new.save()
    #     return HttpResponseRedirect('/')