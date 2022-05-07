import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExemploClientComponent } from './exemplo-client/exemplo-client.component';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'exemplo', component: ExemploClientComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ExemploClientComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BitcoinService],
})
export class AppModule {}
