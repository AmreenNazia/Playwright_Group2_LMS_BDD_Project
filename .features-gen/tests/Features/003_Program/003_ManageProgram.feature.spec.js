/** Generated from: tests\Features\003_Program\003_ManageProgram.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program Page validation", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is logged in to LMS Portal");
  });

  test("Verify heading in manage program", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see heading \" Manage Program\"");
  });

  test("Verify view details of programs", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should able to see Program name, description, and status for each program");
  });

  test("Verify the Multiple Delete button state", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see a Delete button in left top is disabled");
  });

  test("Verify the Search button", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see Search bar with text as \"Search...\"");
  });

  test("Verify column header name of data table", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit/Delete");
  });

  test("Verify checkbox default state beside Program Name column header", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see checkbox default state as unchecked beside Program Name column as header");
  });

  test("Verify checkboxes default state beside each Program names in the data table", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see check box default state as unchecked on the left side in all rows against program name");
  });

  test("Verify Sort icon in manage program", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see the sort arrow icon beside to each column header except Edit and Delete");
  });

  test("Verify edit and delete icon in manage program", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see the Edit and Delete buttons on each row of the data table");
  });

  test("Verify pagination icons below data table in manage program", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see the text as \"Showing x to y of z entries\" along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records");
  });

  test("Verify footer message in manage program", async ({ When, Then }) => {
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should see the footer as In total there are z programs.");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\003_Program\\003_ManageProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify heading in manage program": {"pickleLocation":"8:5"},
  "Verify view details of programs": {"pickleLocation":"12:5"},
  "Verify the Multiple Delete button state": {"pickleLocation":"16:5"},
  "Verify the Search button": {"pickleLocation":"21:5"},
  "Verify column header name of data table": {"pickleLocation":"25:5"},
  "Verify checkbox default state beside Program Name column header": {"pickleLocation":"30:5"},
  "Verify checkboxes default state beside each Program names in the data table": {"pickleLocation":"34:5"},
  "Verify Sort icon in manage program": {"pickleLocation":"38:5"},
  "Verify edit and delete icon in manage program": {"pickleLocation":"42:5"},
  "Verify pagination icons below data table in manage program": {"pickleLocation":"46:5"},
  "Verify footer message in manage program": {"pickleLocation":"51:5"},
};