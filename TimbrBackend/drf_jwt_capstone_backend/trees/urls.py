from django.urls import path
from trees import views

urlpatterns = [

    path('all/', views.get_all_trees),
    path('', views.user_tree),
]