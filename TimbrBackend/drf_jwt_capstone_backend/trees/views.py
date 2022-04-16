from django.shortcuts import render
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Tree
from .serializers import TreeSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_trees(request):
    trees = Tree.objects.all()
    serializer = TreeSerializer(trees, many=True)
    return Response(serializer.data)

@api_view(['POST', "GET"])
@permission_classes([IsAuthenticated])
def user_tree(request):
    if request.method == 'POST':
        serializer = TreeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        trees = Tree.objects.filter(user_id = request.user.id)
        serializer = TreeSerializer(trees, many=True)
        return Response(serializer.data)
            