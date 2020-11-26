import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  { path: 'app-test', component: TestComponent},
  { path: 'app-test2', component: Test2Component},
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    PostComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
