import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, merge, Observable, of, queueScheduler, scheduled } from 'rxjs';
import { combineAll, distinctUntilChanged, map, shareReplay, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-icons',
  templateUrl: 'icons.component.html',
  styleUrls: ['icons.component.scss'],
})
export class IconsComponent {
  public readonly searchFormControl: FormControl = new FormControl('');
  private readonly iconsList: string[] = [
    'gi-icon-3dots',
    'gi-icon-add',
    'gi-icon-box',
    'gi-icon-burger',
    'gi-icon-folder',
    'gi-icon-grid-4-break',
    'gi-icon-grid-4',
    'gi-icon-grid-9',
    'gi-icon-next',
    'gi-icon-note',
    'gi-icon-refresh',
    'gi-icon-search',
    'gi-icon-settings',
    'gi-icon-shutdown',
    'gi-icon-tag',
    'gi-icon-trash',
    'gi-icon-user',
  ];
  public readonly iconsList$: Observable<string[]> = this.searchFormControl.valueChanges.pipe(
    startWith(this.searchFormControl.value),
    distinctUntilChanged(),
    map((value: string) => (value?.length ? value : null)),
    map((value: string) => this.iconsList.filter((icon: string) => !value || icon.includes(value))),
    shareReplay()
  );
}
