import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../../../services/api-call.service';

@Component({
  selector: 'app-pointstable',
  standalone: true,
  imports: [],
  templateUrl: './pointstable.component.html',
  styleUrl: './pointstable.component.css'
})
export class PointstableComponent implements OnInit {
  pointsTable: any;
  tableHeading:any
   constructor(private _api:ApiCallService){
       
   }
  ngOnInit(): void {
       this._api.getPointTable().subscribe({
        next:data=>{
          this.pointsTable=data;
       console.log(this.pointsTable)
       this.tableHeading=[...this.pointsTable[0]]
       console.log(this.tableHeading)
        },
        error:error=>{
          console.log(error)
        }
       })
  }
}
