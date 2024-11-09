const { readExcelFile } = require('../Utilities/ExcelUtils'); 
const { getDataByKeyOption } = require('../Utilities/newExcelUtils'); 
const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
const sheetName = 'Dashboard';

class DashboardPage {
    constructor(page)
    {
        this.page = page;
        this.dashboard_title = page.getByText(' LMS - Learning Management System ');
        this.navigation_bar = page.locator('//mat-toolbar');
        this.navigation_bar_order = page.locator('//mat-toolbar//div//button');

    }
    
    async title(KeyOption){
        const testData = getDataByKeyOption(filepath,sheetName,KeyOption);
        const expectedtitle = testData[0]['expectedValue'];
        const actual_title = await (this.dashboard_title).textContent();
        return {actual_title, expectedtitle} ;
         

    }

    async allignment(){
        const rect = await this.dashboard_title.boundingBox();
        return rect;
    }

    async navbartext(KeyOption){
        // const testData = readExcelFile('tests/TestData/PlayWright_Group2_Data.xlsx', 'Dashboard');
        const excel_Data = getDataByKeyOption(filepath,sheetName,KeyOption);
        const expected_nav_text = excel_Data[1]['expectedValue'];
        const actual_nav_text =  await this.navigation_bar.textContent();
        
       return {actual_nav_text,expected_nav_text};
    }

    async navorder(KeyOption, expectedIndex,actual_order) {
        const excel_Data = getDataByKeyOption(filepath, sheetName, KeyOption);
        const expected_nav_text = excel_Data[expectedIndex]['expectedValue'];
        const actual_nav_order = await this.navigation_bar_order.nth(actual_order).textContent();
        console.log(actual_nav_order)
        return {actual_nav_order, expected_nav_text};
    }

     

    
}
module.exports = { DashboardPage};