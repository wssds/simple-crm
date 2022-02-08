import { Component, OnInit } from '@angular/core';

import { Firestore } from '@angular/fire/firestore';

import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate!: Date;
  
  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
  }


  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);

    this.firestore
    .collection('users')
    .add(this.user)
    .then((result: any) => {
      console.log('Adding user finished', result);

    });
  }

}
