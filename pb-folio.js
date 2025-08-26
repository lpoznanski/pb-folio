import { PbLink } from 'https://cdn.jsdelivr.net/npm/@teipublisher/pb-components@2.19.0/dist/pb-components-bundle.js';

export class PbFolio extends PbLink {
  static get properties() {
    return {
      ...super.properties,
      xmlId2: { type: String, attribute: 'xml-id2' },
      channel2: { type: String, attribute: 'channel2' }

    };
  }

  constructor() {
    super();
    this.xmlId2 = null;
    this.channel2 = 'ask3';
  }

  _onClick(ev) {
    ev.preventDefault();

    // 1️⃣ Standardowy PbLink: używa emit + xmlId → URL w pasku
    super._onClick(ev);

    // 2️⃣ Drugi kanał: wysyłamy xmlId2
    if (this.xmlId2) {
      this.emitTo(this.channel2, { id: this.xmlId2 });
    }
  }
}

customElements.define('pb-folio', PbFolio);
