/** Generated from: tests/Features/005_Class/003_AddNewClassPopup.feature */
import { test } from "playwright-bdd";

test.describe("Add New Class popup", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is on the Manage class page after login");
  });

  test.describe("Admin is on the Manage Class page after login", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on the Class Popup window");
      await When("Admin enters mandatory fields in the form and clicks on save button from \"validInput\" and \"Class\"");
      await Then("Admin gets message Class added Successfully");
    });

  });

  test("Check no classes value added when selecting class dates", async ({ Given, When, Then }) => {
    await Given("Admin is on the Class Popup window");
    await When("Admin selects class date in date picker");
    await Then("Admin should see no of class value is added automatically");
  });

  test("Check weekend dates are disabled in calender", async ({ Given, When, Then }) => {
    await Given("Admin is on the Class Popup window");
    await When("Admin clicks date picker");
    await Then("Admin should see weekends dates are disabled to select");
  });

  test("Check if class is created when only optional fields are entered with valid data", async ({ Given, When, Then }) => {
    await Given("Admin is on the Class Popup window");
    await When("Admin skips to add value in mandatory field and enter only the optional field");
    await Then("Admin should see error message below the test field and the field will be highlighed in red color");
  });

  test("Empty form submission", async ({ Given, When, Then }) => {
    await Given("Admin is on the Class Popup window");
    await When("Admin clicks on save button without entering data");
    await Then("class wont be created and Admin gets error message");
  });

  test("Validate Cancel/Close(X) icon on class Details form", async ({ Given, When, Then }) => {
    await Given("Admin is on the Class Popup window");
    await When("Admin clicks Cancel/Close(X) Icon on Admin Details form");
    await Then("Class Details popup window should be closed without saving");
  });

  test.describe.only("Validate Save button on class Details form", () => {

    test("Example #1", { tag: ["@only"] }, async ({ Given, When, Then }) => {
      await Given("Admin is on the Class Popup window");
      await When("Admin enters mandatory fields in the form and clicks on save button from \"validInput\" and \"Class\"");
      await Then("Admin gets message Class added Successfully");
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/005_Class/003_AddNewClassPopup.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Admin is on the Manage Class page after login|Example #1": {"pickleLocation":"13:1"},
  "Check no classes value added when selecting class dates": {"pickleLocation":"16:1"},
  "Check weekend dates are disabled in calender": {"pickleLocation":"22:1"},
  "Check if class is created when only optional fields are entered with valid data": {"pickleLocation":"27:1"},
  "Empty form submission": {"pickleLocation":"39:1"},
  "Validate Cancel/Close(X) icon on class Details form": {"pickleLocation":"44:1"},
  "Validate Save button on class Details form|Example #1": {"pickleLocation":"56:1","tags":["@only"]},
};