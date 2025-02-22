from django.contrib import admin
from .models import Schools, Philosophers
# Register your models here.
class PhilosopherAdmin(admin.ModelAdmin):
    list_display = ('FullName', 'School', 'picture')  
    # search_fields = ('field1',)
    # list_filter = ('status',)
    # ordering = ('-created_at',)
    
admin.site.register(Schools)
admin.site.register(Philosophers,PhilosopherAdmin)