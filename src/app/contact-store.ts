import { Service, signal } from '@angular/core';

export interface ContactMessage {
  firstName: string;
  lastName: string;
  age: number | null;
  email: string;
  comment: string;
}

@Service()
export class ContactStore {
  readonly lastMessage = signal<ContactMessage | null>(null);

  save(message: ContactMessage): void {
    this.lastMessage.set(message);
  }
}

// service dans un dossier service.