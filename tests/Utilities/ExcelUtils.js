const xlsx = require('xlsx');
/**
 * Function to read data from an Excel sheet.
 * @param {string} filePath - The path to the Excel file.
 * @param {string} sheetName - The name of the sheet to read.
 * @returns {Array<Object>} - Returns data as an array of key-value objects.
 */

 function readExcelData(filepath, sheetName){
    const workbook = xlsx.readFile(filepath);
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);
    return jsonData;
 }

 module.exports = {readExcelData,};

