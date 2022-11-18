import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersoenlichComponent } from './persoenlich/persoenlich.component';
import { BildungComponent } from './bildung/bildung.component';
import { KenntnisseComponent } from './kenntnisse/kenntnisse.component';
import { FreizeitComponent } from './freizeit/freizeit.component';
import { ProjekteComponent } from './projekte/projekte.component';

const routes: Routes = [
  { path: 'index.html', component: AppComponent },
  { path: 'Persoenlich', component: PersoenlichComponent },
  { path: 'Bildung', component: BildungComponent },
  { path: 'Kenntnisse', component: KenntnisseComponent },
  { path: 'Freizeit', component: FreizeitComponent },
  { path: 'Projekte', component: ProjekteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PersoenlichComponent,
    BildungComponent,
    KenntnisseComponent,
    FreizeitComponent,
    ProjekteComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
