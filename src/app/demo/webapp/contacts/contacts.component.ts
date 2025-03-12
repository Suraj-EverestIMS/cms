import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/demo/api/contact';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ContactService } from 'src/app/demo/service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [MessageService]
})
export class ContactsComponent implements OnInit {

  contactDialog: boolean = false;

  deleteContactDialog: boolean = false;

  deleteContactsDialog: boolean = false;

  contacts: Contact[] = [];

  contact: Contact = {};

  selectedContacts: Contact[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private contactService: ContactService, private messageService: MessageService) { }

  ngOnInit() {
      this.contactService.getContacts().then(data => this.contacts = data);

      console.log(this.contacts);
      window.localStorage.setItem('landing', 'false');
      

      this.cols = [
          { field: 'contact', header: 'Contact' },
          { field: 'price', header: 'Price' },
          { field: 'category', header: 'Category' },
          { field: 'rating', header: 'Reviews' },
          { field: 'inventoryStatus', header: 'Status' }
      ];

      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];
  }

  openNew() {
      this.contact = {};
      this.submitted = false;
      this.contactDialog = true;
  }

  deleteSelectedContacts() {
      this.deleteContactsDialog = true;
  }

  editContact(contact: Contact) {
      this.contact = { ...contact };
      this.contactDialog = true;
  }

  deleteContact(contact: Contact) {
      this.deleteContactDialog = true;
      this.contact = { ...contact };
  }

  confirmDeleteSelected() {
      this.deleteContactsDialog = false;
      this.contacts = this.contacts.filter(val => !this.selectedContacts.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contacts Deleted', life: 3000 });
      this.selectedContacts = [];
  }

  confirmDelete() {
      this.deleteContactDialog = false;
      this.contacts = this.contacts.filter(val => val.id !== this.contact.id);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Deleted', life: 3000 });
      this.contact = {};
  }

  hideDialog() {
      this.contactDialog = false;
      this.submitted = false;
  }

  saveContact() {
      this.submitted = true;

      if (this.contact.name?.trim()) {
        console.log(this.contact.name);
        
          if (this.contact.id) {
              // @ts-ignore
              this.contacts[this.findIndexById(this.contact.id)] = this.contact;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Updated', life: 3000 });
          } else {
              this.contact.id = this.createId();
              this.contact.date_created = this.createTimestamp();
              this.contact.last_transaction = "N/A";
              this.contact.total_transactions = 0;
              this.contacts.push(this.contact);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Created', life: 3000 });
          }

          this.contacts = [...this.contacts];
          this.contactDialog = false;
          this.contact = {};
      }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

    createId(): string {
        if (this.contacts.length === 0) {
            return '1001'; // Start from 1001 if array is empty
        }

        // Get the last object ID and convert it to a number
        const lastId = Number(this.contacts[this.contacts.length - 1].id);

        // Increment and return as string
        return (lastId + 1).toString();
    }

    createTimestamp(): string {
        return new Date().toISOString(); // Generates a timestamp in ISO format
    }

    onGlobalFilter(table: Table, event: Event) {
        const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
        table.filterGlobal(value, 'contains');
    }
}