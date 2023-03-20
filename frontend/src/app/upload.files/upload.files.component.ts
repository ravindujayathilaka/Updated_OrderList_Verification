import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload.files.component.html',
  styleUrls: ['./upload.files.component.css']
})
export class UploadFilesComponent {

  ExcelData: any;
  ExcelHeaders: any;

  constructor() { }

  ngOnInit(): void {
  }

  readExcel(event:any){
    const file = event.target.files[0];

    if(file){
      alert("Uploaded Successfully"); 
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(file);

      fileReader.onload = (e) => {
        var workBook = XLSX.read(fileReader.result, {type:'binary'});
        var sheetNames = workBook.SheetNames;
        this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
        this.ExcelHeaders = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]], { header: 1})[0];

        console.log(this.ExcelData);
        console.log(this.ExcelHeaders);
      }
    }
    else{
      alert("File Not Found")
    }
  }
}
