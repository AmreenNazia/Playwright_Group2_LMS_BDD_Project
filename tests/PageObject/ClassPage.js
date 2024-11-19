const { ReusablePage } = require('./ReusablePage');
const { TIMEOUT } = require('dns');
const { getDataByKeyOption } = require('../Utilities/ExcelUtils'); 
const { expect } = require('allure-playwright');
const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
 
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
          this.overlayer = page.locator('.cdk-overlay-backdrop');
        this.clickNoofClasses = page.getByText('No of Classes');
        this.editIcon = page.locator('//td//button[@icon = "pi pi-pencil"]');
        this.editPopUpWindow = page.getByText('Class Details');
        this.closeIcon = page.locator('//span[@ng-reflect-ng-class = "pi pi-times"]');
        this.EditIcon = page.locator('//tbody//tr[1]//button[@ng-reflect-icon="pi pi-pencil"]')
        this.batchNameField = page.locator('//p-dropdown[@id = "batchName"]');
        this.noOfClassesField = page.locator('//input[@id = "classNo"]')
        this.classTopicField = page.locator('#classTopic')
        this.search_text = page.getByPlaceholder('Search...');
        this.staffNameField = page.locator('#staffId');
        this.staffNameClearIcom = page.locator('//p-dropdown[@placeholder="Select a Staff Name"]//i')
        this.dropDownList = page.locator('//div[@role="button" and @aria-expanded="false"]')
        this.list = page.locator('//li[@aria-label = "Getha Takur"]')
        this.comments = page.locator('#classComments')
        this.classDescription = page.locator('#classDescription');
        this.classNotes = page.locator('#classNotes');
        this.classRecordings = page.locator('#classRecordingPath');
        this.calssDesc_Specific = page.locator('//tbody//tr//td[4] ')
        this.errorMessage = page.locator('.p-invalid ng-star-inserted')
        this.cancelButton = page.getByText('Cancel');
        this.classTopic_Specific = page.locator('//tbody/tr//td[3]')
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
         
        for (let i = 0; i < date_count-1; i++) {
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
        expect (await this.noOfClassesField).toHaveAttribute('ng-reflect-model', date_count-1)
        await this.status_Active.click();
        await this.save.click();
        
    }

    async getsuccessmessage(){
        return this.saveSuccesMessage;
    }

    async editPopupAssertion(){
    //    expect( await this.editPopUpWindow).textContent('Class Details');
       const text = await this.editPopUpWindow.textContent();
    //    console.log('The output is' +text)
       return text;
    }
    async checkEditIcon(){
         const count = await this.editIcon.count();
        for(let i = 0; i < count; i++){
            let k = 0;
            if(i === 0){
            await this.overlayer.click();
            }
                await this.editIcon.nth(i).click();
                const value = await this.editPopupAssertion();
                // console.log('************The edit pop up window is: ' +value)
            if(value === 'Class Details'){
                await this.closeIcon.click();
                k++;
                
            }
            continue;
            
    }
     
}
 async clickEditIcon(){
    await this.overlayer.click();
    await this.EditIcon.click();
 }

 async getBatchNameField(){
    return this.batchNameField;
 }

 async getClassTopicField(){
    return this.classTopicField;
 }

 async validEditClass(Keyoption,Sheetname){
    const testData = getDataByKeyOption(filepath,Sheetname,Keyoption)
    const staffname = testData['staffName'];
    await this.staffNameClearIcom.click();
    await this.staffNameField.click();
    await this.dropDownList.click();
    await this.list.click();
    // await (this. staffNameField).fill(staffname)
    await (this.save).click();
    return staffname;
 }

 async optionalFieldsEdit(KeyOption,SheetName){
    const testData = getDataByKeyOption(filepath,SheetName,KeyOption)
    let value_comments = (testData['Comments']).toString();
    let value_ClassDesc = (testData['ClassDesc']).toString();;
    let Notes_Value = (testData['Notes']).toString();;
    let Recording_Value = (testData['Recording']).toString();;
    console.log(value_comments,value_ClassDesc,Notes_Value,Recording_Value)
    await (this.comments).fill(value_comments);
    await (this.classDescription).fill(value_ClassDesc);
    await (this.classNotes).fill(Notes_Value);
    await (this.classRecordings).fill(Recording_Value);
    await (this.save).click();
    return value_ClassDesc;
 }
async editAssertion(KeyOption,SheetName){
    const testData = getDataByKeyOption(filepath,SheetName,KeyOption)
    let value_comments = (testData['Comments']).toString();
    let value_ClassDesc = (testData['ClassDesc']).toString();;
    let Notes_Value = (testData['Notes']).toString();;
    let Recording_Value = (testData['Recording']).toString();;
    await this.search_text.fill(value_ClassDesc);
    expect (await this.calssDesc_Specific.textContent()).toEqual(value_ClassDesc);
    
}
 async searchClass(txt){
    await this.overlayer.click();
    await this.search_text.fill(txt);
    await this.EditIcon.click();
 }

 async getErrorMessage(){
    return this.errorMessage;
    
 }

 async clickCancel(){
    await this.cancelButton.click();
 }

 async getclassTopic_Specific(){
    const txt = await (this.classTopic_Specific).textContent();
    console.log('******Actual value ' , txt)
    return txt;
 }
 
}
module.exports = {ClassPage}