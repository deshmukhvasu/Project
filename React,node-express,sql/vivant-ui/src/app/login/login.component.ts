import { Input, OnInit, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../common/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string = ""

  constructor(private cms: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.cms.login("/api/v1/login", {
        "password": this.form.value.password,
        "email": this.form.value.username
      }).subscribe((resp:any) => {
        if(resp && resp.status === 200)
        {
          localStorage.setItem("accessToken",resp.data.token)
          localStorage.setItem("userData",JSON.stringify(resp.data))
          this.router.navigate(['/products']);
        } else {
          alert(resp.message)
        }

      })
      // this.submitEM.emit(this.form.value);
    } 
  }
  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();

}
