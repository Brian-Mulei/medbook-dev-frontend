import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  constructor(private Apiservice: ApiServiceService){}

  patient={
    name:"",
    date_of_birth:"",
    gender:"",
    service:"",
    comment:"",
  }
  

  onSubmit(){
    const dateBirth =new Date(this.patient.date_of_birth);
    const formattedDate= dateBirth.toISOString().split('T')[0];

    this.patient.date_of_birth=formattedDate;
    this.Apiservice.createPatient(this.patient).subscribe(() => {

    })
  }
}
