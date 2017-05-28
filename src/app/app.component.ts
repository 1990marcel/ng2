import { Component } from '@angular/core';
import { Contact } from './contact';
const CONTACTS: Contact[] = [

    { phone: "55588845", firstName: 'mike', lastName: 'karl', email:"mcn@yahoo.com" },
    { phone: "4452255", firstName: 'luke', lastName: 'turner', email:"mcn@yahoo.com" },
    { phone: "5451515", firstName: 'ckark', lastName: 'kent', email:"mcn@yahoo.com" },
    { phone: "351655", firstName: 'mark', lastName: 'louis', email:"mcn@yahoo.com" },
  
];
@Component({
  selector: 'my-app',
  template: `
    
    <div>
    <ul>
      <li *ngFor="let contact of contacts"
        
        (click)="onSelect(contact)"
        [class.clicked] = "selectedContact===contact">
        <span class="badge">{{contact.lastName}}</span> {{contact.firstName}} 
      </li>
    </ul>
    </div>
    <contact-detail [contact]="selectedContact"></contact-detail>

  `,

})
export class AppComponent {
  
  contacts = CONTACTS;
  selectedContact: Contact;
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
