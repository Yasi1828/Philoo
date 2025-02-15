from django.shortcuts import render
from .models import Philosophers, Schools

# Create your views here.
def Philo_View(request):
    Philosophers_content = Philosophers.objects.all()
    Schools_content = Schools.objects.all()
    
    context = {'Philosophers' : Philosophers_content,
               'Schools': Schools_content
               }
    return render(request, 'index.html', context=context)
