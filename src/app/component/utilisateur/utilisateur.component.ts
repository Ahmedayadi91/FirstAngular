import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

    nom : String
    age : Number
    email = String
    // hobby = Hobby


  constructor() { 
    this.nom = 'Alex' 
    this.age = 24
    // this.email = 'hello@google.com'
    // this.hobby = {
    //   hobbyUn : 'foot' ,
    //   hobbyDeux : 'Lire' ,
    //   hobbyTrois : 'playstation' 
    // }
   }

   onClick () {
     alert('aucun iformation supplémentaire !! ')
   }

  ngOnInit(): void {
  }
// interface Hobby {
//   hobbyUn : String;
//   hobbyDeux : String;
//   hobbyTrois : String;
}

