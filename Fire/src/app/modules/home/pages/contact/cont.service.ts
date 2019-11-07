import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContService {
  server;

  constructor() { }

  sendMessage(message, emailAddrres) {
    this.server.send(
      {
        // text:    "i hope this works",
        text: message,
        // from:    "you <username@your-email.com>",
        // to:      "someone <someone@your-email.com>, another <another@your-email.com>",
        to: emailAddrres

        // cc:      "else <else@your-email.com>",
        // subject: "testing emailjs"
      },
      function(err, message) {
        console.log(err || message);
      }
    );
  }
}
