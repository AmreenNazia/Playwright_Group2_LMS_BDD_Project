const {LoginPage} = require('./LoginPage');
const { DashboardPage} = require('./DashboardPage');
const { ProgramPage } = require('./ProgramPage');
const { ReusablePage } = require('./ReusablePage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardpage = new DashboardPage(this.page);
    this.program = new ProgramPage(this.page);
    this.reusablepage = new ReusablePage(this.page);
}

getLoginPage()
{
    return this.loginPage;
}
getDashboardPage()
{
    return this.dashboardpage;
}
getProgramPage(){
    return this.program;
}
getReusablePage(){
    return this.reusablepage;
}
}

module.exports = {POManager};