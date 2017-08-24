import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, 
    HttpXsrfTokenExtractor
     } from '@angular/common/http';
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
    logged: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService,
        private token: HttpXsrfTokenExtractor
    ){ }

    ngOnInit() {
        // reset login status
        //this.apiService.logout();

    }

    login() {
        this.loading = true;
        //console.log(this.model.username, this.model.password)
        this.apiService.login(this.model.username, this.model.password)
            // .subscribe((data) =>
            //     {
            //         console.log(data)
            //     },
            //     (error: HttpErrorResponse) => {
            //         if (error.status === 200){
            //             console.log('Prijava je bila uspešna')
            //             console.log()
            //             this.logged=true
                        

            //         }
            //         else {
            //             console.log("Neuspešna prijava, Napaka:"+error.status)
            //             this.router.navigate(['/login'])
            //             this.loading= false;
            //             this.logged=false;
            //             console.log(error.headers.get('token'))
                        
            //         }
            //     });
    }
}