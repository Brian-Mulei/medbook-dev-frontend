import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  patients: any[] =[];

  constructor(private Apiservice: ApiServiceService){}

  ngOnInit()
   {
    this.fetchData();
   }

   fetchData(){

    this.Apiservice.getPatients().subscribe((data)=>{
      this.patients=data;
    })
   }
}
