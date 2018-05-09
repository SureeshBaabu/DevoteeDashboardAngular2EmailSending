import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SendEmail } from '../dashboard-shared/dashboard-models/sendemail.model';

@Injectable()

export class SendEmailService {

    constructor(private http: HttpClient) { }

    sendEmail(sendemail){
        return this.http.post('/api/sendemail', sendemail)
        .map((response: Response) => {
            const result = response.json();
        });
      }
}