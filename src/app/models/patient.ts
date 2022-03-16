export class Patient  {

  patientId : number = 0;
  patientName : string = ""
  symptom : string = ""
  billAmount : number = 0
  doctorAttended : string = ""

  constructor() {
    this.patientId = this.patientId++
    this.patientName = "John"
    this.symptom = "Influenza"
    this.billAmount = 150

  }

  


}
