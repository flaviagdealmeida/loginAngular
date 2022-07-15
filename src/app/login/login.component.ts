import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;

  constructor(private router: Router) { }

  onSubmit(){
    //console.log(`User: ${this.username}, Pass: ${this.password}`) >> mostra que os dados estão sendo capturados
    this.router.navigate(['/conteudo'])
  }

  ngOnInit(): void {
  }

}
