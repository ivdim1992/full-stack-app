import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';

export interface IOptionSelectedValue {
  option: OptionComponent;
  // tslint:disable-next-line: no-any
  value: any;
}

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent {
  @Input() public value: string;

  public isChecked: boolean;
  @Output() public emittedValues = new EventEmitter<IOptionSelectedValue>();

  constructor(public readonly cd: ChangeDetectorRef) {}

  public onSelect(value: string) {
    this.isChecked ? this.deselect(true) : this.select(value, true);
  }

  public select(value, emitEvent: boolean): void {
    this.isChecked = true;
    if (emitEvent) {
      this.emittedValues.emit({ option: this, value });
    }

    setTimeout(() => {
      this.cd.markForCheck();
    }, 0);
  }

  public deselect(emitEvent: boolean): void {
    this.isChecked = false;
    if (emitEvent) {
      this.emittedValues.emit({ option: this, value: this.value });
    }

    setTimeout(() => {
      this.cd.markForCheck();
    }, 0);
  }
}
