/**
 * Global Loader Component
 * For binding global loader event.
 *
 */

import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { AppLoaderService } from './app-loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
})
export class AppLoaderComponent implements OnInit {
  public isPageLoading: boolean = true;

  constructor(
    private appLoaderService: AppLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bindLoaderEvent();
    this.bindNavigationEvents();
  }

  private bindLoaderEvent() {
    this.appLoaderService.getPageLoading.subscribe((value: boolean) => {
      this.isPageLoading = value;
    });
  }

  /**
   * Binded Global Loader with Navigation Events
   * 
   * Global loader will appear on every Navigation Start and stops if Navigation is cancelled
   * or if there is any Navigation Error.
   * 
   * On Navigation End - Hiding global loader event is NOT emitted, so as to handle it
   * in navigated component after successfull loading of the component and wherever required.
   * Also, this is implemented in order to avoid flickering of screen with loader on/off on navigation end.
   * 
   */
  private bindNavigationEvents() {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isPageLoading = true;
          break;
        }
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.isPageLoading = false;
          break;
        }
        case event instanceof NavigationEnd: {
          /**
           * We cannot set Page loading to false here, because there might be some
           * API calls/pre-computation on navigated screen. Otherwise, this will result in flickering
           * of the loader on screen
           **/
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
