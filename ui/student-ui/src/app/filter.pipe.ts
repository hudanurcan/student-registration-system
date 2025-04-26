import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = this.normalizeString(searchTerm.toLowerCase()); // searchTerm'i küçük harfe dönüştürür ve ardından Türkçe karakterleri normalize eder

    return items.filter(item => {
      const name = item.name ? this.normalizeString(item.name.toLowerCase()) : ''; // Eğer item.name mevcutsa, onu küçük harfe dönüştürür ve normalize eder. Eğer mevcut değilse, boş bir string kullanır.
      const surname = item.surname ? this.normalizeString(item.surname.toLowerCase()) : ''; //Eğer item.surname mevcutsa, onu küçük harfe dönüştürür ve normalize eder. Eğer mevcut değilse, boş bir string kullanır.

      return name.startsWith(searchTerm) || surname.startsWith(searchTerm);
    });
  }

  private normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Türkçe karakterleri normalize eder
  }
}

