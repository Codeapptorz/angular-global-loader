/**
 * First Child Component
 * 
 * To Demonstrate Show/Hide Global Loader Implementation 
 * 
 * 
 */

import { Component, OnInit } from '@angular/core';
import { AppLoaderService } from '../shared/components/app-loader/app-loader.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css'],
})
export class FirstChildComponent implements OnInit {
  constructor(private _appLoaderService: AppLoaderService) {}

  ngOnInit(): void {
    /**
     * FOR TESTING LOADER, emitted pageLoadingEvent with false value to hide loader & kept timeout as 2 seconds.
     * Please emit this pageLoadingEvent as false to hide loader, wherever required.
     */
    setTimeout(() => {
      this._appLoaderService.pageLoadingEvent.emit(false);
    }, 2000);
  }

  /**
   * To Manually show/hide Global Loader
   */
  public startLoader(){
    this._appLoaderService.pageLoadingEvent.emit(true); //To show Global Loader
    setTimeout(()=>{
      this._appLoaderService.pageLoadingEvent.emit(false); //To hide Global Loader
    },2000)
  }
}
