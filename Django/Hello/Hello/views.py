from django.http import HttpResponse
from django.views.generic import TemplateView

def helloworldfunction(request):
    returnobject = HttpResponse('hello world')
    return returnobject

class HelloWorldView(TemplateView):
    template_name = 'hello.html'