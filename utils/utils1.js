// exportUtils.js
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';

export const exportToExcel = (data) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'SalesData');
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  saveAs(dataBlob, 'SalesData.xlsx');
};

export const exportToPDF = (data) => {
  const doc = new jsPDF();
  doc.autoTable({
    head: [['ID', 'Name', 'Phone', 'Sales', 'Buyer', 'Sales Price', 'Buyer Price', 'Income', 'Address', 'Buy Price']],
    body: data.map(sale => [sale.id, sale.name, sale.phone, sale.sales, sale.buyer, sale.sales_price, sale.buyer_price, sale.income, sale.address, sale.buy_price]),
  });
  doc.save('SalesData.pdf');
};
