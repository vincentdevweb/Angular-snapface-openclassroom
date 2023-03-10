import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  Buttontext!: string;

  ngOnInit() {
    this.Buttontext = 'Add snap now';
  }

  Onsnap() {
    if (this.Buttontext == 'Add snap now') {
      this.faceSnap.snaps++;
      this.Buttontext = 'Del snap now';
    } else {
      this.faceSnap.snaps--;
      this.Buttontext = 'Add snap now';
    }
  }
}
