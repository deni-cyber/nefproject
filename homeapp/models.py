from datetime import date

from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    project_image = models.ImageField(upload_to='project_images/', default='default_image.jpg')
    is_ongoing = models.BooleanField(default=True)
    def __str__(self):
        return self.name

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    service_image = models.ImageField(upload_to='service_images/', default='default_image.jpg')
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    product_image = models.ImageField(upload_to='products_images/', default='default_image.jpg')
    def __str__(self):
        return self.name
    
class Worker(models.Model):
    name = models.CharField(max_length=100)
    position= models.CharField(max_length=100)
    description = models.TextField()
    worker_image = models.ImageField(upload_to='products_images/', default='default_image.jpg')
    def __str__(self):
        return self.name
    