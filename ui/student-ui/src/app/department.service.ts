import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments = [
    'Bilgisayar Mühendisliği',
    'Biyoloji',
    'Çevre Mühendisliği',
    'Çocuk Gelişimi',
    'Diş Hekimliği',
    'Denizcilik',
    'Eczacılık',
    'Elektrik-Elektronik Mühendisliği',
    'Endüstri Mühendisliği',
    'Enerji Sistemleri Mühendisliği',
    'Eğitim Bilimleri',
    'Felsefe',
    'Fen Bilgisi Öğretmenliği',
    'Fizik',
    'Gastronomi',
    'Gemi Mühendisliği',
    'Gıda Mühendisliği',
    'Görsel Sanatlar',
    'Gömülü Sistemler',
    'Halk Sağlığı',
    'Halkla İlişkiler',
    'Hemşirelik',
    'Hukuk',
    'İç Mimarlık',
    'İktisat',
    'İngilizce Öğretmenliği',
    'İletişim',
    'İnşaat Mühendisliği',
    'İşletme',
    'Jeoloji Mühendisliği',
    'Kimya',
    'Kimya Mühendisliği',
    'Kamu Sağlığı',
    'Kamu Yönetimi',
    'Kütüphanecilik',
    'Lojistik',
    'Maden Mühendisliği',
    'Matematik',
    'Matematik Öğretmenliği',
    'Medya ve İletişim',
    'Mimarlık',
    'Mimari Restorasyon',
    'Moda Tasarımı',
    'Müzik',
    'Otomotiv Mühendisliği',
    'Psikoloji',
    'Sahne ve Görüntü Sistemleri Teknolojisi',
    'Sahne Sanatları',
    'Sanat',
    'Sınıf Öğretmenliği',
    'Sosyal Bilgiler Öğretmenliği',
    'Sosyal Hizmetler',
    'Sosyoloji',
    'Tasarım',
    'Tasarım ve İletişim Teknolojileri',
    'Tıp',
    'Turizm',
    'Turizm İşletmeciliği',
    'Uluslararası İlişkiler',
    'Uluslararası Ticaret',
    'Veterinerlik',
    'Yazılım Mühendisliği',
    'Ziraat Mühendisliği'
    // ... 
  ];

  constructor() { }

  getDepartments() {
    return this.departments;
  }
}
