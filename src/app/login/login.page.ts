// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router, 
    private loginService: LoginService,
    private storageService: StorageService
    ) {}

  onLogin() {
    // Implement your login functionality here
    // For example, you can make an HTTP request to the server with the user's credentials
    // If the login is successful, navigate to the desired page using this.router.navigate(['/tab2']);
    // If there's an error, handle it appropriately

    // console.log(this.credentials.username);
    this.loginService.login(this.credentials).subscribe({
      next: (response) => {
        console.log(response.user);
        // Handle successful login
        // You might want to store the access token or user details in the app
        this.router.navigate(['/tab4']); // Navigate to the dashboard page or any other page after successful login
        this.storageService.set('userData', response.user);
      },
      error: (error) => {
        // Handle login error
      }
    });
  }
}


