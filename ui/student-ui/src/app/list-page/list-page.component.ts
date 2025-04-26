import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,FilterPipe, FormsModule, FontAwesomeModule,MatTooltipModule ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {


  StudentList: any[] = [];
  p: number =1;
  itemsPerPage: number = 8;
  totalStudent: any;
  searchTerm: string = ''; 

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshStuList();
    
  }

  refreshStuList(): void {
    this.service.getStudent().subscribe(
      data => {
        this.StudentList = data;
        this.totalStudent = data.length;
      },
      error => {
        console.error('Veriler yüklenirken hata oluştu', error);
      }
    );
  }

 

 
}