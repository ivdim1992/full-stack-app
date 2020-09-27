import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GenresEnum } from 'src/app/shared/enums';
import { IGenre } from '@app/shared/interfaces';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenreComponent {
  @Output() public selectedGenre = new EventEmitter<IGenre>();
  @Output() public clearSelection = new EventEmitter();

  @Input() public genresCount;

  public currentIndex: number;
  public genres: string[] = Object.values(GenresEnum);

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
