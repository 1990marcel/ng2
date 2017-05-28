import { Component, Input } from '@angular/core';
import { Contact } from './contact';
@Component({
  selector: 'contact-detail',
  template: `
    <div *ngIf="contact" class = div-red>
      <h2>{{contact.firstName}}</h2>
      <div><label>Name: </label>{{contact.lastName}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="contact.firstName" placeholder="name"/>
      </div>
    </div>
  `
})
export class contactDetailComponent {
  @Input() contact: Contact;
}
