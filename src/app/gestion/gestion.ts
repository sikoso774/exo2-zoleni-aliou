import { Component, inject } from '@angular/core';
import { ContactStore } from '../contact-store';

@Component({
  imports: [],
  selector: 'app-gestion',
  styleUrl: './gestion.scss',
  templateUrl: './gestion.html',
})
export class Gestion {
  readonly lastMessage = inject(ContactStore).lastMessage;
}
