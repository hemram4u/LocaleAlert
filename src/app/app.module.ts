import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { LocalizedDateTimePipe } from './localized-date-time.pipe';
import { CurrencyTableService } from '../Shared/app.currencytable.service';
import { SettingsService } from '../Shared/app.settings.service';

@NgModule({
  declarations: [
    AppComponent,
    LocalizedDateTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID, 
    deps: [SettingsService],
    useFactory: getLanguage},
  SettingsService,
    CurrencyTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
//de-at
//de
//en-US

export function getLanguage(settingsService: SettingsService){
 return settingsService.getLanguage();
}
