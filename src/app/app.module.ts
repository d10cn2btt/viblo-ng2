import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroFormComponent,
        UserInfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
