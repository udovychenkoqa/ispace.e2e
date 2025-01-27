
# End-to-End Tests for iSpace Website (TS + Playwright)

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
- [Used by](#used-by)
- [Setup and Usage](#setup-and-usage)

</details>

---

## About

iSpace is a pet project designed for end-to-end (E2E) testing using TypeScript and Playwright. This repository includes a suite of automated tests aimed at validating the most critical user workflows on the [iSpace website](https://ispace.ua/ua/).

---

### Used by
#### [Fixtures](https://playwright.dev/docs/test-fixtures#introduction)
Fixtures — used to establish the environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. Cleanup after each test

#### [Parameterize tests](https://playwright.dev/docs/test-parameterize#parameterized-tests)
Parameterize tests are used to run the same test logic multiple times with different input values. This approach enhances the efficiency, maintainability, and comprehensiveness of testing by reducing code duplication and ensuring broader test coverage.

#### [POM](https://playwright.dev/docs/pom)
Page objects simplify authoring by creating a higher-level API which suits app and simplify maintenance by capturing element selectors in one place and create reusable code to avoid repetition.

#### Compositions for working with complex Page objects

#### [globalSetup](https://playwright.dev/docs/test-global-setup-teardown#option-2-configure-globalsetup-and-globalteardown)
Global setup in my project authenticates once and reuses authentication state in tests.

#### [Console message tests](https://playwright.dev/docs/api/class-consolemessage)
If a console message is recorded on the test page, there will be a corresponding event in the Playwright context that I will check 

#### [Decorator @step](https://playwright.dev/docs/api/class-test#test-step)
Each call to the decorated method will show up as a step in the report.

#### [Configured ESLint config](https://eslint.org/docs/latest/use/configure/)

#### [Configured tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

#### [Configured playwright config](https://playwright.dev/docs/test-configuration)

---
## Setup and Usage

### How to Run Tests

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd <project_directory>
   ```

3. **Install Dependencies**
   Use the following command to install all required dependencies:
   ```bash
   npm ci
   ```

4. **Install Playwright Browsers**
   Run the following command to download the necessary browser binaries:
   ```bash
   npx playwright install
   ```

5. **Run Tests**
   Execute the test suite using:
   ```bash
   npx playwright test
   ```


