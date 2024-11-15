/** Generated from: tests/Features/003_Program/006_DeleteProgram.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program - Delete Program", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks on program in dashboard and admin lands on Manage program Page");
  });

  test("Verify delete feature", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks on delete button for a program");
    await Then("Admin will get confirm deletion popup");
  });

  test("Verify Admin is able to click 'Yes'", async ({ Given, When, Then }) => {
    await Given("Admin is on Confirm deletion form");
    await When("Admin clicks on \"Yes\" button");
    await Then("Admin can see 'Successful Program Deleted' message");
  });

  test("Verify Admin is able to deleted program", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin Searches for \"Deleted Program name\"");
    await Then("There should be zero results.");
  });

  test("Verify Admin is able to click 'No'", async ({ Given, When, Then }) => {
    await Given("Admin is on Program Confirm Deletion Page after selecting a program to delete");
    await When("Admin clicks on No button");
    await Then("Admin can see Confirmation form disappears");
  });

  test("Verify Admin is able to close the window with \"X\"", async ({ Given, When, Then }) => {
    await Given("Admin is on Program Confirm Deletion Page after selecting a program to delete");
    await When("Admin Click on X button");
    await Then("Admin can see Confirm Deletion form disappear");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/003_Program/006_DeleteProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify delete feature": {"pickleLocation":"8:1"},
  "Verify Admin is able to click 'Yes'": {"pickleLocation":"14:1"},
  "Verify Admin is able to deleted program": {"pickleLocation":"20:1"},
  "Verify Admin is able to click 'No'": {"pickleLocation":"26:1"},
  "Verify Admin is able to close the window with \"X\"": {"pickleLocation":"32:1"},
};