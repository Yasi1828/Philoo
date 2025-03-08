from django.contrib import admin
from .models import Schools, Philosophers, Hashtag
# Register your models here.
admin.site.register(Philosophers)
class PhilosopherAdmin(admin.ModelAdmin):
    list_display = ('FullName', 'picture')  
    # search_fields = ('field1',)
    # list_filter = ('status',)
    # ordering = ('-created_at',)
    filter_horizontal = ('hashtags')
    
admin.site.register(Schools)

admin.site.register(Hashtag)
class HashtagAdmin(admin.ModelAdmin):
    list_display = ('name',)  
    # search_fields = ('field1',)
    # list_filter = ('status',)
    # ordering = ('-created_at',)