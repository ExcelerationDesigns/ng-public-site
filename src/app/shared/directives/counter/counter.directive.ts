import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})

export class CounterDirective {

  @Output() onCountChange = new EventEmitter();
  private _timer;
  private _duration: number;
  private _countTo: number;
  private _countFrom: number;
  private _step: number;

  @Input()
  set duration(duration) {
    this._duration = parseFloat(duration);
    this.run();
  }

  @Input()
  set countTo(countTo) {
    this._countTo = parseFloat(countTo);
    this.run();
  }

  @Input()
  set countFrom(countFrom) {
    this._countFrom = parseFloat(countFrom);
    this.run();
  }

  @Input()
  set step(step) {
    this._step = parseFloat(step);
    this.run();
  }

  run() {
    const _this = this;
    clearInterval(_this._timer);

    if (isNaN(_this._duration)) {
      return false;
    }

    if (isNaN(_this._step)) {
      return false;
    }

    if (isNaN(_this._countFrom)) {
      return false;
    }

    if (isNaN(_this._countTo)) {
      return false;
    }

    if (_this._step <= 0) {
      console.warn('Step must be greater than 0.');
      return false;
    }

    if (_this._duration <= 0) {
      console.warn('Duration must be greater than 0.');
      return false;
    }

    if (_this._step > _this._duration * 1000) {
      console.warn('Step must be equal or smaller than duration.');
      return false;
    }

    let intermediate = _this._countFrom;
    const increment = Math.floor(Math.abs(_this._countTo - _this._countFrom) / ((_this._duration * 1000) / _this._step));

    _this.onCountChange.emit(intermediate);

    _this._timer = setInterval(() => {
      if (_this._countTo < _this._countFrom) {
        if (intermediate <= _this._countTo) {
          clearInterval(_this._timer);
          _this.onCountChange.emit(_this._countTo);
        } else {
          _this.onCountChange.emit(intermediate);
          intermediate -= increment;
        }
      } else {
        if (intermediate >= _this._countTo) {
          clearInterval(_this._timer);
          _this.onCountChange.emit(_this._countTo);
        } else {
          _this.onCountChange.emit(intermediate);
          intermediate += increment;
        }
      }
    }, _this._step);
  }
}
