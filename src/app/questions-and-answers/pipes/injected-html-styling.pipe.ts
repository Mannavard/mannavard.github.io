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
      code: 'bg-indigo-100',
      pre: 'bg-blue-50 border-l-rose-400 border-l-4 py-1 pl-2 shadow-md',
    }
  }


  transform(value: any) {
    value = value.replaceAll('<p>',    `<p class="${this.styleMap.p}">`)
                 .replaceAll('<ul>',   `<ul class="${this.styleMap.ul}">`)
                 .replaceAll('<li>',   `<li class="${this.styleMap.li}">`)
                 .replaceAll('<code>', `<code class="${this.styleMap.code}">`)
                 .replaceAll('<pre>',  `<pre class="${this.styleMap.pre}">`);

    console.log(value);

    return value;
  }
}
