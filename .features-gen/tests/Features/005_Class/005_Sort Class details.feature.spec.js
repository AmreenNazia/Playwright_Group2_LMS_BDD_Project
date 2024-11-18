/** Generated from: tests\Features\005_Class\005_Sort Class details.feature */
import { test } from "playwright-bdd";

test.describe("Sort Class details", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks on program in dashboard and admin lands on class Page");
  });

  test("Sort Class by Batch name", async ({ When, Then }) => {
    await When("Admin clicks on the Batchname sort icon");
    await Then("Admin should see Class details are sorted by Batch Name");
  });

  test("Sort Class by Class topic", async ({ When, Then }) => {
    await When("Admin clicks on the Class topic sort icon");
    await Then("Admin should see Class details are sorted by Class Topic");
  });

  test("Sort Class by Class Descreption", async ({ When, Then }) => {
    await When("Admin clicks on the Class descreption  sort icon");
    await Then("Admin should see Class details are sorted by Class Description");
  });

  test("Sort Class by Status", async ({ When, Then }) => {
    await When("Admin clicks on the Status sort icon");
    await Then("Admin should see Class details are sorted by Status");
  });

  test("Sort Class by Class date", async ({ When, Then }) => {
    await When("Admin clicks on the Class Date sort icon");
    await Then("Admin should see Class details are sorted by Class Date");
  });

  test("Sort Class by staff name", async ({ When, Then }) => {
    await When("Admin clicks on the Staff Name sort icon");
    await Then("Admin should see Class details are sorted by Staff name");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\005_Class\\005_Sort Class details.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Sort Class by Batch name": {"pickleLocation":"9:1"},
  "Sort Class by Class topic": {"pickleLocation":"13:1"},
  "Sort Class by Class Descreption": {"pickleLocation":"17:1"},
  "Sort Class by Status": {"pickleLocation":"21:1"},
  "Sort Class by Class date": {"pickleLocation":"25:1"},
  "Sort Class by staff name": {"pickleLocation":"30:1"},
};