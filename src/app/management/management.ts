import { Component, inject } from '@angular/core';
import { ContactStore } from '../contact-store';

@Component({
  imports: [],
  selector: 'app-management',
  styleUrl: './management.scss',
  templateUrl: './management.html',
})
export class Management {
  readonly lastMessage = inject(ContactStore).lastMessage;
}
