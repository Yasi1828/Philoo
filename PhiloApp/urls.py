from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Example view

    path('philosopher/<int:philosopher_id>/', views.philosopher_detail, name='philosopher_detail'),
    
    path('school/<int:school_id>/', views.school_detail, name='school_detail'),
    
    path('school/', views.school_list, name='school_list'),
    
    path('philosopher/', views.philosopher_list, name='philosopher_list'),
]
