from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from StudentApp.models import Students
from StudentApp.serializers import StudentSerializer
from rest_framework import filters

import json


@csrf_exempt 


def studentApi(request,id=0): 
    if request.method == 'GET':

        ###########################
        students = Students.objects.all() # Students modelinden tüm kayıtları alır.
        students_serializer = StudentSerializer(students,many=True) # model verilerini json formatına dönüştürür. many=True -> birden fazla nesne serileştirileceği için
        return JsonResponse(students_serializer.data, safe=False) # students_serializer.data -> serileştirilmiş veri. ,



    elif request.method == 'POST': 
        # student_data = JSONParser().parse(request) # json formatında gelen veriyi python python veri yapısına dönüştürür. request : http isteğidir. içinde json verileri vardır.
        # student_serializer = StudentSerializer(data=student_data)
        # if student_serializer.is_valid(): # veriler geçerli mi
        #     student_serializer.save() # veri tabanına kaydeder
        #     return JsonResponse("Added Successfully !", safe=False) 
        # return JsonResponse("Failed to Add !" , safe=False)
           
        try:
            # Gelen veriyi JSON formatında al
            student_data = JSONParser().parse(request)
            print("Received data:", student_data)  # Gelen veriyi kontrol etmek için

            # Serializer ile veriyi doğrula
            student_serializer = StudentSerializer(data=student_data)
            
            # Veriler geçerli mi kontrol et
            if student_serializer.is_valid():
                student_serializer.save()
                return JsonResponse("Added Successfully!", safe=False)
            else:
                # Hata varsa, detaylı hata mesajlarını döndür
                print("Validation errors:", student_serializer.errors)
                return JsonResponse(student_serializer.errors, status=400)
                
        except Exception as e:
            # Hataları daha iyi izlemek için ek bilgi ver
            print("Exception occurred:", str(e))
            return JsonResponse({'error': str(e)}, status=400)
    #return JsonResponse({'error': 'Invalid request'}, status=400)

        
    
    elif request.method == 'PUT':
        student_data = JSONParser().parse(request)
        student = Students.objects.get(StudentId=student_data['StudentId']) #student_data içindeki id değerini kullanarak veritabanından belirli bir öğrenci nesnesi alır.
        student_serializer = StudentSerializer(student, data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Update Successfully!", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':

        try:
            student = Students.objects.get(pk=id)  # ID'yi kullanarak öğrenci bul
            student.delete()
            return JsonResponse({'message': 'Student deleted successfully'}, status=204)
        except Students.DoesNotExist:
            return JsonResponse({'error': 'Student not found'}, status=404)








