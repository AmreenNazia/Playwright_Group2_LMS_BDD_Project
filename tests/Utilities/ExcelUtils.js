// const ExcelJS = require('exce');
const xlsx = require('xlsx');

function readExcelFile(filepath, sheetName){
   const workbook = xlsx.readFile(filepath);
   const sheet = workbook.Sheets[sheetName];
   const jsonData = xlsx.utils.sheet_to_json(sheet);
   return jsonData;
}

// async function readExcelFile(SheetPath, SheetName) {
//    const workbook = new ExcelJS.Workbook();
//    await workbook.xlsx.readFile(SheetPath);
//    const worksheet = workbook.getWorksheet(SheetName);

//    const data = [];
//    worksheet.eachRow((row, rowNumber) => {
//       // Assuming your Excel data has headers in the first row and data below
//       if (rowNumber > 1) {  // Skip the header row (if any)
//          data.push({
//             username: row.getCell(1).value,  // Assuming username is in the first column
//             password: row.getCell(2).value   // Assuming password is in the second column
//          });
//       }
//    });

//    return data;  // Return the data array
// }

module.exports = { readExcelFile };
