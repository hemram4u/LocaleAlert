import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'localizedDateTime',
  pure: false
})
export class LocalizedDateTimePipe implements PipeTransform {

  constructor(private translateService: TranslateService){

  }
  transform(value: any, pattern: string ='mediumDate'): any {
    const datepipe: DatePipe = new DatePipe(this.translateService.currentLang);
    return datepipe.transform(value,pattern);
  }

}
