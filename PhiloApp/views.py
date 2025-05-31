from django.shortcuts import render,get_object_or_404
from .models import Philosophers, Schools, Hashtag
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

# Create your views here.
def index(request):
    Philosophers_content = Philosophers.objects.all().order_by('-id')[:8]
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
    hashtags = Hashtag.objects.all().order_by('name')
    selected_hashtag = request.GET.get('hashtag')
    if selected_hashtag:
        philosophers = Philosophers.objects.filter(hashtags__name = selected_hashtag)
    else:
        philosophers = Philosophers.objects.all()
        
    paginator = Paginator(philosophers, 25)  # Show 25 philosophers per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {
        'page_obj': page_obj,
        'hashtags': hashtags,
        'selected_hashtag': selected_hashtag,
    }
    return render(request, 'philosopher_list.html', context=context)




@require_POST
def set_theme(request):
    theme = request.POST.get('theme', 'light')
    response = JsonResponse({'status': 'success'})
    response.set_cookie('theme', theme, max_age=365*24*60*60)
    return response