import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  Buttontext!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.Buttontext = 'Add snap now';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  Onsnap(FaceSnapId: number) {
    if (this.Buttontext == 'Add snap now') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'snap').pipe(
        tap(() => { this.Buttontext = 'Del snap now';})
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'unsnap').pipe(
        tap(() => { this.Buttontext = 'Add snap now';})
      );
    }
  }
}
