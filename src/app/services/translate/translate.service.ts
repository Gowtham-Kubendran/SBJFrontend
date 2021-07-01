import { Injectable } from '@angular/core';
import { VOCAB_TA } from 'src/app/vocabulary/vocabulary-ta';
import { VOCAB_EN } from 'src/app/vocabulary/vocabulary-en';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TranslateService {

  static comp1Val = 'EN';
  // _comp1ValueBS = new BehaviorSubject<string>('');

  updateComp1Val(val) {
    window.sessionStorage.setItem('lang', val);
  }

  translate(key) {
    if (window.sessionStorage.getItem('lang') === 'LA-EN') {
      return VOCAB_EN[key];
    } else if (window.sessionStorage.getItem('lang') === 'LA-TA') {
      return VOCAB_TA[key];
    } else {
      window.sessionStorage.setItem('lang', 'LA-EN');
      this.translate(key);
    }
  }
}
