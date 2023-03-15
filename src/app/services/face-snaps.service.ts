import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibal',
            description: 'Van Grenier ! Personnage récurent des épisodes de JDG',
            imageUrl: 'https://media.tenor.com/W7lNExv_HP0AAAAC/jdg-genie.gif',
            createdDate: new Date(),
            snaps: 250,
            location: 'Bretagne'
        },
        {
            id: 2,
            title: 'Mia',
            description: 'Les chatons ont maintenant 2 mois. Ils atteignent chaque jour de nouveaux sommets et atteignent de nouveaux horizons. Faire une sieste sur le toit d\'une maison n\'est plus une option pour Mia',
            imageUrl: 'https://i.ytimg.com/vi/N8NgLWDzKdM/maxresdefault.jpg',
            createdDate: new Date(),
            snaps: 150,
            location: 'Montagne'
        },
        {
            id: 3,
            title: 'Happy Pallas cat',
            description: 'C\'est un beau Pallas qui donne du bonheur',
            imageUrl: 'https://media.tenor.com/HSjA9S4R4osAAAAM/manul.gif',
            createdDate: new Date(),
            snaps: 0
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}