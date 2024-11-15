/** Generated from: tests\Features\003_Program\008_SortingProgram.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program - Sorting Program", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks on program in dashboard and admin lands on Manage program Page");
  });

  test("Verify sorting of  Program name in Ascending order/Descending order", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks on Arrow next to programName");
    await Then("Admin See the Program Name is sorted in Ascending order/Descending order");
  });

  test("Verify sorting of  Program Description in  Ascending order/Descending order", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks on Arrow next to Program Description");
    await Then("Admin See the program Description is sorted in Ascending order/Descending order");
  });

  test("Verify sorting of Program status in Ascending order/Descending order", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks on Arrow next to Program status");
    await Then("Admin See the  Program Status is sorted in Ascending order/Descending order");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\003_Program\\008_SortingProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify sorting of  Program name in Ascending order/Descending order": {"pickleLocation":"8:1"},
  "Verify sorting of  Program Description in  Ascending order/Descending order": {"pickleLocation":"13:1"},
  "Verify sorting of Program status in Ascending order/Descending order": {"pickleLocation":"18:1"},
};