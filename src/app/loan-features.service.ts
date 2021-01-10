import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanFeaturesService {
  loanFeatures$ : Observable<any>;
  constructor(private db:AngularFireDatabase) { 
    this.loanFeatures$ = this.db.list('/feature-icons').valueChanges()
  }
}
