import { Component } from '@angular/core';
import { CurrencyTableService } from '../Shared/app.currencytable.service';
import { SettingsService} from '../Shared/app.settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Locale Testing'; 
  date1:number = Date.now();
  currency1: number = 5.98;
  number1: number = 1245.65;
  currencyCode: string ;
  localeValue: string;
  
  languageList = [
    'English','French','German'
  ];
  constructor(private _currencyService: CurrencyTableService,private _settingService: SettingsService){  
    
  };
 
  ngOnInit(){
   // this._settingService.setLanguage(navigator.language);
    //console.log(navigator.language);
    this.localeValue = this._settingService.getLanguage();
    console.log("after getLangauge " + this.localeValue);
    this.currencyCode = this._currencyService.getCurrencyCode(this.localeValue);
  }
  
  public listClick(event: any, newLang) {
        alert(" Current Language: " + this.languageList[0] + "\n Selected Language: " + newLang);
  }

}