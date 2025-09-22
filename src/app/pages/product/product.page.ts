import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})

export class ProductPage {

  data: any[] = [
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Alice', age: 24, city: 'London' },
    { name: 'Bob', age: 32, city: 'Paris' }
  ];

  exportToExcel(): void {
    const title = [["Title: This is August Data"]];
    const emptyRow = [[]];

    const aoaData = [
      Object.keys(this.data[0]),         
      ...this.data.map(obj => Object.values(obj)) 
    ];

    const footer = [["Date Range: 1 August to 30 August"]];
    const finalData = [
      ...title,
      ...emptyRow,
      ...aoaData,
      ...emptyRow,
      ...footer
    ];

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(finalData);

    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: aoaData[0].length - 1 } }, 
      { s: { r: finalData.length - 1, c: 0 }, e: { r: finalData.length - 1, c: aoaData[0].length - 1 } } 
    ];

    ws['A1'].s = { font: { bold: true, sz: 14 }, alignment: { horizontal: "center" } };
    ws[`A${finalData.length}`].s = { font: { italic: true }, alignment: { horizontal: "center" } };

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'MyExcelFile');
  }


  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    saveAs(data, `${fileName}_${new Date().getTime()}.xlsx`);
  }
  
}