import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../../shared.service';
import { FormsModule } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentService } from '../../department.service';
import { UniversityService } from '../../university.service';
import { StuClassService } from '../../stu-class.service';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent implements OnInit {
  universities: string[] = [];

  departments: string[] = [];

  classes: string[] = [];

  @Input() stu: any = {}; // Modalda gösterilecek öğrenci bilgisi
  @Output() updateCompleted = new EventEmitter<void>(); 

    constructor(private service: SharedService,private snackBar: MatSnackBar, private universityService: UniversityService, private departmentService: DepartmentService,
      private stuClass: StuClassService ) {}

  ngOnInit(): void {
    this.universities = this.universityService.getUniversities();
    this.departments = this.departmentService.getDepartments();
    this.classes = this.stuClass.getclasses();
    console.log(this.departments); // Veriyi kontrol etmek için
  }

  updateStudent(): void {
    this.service.updateStudent(this.stu).subscribe(res => {
     this.snackBar.open('Öğrenci bilgileri güncellendi !!', 'Tamam', {
      duration: 4000, 
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: ['error'] 
    });
    this.updateCompleted.emit();
   
    }, error => {
      console.error('Güncelleme sırasında hata oluştu', error);
    });

  }

 


}
