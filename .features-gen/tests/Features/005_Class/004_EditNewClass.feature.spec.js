/** Generated from: tests/Features/005_Class/004_EditNewClass.feature */
import { test } from "playwright-bdd";

test.describe("Edit New class", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks on program in dashboard and admin lands on class Page");
  });

  test("Validate row level edit icon", async ({ When, Then }) => {
    await When("Admin clicks on the edit icon");
    await Then("A new pop up with class details appears");
  });

  test("Check disabled  batch name", async ({ When, Then }) => {
    await When("Admin clicks on the edit icon");
    await Then("Admin should see batch name field is disabled");
  });

  test("Check disabled class topic", async ({ When, Then }) => {
    await When("Admin clicks on the edit icon");
    await Then("Admin should see class topic field is disabled");
  });

  test.describe("Check if the fields are updated with valid data", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on the Edit Class Popup window");
      await When("Update the fields with valid \"ValidData\" data from excel \"ClassPage\"  and click save");
      await Then("Admin gets message \"class details updated Successfully \" and see the updated values in data table");
    });

  });

  test.describe("Check if the fields are updated with invalid values", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on the Edit Class Popup window");
      await When("Update the fields with invalid \"InValidData\" data from excel \"ClassPage\" and click save");
      await Then("Admin should get Error message");
    });

  });

  test.describe("Check if the mandatory fields are updated with valid data", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on the Edit Class Popup window");
      await When("Update the mandatory fields with valid \"MadatoryValid\" data from excel \"ClassPage\"and click save");
      await Then("Admin gets message \"Class details updated Successfully \" and see the updated values in data table");
    });

  });

  test.describe("Check if the optional fields are updated with valid data", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on the Edit Class Popup window");
      await When("Update the optional fields with valid \"OptionalValid\" data from excel \"ClassPage\" and click save");
      await Then("Admin gets message \"Class details updated Successfully \" and see the updated values in data table");
    });

  });

  test.describe("Validate invalid values in the text fields", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on the Edit Class Popup window");
      await When("Admin enters only numbers or special char in the text fields for \"NumericOrAlphaData\" data from excel \"ClassPage\"");
      await Then("Admin should get Error message  Admin gets message \"Class details updated Successfully \" and see the updated values in data table");
    });

  });

  test("Validate Cancel button on Edit popup", async ({ Given, When, Then }) => {
    await Given("Admin is on the Edit Class Popup window");
    await When("Admin clicks Cancel button on edit popup");
    await Then("Admin can see the class details popup disappears and can see nothing changed for particular Class");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/005_Class/004_EditNewClass.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validate row level edit icon": {"pickleLocation":"8:1"},
  "Check disabled  batch name": {"pickleLocation":"12:1"},
  "Check disabled class topic": {"pickleLocation":"16:1"},
  "Check if the fields are updated with valid data|Example #1": {"pickleLocation":"27:1"},
  "Check if the fields are updated with invalid values|Example #1": {"pickleLocation":"36:1"},
  "Check if the mandatory fields are updated with valid data|Example #1": {"pickleLocation":"45:1"},
  "Check if the optional fields are updated with valid data|Example #1": {"pickleLocation":"54:1"},
  "Validate invalid values in the text fields|Example #1": {"pickleLocation":"63:1"},
  "Validate Cancel button on Edit popup": {"pickleLocation":"65:1"},
};