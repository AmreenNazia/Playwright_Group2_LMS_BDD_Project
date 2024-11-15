const { expect } = require('@playwright/test');
const exp = require('constants');
const { ReusablePage } = require('./ReusablePage');
const { TIMEOUT } = require('dns');
require('dotenv').config();

class PaginationAndSorting {
    constructor(page){
        this.page = page;
        this.nextLink = page.locator('//span[@class ="p-paginator-icon pi pi-angle-right"]');
        this.lastLink = page.locator('//span[@class ="p-paginator-icon pi pi-angle-double-right"]');
        this.table = page.locator('.p-datatable-wrapper ng-star-inserted');
        this.ProgramNameCol =  page.locator('//th[2]')
        this.cells = page.locator('//tr//td[2]');
        this.overlayer = page.locator('.cdk-overlay-backdrop');
        this.paginationFooter = page.locator('//span[@class = "p-paginator-pages ng-star-inserted"]//button');
        this.ProgramDescCol =  page.locator('//th[3]')
        this.ProgramStatus =  page.locator('//th[4]')
        this.ProgDes_cells = page.locator('//tr//td[3]');
        this.ProgStatus_cells = page.locator('//tr//td[4]');
        this.previousLink = page.locator('//span[@class ="p-paginator-icon pi pi-angle-left"]');
        this.firstLink = page.locator('//span[@class ="p-paginator-icon pi pi-angle-double-left"]')
    }
    
    async sortingAscending(ele){
        let originalData = await (ele).allTextContents();
        console.log('Ascending Order actual List: ' +originalData)
        let expectedList = originalData.slice().sort((a, b) => a.localeCompare(b));
        let sortedList = await (ele).allTextContents();
        console.log('Ascending Order expected: ' +expectedList)
        expect(sortedList).toEqual(expectedList);
    }

    async sortingDescending(ele){
        // await this.ProgramNameCol.click();
        const originalData = await (ele).allTextContents();
        console.log('Ascending Order ' +originalData)
        const expectedList = originalData.sort((a,b) => b.localeCompare(a));
        const sortedList = await (ele).allTextContents();
        console.log('Descending Order' +expectedList)
        expect(sortedList).toEqual(expectedList);
    }

    async clickSortIcon(ele){
        await this.overlayer.click();
        await ele.click();
    }

    async getOverLayer(){
        return this.overlayer;
    }

    async dblClickSortIcon(ele){
        await this.overlayer.click();
        await ele.dblclick();
    }

    async getProgramNameCol(){
        return this.ProgramNameCol;
    }

    async getProgramDescCol(){
        return this.ProgramDescCol;
    }

    async getProgramStatus(){
        return this.ProgramStatus;
    }

    async getCells(){
        return this.cells;
    }

    async getProgDes_cells(){
        return this.ProgDes_cells;
    }
    
    async click(ele){
        await ele.click();;
    }

    async getNextLink(){
        return this.nextLink;
    }

    async getProgStatus_cells(){
        return this.ProgStatus_cells;
    }

    async getLastLink(){
        return this.lastLink;
    }

    async getPreviousLink(){
        return this.previousLink;
    }

    async getFirstLink(){
        return this.firstLink;
    }

    async pagination_Asc_Sorting(ele){
        const count = await this.paginationFooter.count();
        console.log('Number of pages' + count)
        for (let i = 0; i <count; i++){
            if(i>0){
                this.sortingAscending(ele);
                await this.paginationFooter.nth(i).click();
            }
        }
    }
    async pagination_Des_Sorting(ele){
        const count = await this.paginationFooter.count();
        for (let i = 0; i <count; i++){
            if(i>0){
                this.sortingDescending(ele);
                await this.paginationFooter.nth(i).click();
            }
        }
    }

}
module.exports ={PaginationAndSorting}