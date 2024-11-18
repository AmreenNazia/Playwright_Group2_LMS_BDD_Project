const { ReusablePage } = require('./ReusablePage');
const { TIMEOUT } = require('dns');
const { getDataByKeyOption } = require('../Utilities/ExcelUtils'); 
 
require('dotenv').config();

class ClassPage{
    constructor(page){
        this.page = page;
        this.class_btn = page.getByRole('button', { name: 'Class' });
        this.manage_classtext = page.getByText('Manage Class');
        this.search_text = page.getByPlaceholder('Search...');
        this.classheader = page.locator('//thead//tr');
        this.pagination = page.locator('//span[@class="p-paginator-current ng-star-inserted"]');
        this.addNewClass_btn = page.getByRole('menuitem', { name: 'Add New Class' });
        this.form_inputFields = page.locator('//div[@role="dialog"]//input[@type="text" and not(contains(@class, "p-hidden-accessible")) and not(contains(@class, "ng-tns-"))]')
        this.batchName = page.locator('//p-dropdown[@id="batchName"]//div[@role="button"]');
    this.dropdownlist_batchname = page.locator('//p-dropdownitem');
        this.classTopic = page.locator('//input[@id="classTopic"]');
        this.calendar_btn = page.locator('//p-calendar//button');
        this.date_class= page.locator('//table[contains(@class, "p-datepicker-calendar")]//tbody//span[not(contains(@class, "p-disabled"))]');
        this.dialog_box = page.locator('p-calendar').getByRole('button');  /*click on this box after selecting data*/
        this.staff_Name = page.locator('//p-dropdown[@placeholder="Select a Staff Name"]//div[@role="button"]');
        this.select_Staffname = page.locator('//ul//p-dropdownitem');
        this.status_Active = this.activeRadioButton = page.locator('//p-radiobutton[@ng-reflect-input-id = "Active"]')
        this.save = page.getByRole('button', { name: 'Save'});
        this.saveSuccesMessage= page.getByRole('alert');
        //  this.overlayer = page.locator('.cdk-overlay-backdrop');
        this.clickNoofClasses = page.locator('//div//input[@id="classNo"]');
    }
    async clickClass(){
        return this.class_btn;
    }
    async manageclass(){
        return this.manage_classtext;
    }
    async manageclass_text(){
       const actualtext =  await this.manage_classtext.textContent();
        return actualtext;
    }
    async searchbox(){
        return this.search_text;
    }
    async classHeader(){
        return this.classheader;
    }
    async paginationText(){
        return this.pagination;
    }

    async addNewClass(){
        return this.addNewClass_btn;
    }
    async inputFields(){
       const count_inputFields = await this.form_inputFields.count();
       for(let i = 0; i< count_inputFields; i++)
       {
        await this.form_inputFields.nth(i).isVisible();
       }

       console.log("All input fields are visible")
    }

    async add_NewClass(keyoption,sheetname){
        const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
        const testdata = getDataByKeyOption(filepath,sheetname,keyoption);
        let batchname = testdata['batchName'];
        let classtopic = testdata['classTopic'];
        let staffname = testdata['staffName'];
        await this.classTopic.fill(classtopic);
        await this.batchName.click();

       const listCount =  await this.dropdownlist_batchname.count();
       for(let i = 0; i < listCount; i++)
       {
        const currentElement = this.dropdownlist_batchname.nth(i);
        await currentElement.scrollIntoViewIfNeeded();
        if ((await currentElement.textContent()) === batchname) {
            await currentElement.click();
            break;  
        }
    }
    console.log("Admin select batch name " + batchname);

        
        await this.calendar_btn.click();
        const select_Date = []
        const list_dates = await this.date_class.count();
        for( let i = 0; i< list_dates; i++)
        {
            const date  = await this.date_class.nth(i).textContent();
            select_Date.push(date);
            
        }
        // const chosenDate = select_Date[2];
        const date_count =  select_Date.length;
         console.log(date_count)
         
        for (let i = 0; i < date_count; i++) {
            while(i<=date_count-1){
                const date = await this.date_class.nth(i).textContent();
                await this.date_class.nth(i).click();  
                console.log('Date selected:', date);
                // await this.page.pause();
                break;  
            }
        }
        
        
        await this.staff_Name.click();
        const staff_count = await this.select_Staffname.count();
        for(let i = 0; i< staff_count ; i++)
        {
            if(await this.select_Staffname.nth(i).textContent()=== staffname)
            {
                await this.select_Staffname.nth(i).click();
                break;
            }
        }
        console.log("Selected staff name is "+staffname);
         
        await this.status_Active.click();
        await this.save.click();
        
    }

    async getsuccessmessage(){
        return this.saveSuccesMessage;
    }

    
    
     
}
module.exports = {ClassPage}