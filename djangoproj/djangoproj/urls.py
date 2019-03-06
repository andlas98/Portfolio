from django.urls import path
from django.contrib import admin
'''. 
= this folder
'''
from djangoproj import views

urlpatterns = [
    #Home screen url
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
]