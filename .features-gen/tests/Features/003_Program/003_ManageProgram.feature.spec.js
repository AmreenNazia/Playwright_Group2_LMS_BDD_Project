/** Generated from: tests\Features\003_Program\003_ManageProgram.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program Page validation", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is logged in to LMS Portal");
  });

  test("Verify heading in manage program", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see heading \" Manage Program\"");
  });

  test("Verify view details of programs", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should able to see Program name, description, and status for each program");
  });

  test("Verify the Multiple Delete button state", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see a Delete button in left top is disabled");
  });

  test("Verify the Search button", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see Search bar with text as \"Search...\"");
  });

  test("Verify column header name of data table", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit/Delete");
  });

  test("Verify checkbox default state beside Program Name column header", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see checkbox default state as unchecked beside Program Name column as header");
  });

  test("Verify checkboxes default state beside each Program names in the data table", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see check box default state as unchecked on the left side in all rows against program name");
  });

  test("Verify Sort icon in manage program", async ({ Given, When, Then }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see the sort arrow icon beside to each column header except Edit and Delete");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\003_Program\\003_ManageProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify heading in manage program": {"pickleLocation":"8:1"},
  "Verify view details of programs": {"pickleLocation":"13:1"},
  "Verify the Multiple Delete button state": {"pickleLocation":"18:1"},
  "Verify the Search button": {"pickleLocation":"24:1"},
  "Verify column header name of data table": {"pickleLocation":"29:1"},
  "Verify checkbox default state beside Program Name column header": {"pickleLocation":"35:1"},
  "Verify checkboxes default state beside each Program names in the data table": {"pickleLocation":"40:1"},
  "Verify Sort icon in manage program": {"pickleLocation":"45:1"},
};