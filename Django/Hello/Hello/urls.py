from django.contrib import admin
from django.urls import path, include
from .views import helloworldfunction, HelloWorldView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', include('helloworld.urls'))
]
