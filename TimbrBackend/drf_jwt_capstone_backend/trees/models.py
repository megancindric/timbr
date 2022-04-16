from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.

class Tree(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    scientific_name = models.CharField(max_length=50)
    common_name = models.CharField(max_length=30)
    classification = models.CharField(max_length=15)
    leaf_shape = models.CharField(max_length=15)