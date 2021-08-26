from django.urls import path
from .views import hellofunction

urlpatterns = [
    path('world/', hellofunction),
]
