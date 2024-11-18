/** Generated from: tests\Features\005_Class\003_AddNewClassPopup.feature */
import { test } from "playwright-bdd";

test.describe.only("Add New Class popup", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is on the Manage class page after login");
  });

  test.describe("Admin is on the Manage Class page after login", () => {

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
  $uri: ({}, use) => use("tests\\Features\\005_Class\\003_AddNewClassPopup.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Admin is on the Manage Class page after login|Example #1": {"pickleLocation":"12:1","tags":["@only"]},
};