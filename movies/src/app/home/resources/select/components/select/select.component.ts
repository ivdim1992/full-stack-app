import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  OnInit,
  ContentChildren,
  QueryList,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { OptionComponent, IOptionSelectedValue } from '../option/option.component';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
  public value: string;
  public subscription: Subscription;
  public selectionModel: SelectionModel<OptionComponent>;

  @ContentChildren(OptionComponent) public optionGroups: QueryList<OptionComponent>;

  // tslint:disable-next-line: no-any
  onChanged: any = (value: string) => new Object();
  // tslint:disable-next-line: no-any
  onTouched: any = () => new Object();

  public ngOnInit() {
    this.selectionModel = new SelectionModel<OptionComponent>(true);
  }

  // tslint:disable-next-line: no-any
  public writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  // tslint:disable-next-line: no-any
  public registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  // tslint:disable-next-line: no-any
  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public ngAfterViewInit() {
    this.setUpOptions();
  }

  public setUpOptions() {
    if (Array.isArray(this.value)) {
      const inComingValuesMap = this.value.reduce((acc, curr) => acc.set(curr, true), new Map());
      this.optionGroups.forEach((option) => {
        if (inComingValuesMap.has(option.value)) {
          option.select(option.value, false);
          this.selectionModel.select(option);
        }
      });
    }

    const eventEmitters = this.optionGroups.map((item) => item.emittedValues);
    this.subscription = merge(...eventEmitters).subscribe((option: IOptionSelectedValue) => {
      return this.onSelect(option);
    });
  }

  public onSelect(option: IOptionSelectedValue) {
    const wasSelected = this.selectionModel.isSelected(option.option);

    if (!wasSelected) {
      this.selectionModel.select(option.option);
      this.propagateChanges();
    } else if (wasSelected) {
      this.selectionModel.deselect(option.option);
      this.propagateChanges();
    } else {
      this.propagateChanges();
    }
  }

  public propagateChanges() {
    let valueToEmit = null;

    valueToEmit = this.selectionModel.selected.map((option) => option.value);
    this.onChanged(valueToEmit);
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
