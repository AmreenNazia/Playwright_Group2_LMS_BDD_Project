/** Generated from: tests/Features/003_Program/002_MenuBar.feature */
import { test } from "playwright-bdd";

test.describe("Menu Bar", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is logged in to LMS Portal");
  });

  test("Verify Logout displayed in menu bar", async ({ Given, When, Then }) => {
    await Given("Admin is on dashboard page after Login");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see Logout in menu bar");
  });

  test("Verify heading in menu bar", async ({ Given, When, Then }) => {
    await Given("Admin is on dashboard page after Login");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see the heading \" LMS - Learning Management System \"");
  });

  test("Verify other module's name displayed in menu bar", async ({ Given, When, Then }) => {
    await Given("Admin is on dashboard page after Login");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see the module names as in order \"Home Program Batch Class Admin Assignment Attendance\"");
  });

  test("Verify sub menu displayed in program menu bar", async ({ Given, When, Then }) => {
    await Given("Admin is on program page");
    await When("Admin clicks Program on navigation bar");
    await Then("Admin should see sub menu in menu bar as \"Add New Program\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/003_Program/002_MenuBar.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Logout displayed in menu bar": {"pickleLocation":"5:1"},
  "Verify heading in menu bar": {"pickleLocation":"10:1"},
  "Verify other module's name displayed in menu bar": {"pickleLocation":"15:1"},
  "Verify sub menu displayed in program menu bar": {"pickleLocation":"20:1"},
};