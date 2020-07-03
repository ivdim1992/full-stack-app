import 'jest-preset-angular';

// tslint:disable-next-line: no-any
(global as any)['CSS'] = null;

/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

class Worker {
  public url;
  public onmessage;

  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => ({});
  }

  public postMessage(msg) {
    this.onmessage(msg);
  }
}

function noOp() {
  return;
}

Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
Object.defineProperty(window, 'Worker', { value: Worker });
