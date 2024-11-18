/** Generated from: tests\Features\003_Program\004_AddNewProgram.feature */
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

  test.describe("Verify enter description", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on Program details form");
      await When("Admin enters the Description in text box from \"validatetextbox\" and \"Program\"");
      await Then("Admin can see the text entered in description box");
    });

  });

  test("Verify select Status", async ({ Given, When, Then }) => {
    await Given("Admin is on Program details form");
    await When("Admin selects the status of the program by clicking on the radio button \"(Active/InActive)\"");
    await Then("Admin can see 'Active/Inactive' status selected");
  });

  test.describe("Verify Admin is able to save the program details", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on Program details form");
      await When("Admin enter valid details for mandatory fields from \"validInput\" and \"Program\" and Click on save button");
      await Then("Admin gets a message 'Successful Program created'");
    });

  });

  test("Verify cancel program details", async ({ Given, When, Then }) => {
    await Given("Admin is on Program details form");
    await When("Admin clicks Cancel button");
    await Then("Admin can see Program Details form disappears");
  });

  test.describe("Verify added Program is created", () => {

    test("Example #1", async ({ Given, When, Then }) => {
      await Given("Admin is on Program module");
      await When("Admin searches with newly created Program Name sent from \"validInput\" and \"Program\"");
      await Then("Records of the newly created  Program Name is displayed and match the data entered from \"validInput\" and \"Program\"");
    });

  });

  test("Verify close window with \"X\"", async ({ Given, When, Then }) => {
    await Given("Admin is on Program details form");
    await When("Admin Click on X button");
    await Then("Admin can see Program Details form disappears");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\003_Program\\004_AddNewProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify add New Program": {"pickleLocation":"6:5"},
  "Verify title of the pop up window": {"pickleLocation":"11:5"},
  "Verify mandatory fields with red \"*\" mark": {"pickleLocation":"16:5"},
  "Verify empty form submission": {"pickleLocation":"22:5"},
  "Verify cancel button": {"pickleLocation":"28:5"},
  "Verify enter program name|Example #1": {"pickleLocation":"40:13"},
  "Verify enter description|Example #1": {"pickleLocation":"49:13"},
  "Verify select Status": {"pickleLocation":"51:5"},
  "Verify Admin is able to save the program details|Example #1": {"pickleLocation":"62:13"},
  "Verify cancel program details": {"pickleLocation":"64:5"},
  "Verify added Program is created|Example #1": {"pickleLocation":"75:13"},
  "Verify close window with \"X\"": {"pickleLocation":"77:5"},
};