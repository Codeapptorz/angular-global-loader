import { Component, OnInit } from '@angular/core';
import { AppLoaderService } from '../shared/components/app-loader/app-loader.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css'],
})
export class SecondChildComponent implements OnInit {
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
}
