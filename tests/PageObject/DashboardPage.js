const { expect } = require('@playwright/test');
const { getDataByKeyOption } = require('../Utilities/ExcelUtils'); 
const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
const sheetName = 'Dashboard';

class DashboardPage {
    constructor(page)
    {
        this.page = page;
        this.title_allignment = page.locator('//span[text()=" LMS - Learning Management System "]');
        this.dashboard_title = page.getByText(' LMS - Learning Management System ');
        this.navigation_bar = page.locator('//mat-toolbar');
        this.navigation_bar_order = page.locator('//mat-toolbar//div//button');

    }
    
    async title(KeyOption){
        
        const testData = getDataByKeyOption(filepath,sheetName,KeyOption);
        const expectedtitle = testData['expectedValue'];
        console.log(expectedtitle);
        const actual_title = await this.dashboard_title.textContent();
        console.log(actual_title)
        return {actual_title,expectedtitle};
         

    }

    async allignment() {
        const pageTitle = await this.page.title();
        expect(pageTitle).toBe('LMS');
    
        // Ensure the title element is visible and get its bounding box
        await expect(this.title_allignment).toBeVisible();
        const boundingBox = await this.title_allignment.boundingBox();
        expect(boundingBox).not.toBeNull();
    
        if (boundingBox) {
            expect(boundingBox.x).toBeLessThanOrEqual(20); // Adjust as needed for the top-left alignment check
            expect(boundingBox.y).toBeLessThanOrEqual(20); // Adjust as needed
        }
    }
    
         
    

    async navbartext(KeyOption){
        // const testData = readExcelFile('tests/TestData/PlayWright_Group2_Data.xlsx', 'Dashboard');
        const excel_Data = getDataByKeyOption(filepath,sheetName,KeyOption);
        const expected_nav_text = excel_Data['expectedValue'];
        const actual_nav_text =  await this.navigation_bar.textContent();
        
       return {actual_nav_text,expected_nav_text};
    }

    async navorder(KeyOption) {
        const excel_Data = getDataByKeyOption(filepath, sheetName, KeyOption);
        const expected_nav_text = excel_Data['expectedValue'];
        const nth_value = excel_Data['nth'];
        const actual_nav_order = await this.navigation_bar_order.nth(nth_value).textContent();
        console.log(actual_nav_order)
        return {actual_nav_order, expected_nav_text};
    }

     

    
}
module.exports = { DashboardPage};