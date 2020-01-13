from django.urls import path
from . import views
import datetime

random_seed = datetime.datetime.now().second
print(random_seed)

app_name = 'speed_checker'
urlpatterns= [
    path('', views.IndexView.as_view(), name='pokedex')
]