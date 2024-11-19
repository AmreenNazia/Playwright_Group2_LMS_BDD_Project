/** Generated from: tests/Features/005_Class/001_ClassPagination.feature */
import { test } from "playwright-bdd";

test.describe("Class Page Validation", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is on the Dashboard page after login");
  });

  test("Validating the class manage page", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should land on the \" Manage Class\" page");
  });

  test("Validating the Title in the Manage class page", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the \" LMS - Learning Management System \" Title");
  });

  test("Validating the Header in the Manage class page", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the \" Manage Class\" Header");
  });

  test("Validating Search bar in class page", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the Searchbar in Manage class page");
  });

  test("Validating the data table headers in the class page", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the datatable heading like Batchname,class topic,class descrption,status,class Date,staff name,Edit/Delete");
  });

  test("Validating the text and pagination icon in the classpage", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the  showing x to y of  z entries and enabled pagination controls under the data table");
  });

  test("Validate the sort icon of all the field in datatable", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Validate the sort icon of all the field in datatable");
  });

  test("Validating the Delete button under the Manage class", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Validating the Delete button under the Manage class");
  });

  test("Validate the total no of classes in manage class page", async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see Total no of classes in below of the data table.");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/005_Class/001_ClassPagination.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validating the class manage page": {"pickleLocation":"5:1"},
  "Validating the Title in the Manage class page": {"pickleLocation":"11:1"},
  "Validating the Header in the Manage class page": {"pickleLocation":"17:1"},
  "Validating Search bar in class page": {"pickleLocation":"22:1"},
  "Validating the data table headers in the class page": {"pickleLocation":"27:1"},
  "Validating the text and pagination icon in the classpage": {"pickleLocation":"32:1"},
  "Validate the sort icon of all the field in datatable": {"pickleLocation":"37:1"},
  "Validating the Delete button under the Manage class": {"pickleLocation":"42:1"},
  "Validate the total no of classes in manage class page": {"pickleLocation":"47:1"},
};