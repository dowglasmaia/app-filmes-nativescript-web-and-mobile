import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { InMemoryDataService } from '@src/app/In-memory-data.service';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from '@nativescript/angular';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MovieListComponent,
  
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {put204:false, dataEncapsulation:false}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
