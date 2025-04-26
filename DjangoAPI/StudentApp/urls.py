from django.urls import path
from StudentApp import views


urlpatterns = [
    
    path('', views.studentApi), 
    path('student/', views.studentApi), 
    path('student/<int:id>', views.studentApi), # for delete 
]
