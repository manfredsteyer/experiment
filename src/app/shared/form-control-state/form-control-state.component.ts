import {
  Component, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control-state',
  templateUrl: './form-control-state.component.html',
  styles: [`
    ul {
      list-style: none;
      margin-bottom:0;
    }
  `]
})
export class FormControlStateComponent implements OnChanges, OnInit {

  @Input()
  control: FormControl;

  @Input()
  errorColor = 'danger';

  ngOnChanges(changes: SimpleChanges): void {

    if ('errorColor' in changes) {
      this.errorColor = changes.errorColor.currentValue || 'danger'
    }
  }

  ngOnInit() {

  }

  getErrors(): any[] {
    return Object.keys(this.control.errors)
      .map((key) => {
        return {
          name: key,
          value: this.control.errors[key]
        }
      })
  }

}
