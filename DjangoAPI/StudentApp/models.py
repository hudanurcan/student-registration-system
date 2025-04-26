from django.db import models
from django.forms import ValidationError


class Students(models.Model):
    StudentId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    number = models.IntegerField()
    tc = models.CharField(max_length=11)
    mail = models.EmailField(max_length=100)
    phone = models.CharField(max_length=11)
    birthDate = models.DateField()
    address = models.CharField(max_length=250)
    school = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    stu_class = models.CharField(max_length=10)
    graduate_year = models.IntegerField()
    

    def clean(self):
        super().clean()
        if len(self.tc) != 11:
            raise ValidationError({'tc': 'TC Kimlik numarası 11 haneli olmalıdır.'})
        if len(self.phone) != 11:
            raise ValidationError({'phone': 'Telefon numarası 11 haneli olmalıdır.'})
            

    def save(self, *args, **kwargs):
        self.full_clean()  
        super().save(*args, **kwargs)


    def __str__(self):
        return f"{self.name} {self.surname}"


