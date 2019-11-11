import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd , NavigationStart, ActivationEnd } from '@angular/router';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { Subscription } from "rxjs";

export let browserRefresh = false;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  navigationSubscription: Subscription;
  collapedSideBar: boolean;

  constructor(private router: Router) {}

  /**/
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.preventDefault();
    event.returnValue = false;
  }



  ngOnInit() {
    /*
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
         return;
      }
      window.scrollTo(0, 0);
    });*/

    this.router.events
        .pipe(
            filter(
                ( event: NavigationEvent ) => {
                  return( event instanceof NavigationStart );
                }
            )
        )
        .subscribe(
            ( event: NavigationStart ) => {
              window.scrollTo(0, 0);
              console.group( "NavigationStart Event" );
              // Ogni sequenza di navigazione ha un unico ID. Anche i "popstate navigations"
              // I "navigationTrigger" sono:
              // - imperative (user clicca un link).
              // - popstate   (browse Back button).
              console.log( "navigation id:", event.id );
              console.log( "route:", event.url );
              console.log( "trigger:", event.navigationTrigger );
              // Il "restoredState" Ã¨ quando l'evento Ã¨ triggerato dal "popstate" event (ex, back / forward buttons).
              if ( event.restoredState ) {
                console.log("non ripristino navigation id:", event.restoredState.navigationId);
                // this.router.navigate(['/access-denied']);
              }
              console.groupEnd();
            },
            ( event: NavigationEnd ) => {
              return;
            }
        );
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

}
