import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  Buttontext!: string;

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit() {
    this.Buttontext = 'Add snap now';
  }

  Onsnap() {
    if (this.Buttontext == 'Add snap now') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.Buttontext = 'Del snap now';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.Buttontext = 'Add snap now';
    }
  }
}
