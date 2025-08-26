customElements.whenDefined('pb-link').then(() => {
  const PbLink = customElements.get('pb-link');

  class PbFolio extends PbLink {
    static get properties() {
      return {
        ...super.properties,
        xmlId2:   { type: String, attribute: 'xml-id2' },
        channel2: { type: String, attribute: 'channel2' }
      };
    }

    constructor() {
      super();
      this.xmlId2   = null;
      this.channel2 = 'ask3';
    }

    _onClick(ev) {
      ev.preventDefault();
      super._onClick(ev); // klasyczne pb-link emit="navi" xml-id="…"
      if (this.xmlId2) {
        this.emitTo(this.channel2, { id: this.xmlId2 }); // drugi strzał na channel2
      }
    }
  }

  customElements.define('pb-folio', PbFolio);
});
