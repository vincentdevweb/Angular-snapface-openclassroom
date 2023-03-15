import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  FaceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.FaceSnaps = [
      {
        title: 'Archibal',
        description: 'Van Grenier ! Personnage récurent des épisodes de JDG',
        imageUrl: 'https://media.tenor.com/W7lNExv_HP0AAAAC/jdg-genie.gif',
        createdDate: new Date(),
        snaps: 250,
        location: 'Bretagne'
      },
      {
        title: 'Mia',
        description: 'Les chatons ont maintenant 2 mois. Ils atteignent chaque jour de nouveaux sommets et atteignent de nouveaux horizons. Faire une sieste sur le toit d\'une maison n\'est plus une option pour Mia',
        imageUrl: 'https://i.ytimg.com/vi/N8NgLWDzKdM/maxresdefault.jpg',
        createdDate: new Date(),
        snaps: 150,
        location: 'Montagne'
      },
      {
        title: 'Happy Pallas cat',
        description: 'C\'est un beau Pallas qui donne du bonheur',
        imageUrl: 'https://media.tenor.com/HSjA9S4R4osAAAAM/manul.gif',
        createdDate: new Date(),
        snaps: 0
      }
    ];

  }

  // ngOnInit(): void {
  //   this.mySnap = new FaceSnap(
  //     'Archibal',
  //     'Van Grenier ! Personnage récurent des épisodes de JDG',
  //     'https://media.tenor.com/W7lNExv_HP0AAAAC/jdg-genie.gif',
  //     new Date(),
  //     0
  //   );
  //   this.myOtherSnap = new FaceSnap(
  //     'Mia',
  //     'Les chatons ont maintenant 2 mois. Ils atteignent chaque jour de nouveaux sommets et atteignent de nouveaux horizons. Faire une sieste sur le toit d\'une maison n\'est plus une option pour Mia',
  //     'https://i.ytimg.com/vi/N8NgLWDzKdM/maxresdefault.jpg',
  //     new Date(),
  //     0
  //   );
  //   this.myLastSnap = new FaceSnap(
  //     'Happy Pallas cat',
  //     'C\'est un beau Pallas qui donne du bonheur',
  //     'https://media.tenor.com/HSjA9S4R4osAAAAM/manul.gif',
  //     new Date(),
  //     0
  //   );
  // }
}
