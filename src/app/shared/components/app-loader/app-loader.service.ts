import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLoaderService {

  pageLoadingEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  get getPageLoading() {
    return this.pageLoadingEvent;
  }
}
