import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';

import {RouterModule, Routes} from '@angular/router';

import { ContactService } from './contact.service';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';


const routes: Routes=[
{
  path: 'create',
  component: CreateComponent
},
{
  path: 'edit/:id',
  component: EditComponent
},
{
  path: 'index',
  component: IndexComponent
}

];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
