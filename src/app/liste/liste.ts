import { Component, signal } from '@angular/core';

interface Movie {
  title: string;
  poster: string;
}

@Component({
  imports: [],
  selector: 'app-liste',
  styleUrl: './liste.scss',
  templateUrl: './liste.html',
})
export class Liste {
  movies: Movie[] = [
    { title: 'Avatar', poster: 'images/Avatar-poster-teaser.png' },
    { title: 'Catch Me if you can', poster: 'images/catch-me-if-u-can.png' },
    { title: 'Coach Carter', poster: 'images/coach-carter.png' },
    { title: 'Divergent', poster: 'images/divergent.png' },
    { title: 'Harry Potter and the Deadly Hallows - part 2', poster: 'images/Harry-Potter.png' },
  ];

  selectedMovie = signal<Movie | null>(null);

  public select_movie(movie: Movie, event: Event) {
    event.preventDefault();
    this.selectedMovie.set(movie);
  }
}
