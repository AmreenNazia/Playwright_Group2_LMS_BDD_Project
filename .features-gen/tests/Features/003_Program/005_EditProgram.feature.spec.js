/** Generated from: tests/Features/003_Program/005_EditProgram.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program - Edit Program", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
  });

  test("Verify Edit option", async ({ When, Then }) => {
    await When("Admin clicks on Edit option for particular program");
    await Then("Admin lands on Program details form");
  });

  test("Verify title of the pop up window", async ({ When, Then }) => {
    await When("Admin clicks on Edit option for particular program");
    await Then("Admin should see window title as \"Program Details\"");
  });

  test("Verify mandatory fields with red \"*\" mark", async ({ When, Then }) => {
    await When("Admin clicks on Edit option for particular program");
    await Then("Admin should see red aestrik mark beside mandatory field \"Name\"");
  });

  test.describe("Verify edit Program Name", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin edits the program name and click on save button from \"validatetextbox\" and \"Program\"");
      await Then("Updated program name is seen by the Admin");
    });

  });

  test.describe("Verify edit Description", () => {

    test("Example #1", async ({ When, Then }) => {
      await When("Admin edits the description text and click on save button from \"validatetextbox\" and \"Program\"");
      await Then("Admin can see the description is updated");
    });

  });

  test("Verify edit Status", async ({ When, Then }) => {
    await When("Admin can change the status of the program and click on save button");
    await Then("Status updated can be viewed by the Admin");
  });

  test("Verify Admin is able to click Save", async ({ When, Then }) => {
    await When("Admin click on save button");
    await Then("Admin can see the updated program details");
  });

  test("Verify Admin is able to click Cancel", async ({ When, Then }) => {
    await When("Admin click on cancel button");
    await Then("Admin can see the Program details form disappears");
  });

  test("Verify edited Program details", async ({ When, Then }) => {
    await When("Admin searches with newly updated \"Program Name\"");
    await Then("Admin verifies that the details are correctly updated.");
  });

  test("Verify close the window with \"X\"", async ({ When, Then }) => {
    await When("Admin Click on \"X\" button");
    await Then("Admin can see program details form disappear");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/003_Program/005_EditProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Edit option": {"pickleLocation":"9:1"},
  "Verify title of the pop up window": {"pickleLocation":"13:1"},
  "Verify mandatory fields with red \"*\" mark": {"pickleLocation":"18:1"},
  "Verify edit Program Name|Example #1": {"pickleLocation":"28:1"},
  "Verify edit Description|Example #1": {"pickleLocation":"36:1"},
  "Verify edit Status": {"pickleLocation":"38:1"},
  "Verify Admin is able to click Save": {"pickleLocation":"43:1"},
  "Verify Admin is able to click Cancel": {"pickleLocation":"48:1"},
  "Verify edited Program details": {"pickleLocation":"52:1"},
  "Verify close the window with \"X\"": {"pickleLocation":"56:1"},
};