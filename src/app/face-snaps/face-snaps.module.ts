import { FaceSnapsRoutingModule } from './face-snaps-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
