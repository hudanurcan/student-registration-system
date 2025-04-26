import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private universities = [
    'Abant İzzet Baysal Üniversitesi',
    'Adana Bilim ve Teknoloji Üniversitesi',
    'Adıyaman Üniversitesi',
    'Afyon Kocatepe Üniversitesi',
    'Ağrı İbrahim Çeçen Üniversitesi',
    'Aksaray Üniversitesi',
    'Amasya Üniversitesi',
    'Anadolu Üniversitesi',
    'Ankara Üniversitesi',
    'Atılım Üniversitesi',
    'Atatürk Üniversitesi',
    'Balıkesir Üniversitesi',
    'Bartın Üniversitesi',
    'Başkent Üniversitesi',
    'Bingöl Üniversitesi',
    'Boğaziçi Üniversitesi',
    'Bolu Abant İzzet Baysal Üniversitesi',
    'Bursa Teknik Üniversitesi',
    'Çankaya Üniversitesi',
    'Çukurova Üniversitesi',
    'Dicle Üniversitesi',
    'Dokuz Eylül Üniversitesi',
    'Doğu Akdeniz Üniversitesi',
    'Ege Üniversitesi',
    'Erciyes Üniversitesi',
    'Erzincan Üniversitesi',
    'Erzurum Atatürk Üniversitesi',
    'Gazi Üniversitesi',
    'Gebze Teknik Üniversitesi',
    'Giresun Üniversitesi',
    'Hacettepe Üniversitesi',
    'Harran Üniversitesi',
    'İstanbul Bilgi Üniversitesi',
    'İstanbul Teknik Üniversitesi',
    'İstanbul Üniversitesi',
    'İstanbul Medipol Üniversitesi',
    'İstanbul Şehir Üniversitesi',
    'İzmir Katip Çelebi Üniversitesi',
    'İzmir Yüksek Teknoloji Enstitüsü',
    'Karadeniz Teknik Üniversitesi',
    'Karamanoğlu Mehmetbey Üniversitesi',
    'Kırıkkale Üniversitesi',
    'Kocaeli Üniversitesi',
    'Konya Teknik Üniversitesi',
    'Koç Üniversitesi',
    'Malatya İnönü Üniversitesi',
    'Mardin Artuklu Üniversitesi',
    'Marmara Üniversitesi',
    'Mersin Üniversitesi',
    'Muğla Sıtkı Koçman Üniversitesi',
    'Nevşehir Hacı Bektaş Veli Üniversitesi',
    'Niğde Ömer Halisdemir Üniversitesi',
    'Ondokuz Mayıs Üniversitesi',
    'Orta Doğu Teknik Üniversitesi',
    'Sakarya Üniversitesi',
    'Selçuk Üniversitesi',
    'Süleyman Demirel Üniversitesi',
    'Tarsus Üniversitesi',
    'Trakya Üniversitesi',
    'Türk-Alman Üniversitesi',
    'Uludağ Üniversitesi',
    'Uşak Üniversitesi',
    'Yeditepe Üniversitesi',
    'Yıldız Teknik Üniversitesi',
    'Yüzüncü Yıl Üniversitesi'
  ];
  constructor() { }

  getUniversities() {
    return this.universities;
  }
}
