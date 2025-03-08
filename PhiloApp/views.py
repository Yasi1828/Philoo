from django.shortcuts import render,get_object_or_404
from .models import Philosophers, Schools
from django.core.paginator import Paginator

# Create your views here.
def index(request):
    Philosophers_content = Philosophers.objects.all()
    Schools_content = Schools.objects.all()
    
    context = {'Philosophers' : Philosophers_content,
               'Schools': Schools_content
               }
    return render(request, 'index.html', context=context)

def philosopher_detail(request, philosopher_id):
    philosopher = get_object_or_404(Philosophers, id=philosopher_id)
    return render(request, 'philosopher_detail.html', {'philosopher': philosopher})

def school_detail(request, school_id):
    school = get_object_or_404(Schools, id=school_id)
    return render(request, 'school_detail.html', {'school': school})

def school_list(request):
    schools = Schools.objects.all()
    context = {'Schools' : schools}
    return render(request, 'school_list.html', context=context)

def philosopher_list(request):
    philosophers = Philosophers.objects.all()
    paginator = Paginator(philosophers, 25)  # Show 25 philosophers per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    # context = {'Philosophers' : philosophers}
    # return render(request, 'philosopher_list.html', context=context)
    return render(request, 'philosopher_list.html', {'page_obj': page_obj})



