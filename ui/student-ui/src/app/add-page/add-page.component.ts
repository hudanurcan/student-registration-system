import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { UniversityService } from '../university.service'; 
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../department.service';
import { StuClassService } from '../stu-class.service';






@Component({
  selector: 'app-add-page',
  standalone: true,
  imports: [FormsModule, SidebarComponent, CommonModule
  ],
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.css'
})
export class AddPageComponent implements OnInit {

  student = {
    name: '',
    surname: '',
    number: '',
    tc: '',
    mail: '',
    phone: '',
    birthDate: '',
    address: '',
    school: '',
    department: '',
    stu_class: '',
    graduate_year: ''

  };

  universities: string[] = [];

  departments: string[] = [];

  classes: string[] = [];


  constructor(private service: SharedService, private router: Router, private snackBar: MatSnackBar, 
              private universityService: UniversityService, private departmentService: DepartmentService,
              private stuClass: StuClassService) { }

  maxDate = "2007-01-01";

  preventKeyboardInput(event: KeyboardEvent): void {
    event.preventDefault(); // Klavye girişini engeller
  }

  addStudent() {
    this.service.addStudent(this.student).subscribe(response => {//API'den yanıt geldiğinde yapılacak işlemleri tanımlar. subscribe metodunun içinde, API'den dönen yanıt response parametresi olarak alınır.
     
      this.snackBar.open('Öğrenci başarıyla eklendi!', 'Tamam', {
      duration: 4000, // 4 saniye boyunca görünecek
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar'] 
    });
    console.log('Student added successfully', response);

    }, error => {
      // Hata mesajı
      alert('Öğrenci ekleme yapılamadı');
      console.error('Error adding student', error);
    });
  }

  onTcNoInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement; /*event.target -> olayın tetiklendiği HTML elementidir. burada input tetiklendiğini belirtir.*/
    const value = inputElement.value; /* kullanıcı tarafından girilen tüm karakterleri içerir.*/

    if (value.length > 11) {
      inputElement.value = value.slice(0, 11); /* 11 karakterden sonraki fazlalıkları siler. 
                                                  ilk 11 karakter. inputElement.value a atanır.*/
      this.student.tc = inputElement.value; // Model güncellenir
    }
  }

  onPhoneInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
  
    // Telefon numarası için 11 haneli sınır
    if (value.length > 11) {
      inputElement.value = value.slice(0, 11);
      this.student.phone = inputElement.value; // Model güncellenir
    }
  }

  ngOnInit(): void {
    this.universities = this.universityService.getUniversities();
    this.departments = this.departmentService.getDepartments();
    this.classes = this.stuClass.getclasses();
}



}
