


import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { UpdatePageComponent } from "../read-page/update-page/update-page.component";
import { DeletePageComponent } from './delete-page/delete-page.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from '../filter.pipe'; 


@Component({
  selector: 'app-read-page',
  standalone: true,
  imports: [CommonModule, UpdatePageComponent, FormsModule,DeletePageComponent, FontAwesomeModule, FilterPipe],
  templateUrl: './read-page.component.html',
  styleUrl: './read-page.component.css'
})
export class ReadPageComponent implements OnInit {


  searchTerm: string = ''; 


   constructor(private service : SharedService ) {}

  ActivateStuUpdateComp: boolean = false;
  ActivateStuDeleteComp: boolean = false; // Silme onay modalını kontrol etmek 
  StudentList: any[] = [];
  selectedStudent: any = {}; // Seçilen öğrencinin bilgilerini tutacak

  ngOnInit(): void {
    this.refreshStuList();
  }

 
  refreshStuList(): void {
    this.service.getStudent().subscribe(
      data => {
        this.StudentList = data;
    
      },
      error => {
        console.error('Veriler yüklenirken hata oluştu', error);
      }
    );
  }

  openUpdateModal(student: any): void {
    this.selectedStudent = { ...student }; // Öğrenci kopyalama 
    this.ActivateStuUpdateComp = true; // Modalı aktif yap

   
  }

  closeModal(): void {
    this.ActivateStuUpdateComp = false; // Modalı kapat
  }
  openDeleteModal(student: any): void {
    this.selectedStudent = student;
    this.ActivateStuDeleteComp = true;
  }

  closeDeleteModal(): void {
    this.ActivateStuDeleteComp = false;
  }



}

  