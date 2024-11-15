const { ReusablePage } = require('./ReusablePage');
const { TIMEOUT } = require('dns');
const { getDataByKeyOption } = require('../Utilities/ExcelUtils'); 
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
     
}
module.exports = {ClassPage}