import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenreComponent {
  @Output() public selectedGenre = new EventEmitter<{ id: string; genre: string }>();
  @Output() public clearSelection = new EventEmitter();

  public currentIndex: number;

  public genres: string[] = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Drama',
    'Family',
    'Fantasy',
    'Horror'
  ];

  constructor(private readonly router: Router) {}

  public onSelect(genre: string, index: number) {
    this.currentIndex = index;
    this.selectedGenre.emit({ id: this.currentIndex.toString(), genre });
  }

  public onAddMovie() {
    this.router.navigate(['movies', 'add']);
  }

  public onClearSelection() {
    this.currentIndex = -1;
    this.clearSelection.emit();
  }
}
