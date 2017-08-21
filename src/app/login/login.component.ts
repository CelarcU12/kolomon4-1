import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    url='/views'

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService
    ){ }

    ngOnInit() {
        // reset login status
        this.apiService.logout();

    }

    login() {
        this.loading = true;
        //console.log(this.model.username, this.model.password)
        this.apiService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    
                    console.log(data)
                    console.log('Message error, nepravilen vnos');
                    this.router.navigate([this.url]);
                },
                (error: HttpErrorResponse) => console.log('tretji konzol log'));
    }
}