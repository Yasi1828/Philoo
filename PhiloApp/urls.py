from django.urls import path
from . import views
from .views import set_theme


urlpatterns = [
    path('', views.index, name='index'),  # Example view

    path('philosopher/<int:philosopher_id>/', views.philosopher_detail, name='philosopher_detail'),
    
    path('philosopher/', views.philosopher_list, name='philosopher_list'),
    path('set-theme/', set_theme, name='set_theme'),
]
