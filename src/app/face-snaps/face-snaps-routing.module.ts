import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';

const routes: Routes = [
  {path: 'create', component: NewFaceSnapComponent},
  {path: ':id', component: SingleFaceSnapComponent},
  {path: '', component: FaceSnapListComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FaceSnapsRoutingModule {}

