import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getTextLength(input: string): Observable<number> {
    return of(input.length);
  }
}
