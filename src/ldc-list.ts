import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement('ldc-list')
export class LdcList extends LitElement {

    @property() message = 'Hello World';

    override render() {
         return html `${this.message}`;
    }
}