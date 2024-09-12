from django.db import models

# Create your models here.

class ChartData(models.Model):
    label = models.CharField(max_length=255)
    data = models.IntegerField()
