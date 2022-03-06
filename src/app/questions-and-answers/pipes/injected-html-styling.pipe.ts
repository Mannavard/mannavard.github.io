import { Pipe } from '@angular/core';


@Pipe({
  name: 'injectedHTMLStyling',
})
export class InjectedHtmlStylingPipe {

  styleMap: any;


  constructor() {
    this.styleMap = {
      p: 'mb-4',
      ul: '',
      li: 'ml-4 list-disc',
      code: 'bg-red-100'
    }
  }


  transform(value: any) {
    value = value.replaceAll('<p>', `<p class="${this.styleMap.p}">`)
                 .replaceAll('<ul>', `<ul class="${this.styleMap.ul}">`)
                 .replaceAll('<li>', `<li class="${this.styleMap.li}">`)
                 .replaceAll('<code>', `<code class="${this.styleMap.code}">`);

    console.log(value);

    return value;
  }
}
