from rest_framework import serializers
from .models import Tree

class TreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = ['id', 'scientific_name', 'common_name', 'classification', 'leaf_shape', 'user_id']