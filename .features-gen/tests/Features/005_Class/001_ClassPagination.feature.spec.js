/** Generated from: tests/Features/005_Class/001_ClassPagination.feature */
import { test } from "playwright-bdd";

test.describe.only("Class Page Validation", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is on the Dashboard page after login");
  });

  test("Validating the class manage page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should land on the \" Manage Class\" page");
  });

  test("Validating the Title in the Manage class page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the \" LMS - Learning Management System \" Title");
  });

  test("Validating the Header in the Manage class page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the \" Manage Class\" Header");
  });

  test("Validating Search bar in class page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the Searchbar in Manage class page");
  });

  test("Validating the data table headers in the class page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the datatable heading like Batchname,class topic,class descrption,status,class Date,staff name,Edit/Delete");
  });

  test("Validating the text and pagination icon in the classpage", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Admin should see the  showing x to y of  z entries and enabled pagination controls under the data table");
  });

  test("Validate the sort icon of all the field in datatable", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Validate the sort icon of all the field in datatable");
  });

  test("Validating the Delete button under the Manage class", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is on the dashboard page after login");
    await When("Admin clicks the Class Navigation bar in the Header");
    await Then("Validating the Delete button under the Manage class");
  });

  test("Validate the total no of classes in manage class page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
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
  "Validating the class manage page": {"pickleLocation":"6:1","tags":["@only"]},
  "Validating the Title in the Manage class page": {"pickleLocation":"12:1","tags":["@only"]},
  "Validating the Header in the Manage class page": {"pickleLocation":"18:1","tags":["@only"]},
  "Validating Search bar in class page": {"pickleLocation":"23:1","tags":["@only"]},
  "Validating the data table headers in the class page": {"pickleLocation":"28:1","tags":["@only"]},
  "Validating the text and pagination icon in the classpage": {"pickleLocation":"33:1","tags":["@only"]},
  "Validate the sort icon of all the field in datatable": {"pickleLocation":"38:1","tags":["@only"]},
  "Validating the Delete button under the Manage class": {"pickleLocation":"43:1","tags":["@only"]},
  "Validate the total no of classes in manage class page": {"pickleLocation":"48:1","tags":["@only"]},
};