/** Generated from: tests/Features/003_Program/005_EditProgram.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program - Edit Program", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
  });

  test.describe("Verify Edit option", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin clicks on Edit option for particular program from \"editprogram\" and \"Program\"");
      await Then("Admin lands on Program details form");
    });

  });

  test.describe("Verify title of the pop up window", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin clicks on Edit option for particular program from \"editprogram\" and \"Program\"");
      await Then("Admin should see window title as \"Program Details\"");
    });

  });

  test.describe("Verify mandatory fields with red \"*\" mark", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin clicks on Edit option for particular program from \"editprogram\" and \"Program\"");
      await Then("Admin should see red \"*\" mark beside mandatory field \"Name\"");
    });

  });

  test.describe("Verify edit Program Name", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin edits the program name and click on save button from \"editprogram\" and \"Program\"");
      await Then("Updated program name is seen by the Admin");
    });

  });

  test.describe("Verify edit Description", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin edits the description text and click on save button from \"editprogram\" and \"Program\"");
      await Then("Admin can see the description is updated");
    });

  });

  test.describe("Verify edit Status", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin can change the status of the program from \"editprogram\" and \"Program\" and click on save button");
      await Then("Status updated can be viewed by the Admin");
    });

  });

  test.describe("Verify Admin is able to click Save", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin click on save button of the updated program from \"editprogram\" and \"Program\"");
      await Then("Admin can see the updated program details");
    });

  });

  test.describe("Verify Admin is able to click Cancel", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin click on cancel button of the updated program from \"editprogram\" and \"Program\"");
      await Then("Admin can see the Program details form disappears");
    });

  });

  test.describe("Verify edited Program details", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin searches with newly updated Program Name from \"editprogram\" and \"Program\"");
      await Then("Admin verifies that the details are correctly updated from \"editprogram\" and \"Program\"");
    });

  });

  test.describe("Verify close the window with \"X\"", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin Click on X button of the updated program from \"editprogram\" and \"Program\"");
      await Then("Admin can see Program Details form disappears");
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/003_Program/005_EditProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Edit option|Example #1": {"pickleLocation":"14:1"},
  "Verify title of the pop up window|Example #1": {"pickleLocation":"21:1"},
  "Verify mandatory fields with red \"*\" mark|Example #1": {"pickleLocation":"29:1"},
  "Verify edit Program Name|Example #1": {"pickleLocation":"35:1"},
  "Verify edit Description|Example #1": {"pickleLocation":"43:1"},
  "Verify edit Status|Example #1": {"pickleLocation":"50:1"},
  "Verify Admin is able to click Save|Example #1": {"pickleLocation":"58:1"},
  "Verify Admin is able to click Cancel|Example #1": {"pickleLocation":"66:1"},
  "Verify edited Program details|Example #1": {"pickleLocation":"73:1"},
  "Verify close the window with \"X\"|Example #1": {"pickleLocation":"80:1"},
};