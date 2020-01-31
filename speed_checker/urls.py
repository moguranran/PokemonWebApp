from django.urls import path
from . import views


app_name = 'speed_checker'
urlpatterns= [
    path('', views.IndexView.as_view(), name='pokedex')
]