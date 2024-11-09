const XLSX = require('xlsx');

function readExcelFile(filepath, sheetName) {
  // Read the Excel file
  const workbook = XLSX.readFile(filepath);
  
  // Get the sheet by name
  const sheet = workbook.Sheets[sheetName];
  
  // Convert the sheet to JSON (an array of objects)
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });  // Using { header: 1 } to return an array of arrays for all rows
  
  return data; // This will return all rows in the sheet as an array of objects
}

function getDataByKeyOption(filepath, sheetName, keyOptionValue) {
  const data = readExcelFile(filepath, sheetName);
  
  // Assuming the first row contains headers and each row represents an entry
  const header = data[0];  // The first row as header
  
  // If the data is empty or malformed, return an empty object
  if (!data || data.length <= 1) return [];

  // Find the index of the 'KeyOption' column (assuming headers in the first row)
  const keyOptionIndex = header.indexOf('KeyOption'); // Replace 'KeyOption' with 'Option' if that’s your column name
  if (keyOptionIndex === -1) return [];  // If 'KeyOption' column is not found, return empty array

  // Find all matching entries based on the keyOptionValue
  const matchingEntries = data.slice(1).filter(row => row[keyOptionIndex] === keyOptionValue);  // Skipping the header row
  
  // Map the matching entries into the desired format
  const formattedData = matchingEntries.map(row => {
    const obj = {};
    // Skip the 'KeyOption' column and map the remaining columns into an object
    header.forEach((column, index) => {
      if (index !== keyOptionIndex) {
        obj[column] = row[index];
      }
    });
    return obj;
  });

  // If there are matching rows, print them in the required format
  // if (formattedData.length > 0) {
  //   formattedData.forEach((entry) => {
  //     if (entry['expectedValue']) {
  //       console.log(entry['expectedValue']);
  //     }
  //     else if (entry.Name && entry.Age) {
  //       console.log(`${keyOptionValue} { Name: ${entry.Name}, Age: ${entry.Age} }`);
  //     } else {
  //       console.log(`${keyOptionValue} { Incomplete data }`);
  //     }
  //   });
  // }

  return formattedData;  // Return the formatted data if needed
}

module.exports = {readExcelFile};
module.exports = {getDataByKeyOption}
