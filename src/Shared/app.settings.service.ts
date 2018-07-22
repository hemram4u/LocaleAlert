import { Injectable } from "@angular/core";

@Injectable()
export class SettingsService{
    currentLanguage: string;

    constructor(){
       // this.currentLanguage='en-US'
       this.currentLanguage=navigator.language;
    }

    setLanguage(lang: string){
        this.currentLanguage=lang;
    }

    getLanguage(): string{
        return this.currentLanguage;
    }

}