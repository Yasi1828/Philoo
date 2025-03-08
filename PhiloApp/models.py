from django.db import models

# Create your models here.

class Hashtag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    
    def __str__(self):
        return self.name
class Philosophers(models.Model):
    FullName = models.CharField(max_length = 100)
    BirthDate = models.TextField()
    Bio = models.TextField()
    # KeyIdeas = models.TextField()
    hashtags= models.ManyToManyField(Hashtag,blank=True)
    picture = models.ImageField(upload_to='philosopher_images',null=True,blank=True)
    
    def __str__(self):
        return self.FullName
class Schools(models.Model):
    Name = models.CharField(max_length = 100)
    Concept = models.TextField()

    