/** Generated from: tests/Features/003_Program/004_AddNewProgram.feature */
import { test } from "playwright-bdd";

test.describe("Verify add New Program", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is on program module after reaching dashboard");
  });

  test("Verify add New Program", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks on New Program under the Program menu bar");
    await Then("Admin should see pop up window for program details");
  });

  test("Verify title of the pop up window", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks on New Program under the Program menu bar");
    await Then("Admin should see window title as \"Program Details\"");
  });

  test("Verify mandatory fields with red \"*\" mark", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks on New Program under the Program menu bar");
    await Then("Admin should see red \"*\" mark beside mandatory field \"Name\"");
  });

  test("Verify empty form submission", async ({ Given, When, Then }) => {
    await Given("Admin is on Program details form");
    await When("Admin clicks save button without entering mandatory");
    await Then("Admin gets message field is required");
  });

  test("Verify cancel button", async ({ Given, When, Then }) => {
    await Given("Admin is on Program details form");
    await When("Admin clicks Cancel button");
    await Then("Admin can see Program Details form disappears");
  });

  test.describe("Verify enter program name", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on Program details form");
      await When("Admin enters the Name in the text box from \"validatetextbox\" and \"Program\"");
      await Then("Admin can see the text entered");
    });

  });

  test.describe("Verify enter description", () => {});

  test("Verify select Status", async ({ Given, When, Then }) => {
    await Given("Admin is on Program details form");
    await When("Admin selects the status of the program by clicking on the radio button \"(Active/InActive)\"");
    await Then("Admin can see 'Active/Inactive' status selected");
  });

  test.describe("Verify Admin is able to save the program details", () => {});

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/003_Program/004_AddNewProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify add New Program": {"pickleLocation":"6:1"},
  "Verify title of the pop up window": {"pickleLocation":"11:1"},
  "Verify mandatory fields with red \"*\" mark": {"pickleLocation":"16:1"},
  "Verify empty form submission": {"pickleLocation":"22:1"},
  "Verify cancel button": {"pickleLocation":"28:1"},
  "Verify enter program name|Example #1": {"pickleLocation":"40:1"},
  "Verify select Status": {"pickleLocation":"50:1"},
};