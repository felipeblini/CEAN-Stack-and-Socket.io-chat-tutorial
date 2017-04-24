import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  // propriedades do view model
  messages: Array<String>;
  chatBox: String;
  socket: any;

  constructor() {
    // valores iniciais para as propriedades
    this.messages = [];
    this.chatBox = "";
    this.socket = io();
    this.socket.on("mensagem_mano", (msg: string) => {
      console.log('receiving message:', msg)
      this.messages.push(msg);
    });
  }

  // function send()
  send() {
    if(!this.chatBox)
      return;

    console.log('sending message:', this.chatBox);
    this.socket.emit("mensagem_mano", this.chatBox)
    this.chatBox = "";
  }

  ngOnInit() {
    console.log('chat.component initialized');
  }
}
