import { Component, signal } from '@angular/core';

interface Film {
  titre: string;
  affiche: string;
}

@Component({
  imports: [],
  selector: 'app-liste',
  styleUrl: './liste.scss',
  templateUrl: './liste.html',
})
export class Liste {
  films: Film[] = [
    { titre: 'Avatar', affiche: 'images/Avatar-affiche-teaser.png' },
    { titre: 'Catch Me if you can', affiche: 'images/catch-me-if-u-can.png' },
    { titre: 'Coach Carter', affiche: 'images/coach-carter.png' },
    { titre: 'Divergent', affiche: 'images/divergent.png' },
    { titre: 'Harry Potter and the Deadly Hallows - part 2', affiche: 'images/Harry-Potter.png' },
  ];

  filmSelectionne = signal<Film | null>(null);

  public select_movie(film: Film, event: Event) {
    event.preventDefault();
    this.filmSelectionne.set(film);
  }
}
