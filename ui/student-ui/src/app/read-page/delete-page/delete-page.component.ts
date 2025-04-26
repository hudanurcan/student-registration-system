
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css']
})
export class DeletePageComponent implements OnInit {

 // private router:Router;



  @Input() studentToDelete: any; // Sadece seçilen öğrenci bilgisi
  @Output() closeModal = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>(); // Silme işlemi başarıyla tamamlandığında tetiklenir

  constructor(private service: SharedService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {  


  }

  deleteStudent(): void {
    if (!this.studentToDelete || !this.studentToDelete.StudentId) {
      console.error('Silinecek öğrenci bilgisi geçersiz.');
      return;
    }

    this.service.deleteStudent(this.studentToDelete.StudentId).subscribe({
      next: () => {
        this.snackBar.open('Öğrenci başarıyla silindi!', 'Tamam', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });
        this.onDelete.emit(); // Silme işlemi tamamlandığında bu olayı tetikler
        this.closeModal.emit(); // Modalı kapat
        //this.router.navigate(['update-page']);
      },
      error: error => {
        console.error('Silme sırasında hata oluştu:', error);
        this.snackBar.open('Silme sırasında hata oluştu!', 'Tamam', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  cancel(): void {
    this.closeModal.emit(); 
  }
}
