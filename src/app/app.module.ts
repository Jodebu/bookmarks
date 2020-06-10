import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { StoreModule } from '@ngrx/store';
import { BookmarkReducer } from './bookmarks/+state/bookmarks.reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BookmarkEffects } from './bookmarks/+state/bookmarks.effects';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BookmarksModule,
    SharedModule,
    NavBarModule,
    StoreModule.forRoot({ bookmarks: BookmarkReducer }),
    EffectsModule.forRoot([BookmarkEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
