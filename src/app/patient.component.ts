import { Component, OnInit } from "@angular/core";

@Component({

  selector : 'patient-app',
  template : `<h4>Patient Details</h4>
  <app-patient-display></app-patient-display>`

})
export class PatientComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
