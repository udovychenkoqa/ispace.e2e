import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    /* Run tests in files in parallel */
    fullyParallel: true,
    timeout: 5 * 60 * 1000,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 1: 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 4 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ["html"],
        ["list"]
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: "https://ispace.ua/ua/",
        actionTimeout: 25 * 1000,
        screenshot: "only-on-failure",
        video: "retain-on-failure",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry"
    },
    expect: {
        timeout: 30 * 1000
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: "setup",
            testMatch: /global\.setup\.ts/,
            use: {
                viewport: { width: 1440, height: 1200 }
            }
        },
        {
            name: "iSpace",
            testDir: "./tests",
            testMatch: "**.spec.**",
            use: { ...devices["Desktop Chrome"],
                channel: "chromium",
                storageState: "./data/auth/authFile.json",
                viewport: { width: 1440, height: 1200 }
            },
            dependencies: ["setup"]

        },
        {
            name: "iSpace-api",
            testDir: "./tests",
            testMatch: "**.api.**",
            use: {
                baseURL: "https://ispace.ua"
            }
        }

        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    ]

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
