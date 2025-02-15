from django.db import models

# Create your models here.
class Philosophers(models.Model):
    FullName = models.CharField(max_length = 100)
    BirthDate = models.TextField()
    Bio = models.TextField()
    KeyIdeas = models.TextField()
class Schools(models.Model):
    Name = models.CharField(max_length = 100)
    Concept = models.TextField()

    