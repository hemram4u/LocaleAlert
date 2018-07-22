import {Injectable} from  '@angular/core'

@Injectable()
export class CurrencyTableService{
    getCurrencyCode(localeString: string): string{

        return CURRENCYTABLE[localeString] || 'USD';
    }

}

const CURRENCYTABLE =
  {
    'en-US': 'USD',
    'en-CA': 'CAD',
    'fr-FR': 'EUR',
    'fr-CA': 'CAD',
    'de': 'EUR'
  };
