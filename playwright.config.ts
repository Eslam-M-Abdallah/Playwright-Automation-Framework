import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';
//Import dotenv From dotenv Package To Determine Which Env i Want To Process On It From my Multiples Envs
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config(
  {
    // The File That I Want Playwright To Consider It To Get the Env Varibles From It

    path: process.env.Test_Env ? `./Env-Files/.env.${process.env.Test_Env}` : `./Env-Files/.env.staging`  // You Add The Template Literalture Here To Get tHe Env Name As Dynamic Varible During Run The Test Cases 

  });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // grep : /UI/ , //You Can Set The Grep AS global Configuration To Run Only Tests That Have Specific Tag
  //grepInvert : /Smoke/, // You Can Set The GrepInvert AS global Configuration To Run All Tests Except That Have Specific Tag
  testDir: './tests',
  //globalSetup : './global-setup.ts', // Add The Global Setup Key & Value At The Config File 
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: [["html", { open: 'always' }], ],
  //reporter : [['junit', {outputFile : "Reporter-junit2.xml"}]] ,// Add The Reporter Style 
 // reporter : process.env.CI? "github" : "list" // If You Run The Tests On CI And You Want To Get The Reporter="github"
  //reporter : [["dot"] , ["list"] , ["html" , {open : "always"}]], //Generate multiple Reporters 
  // reporter : "dot" , 
  reporter : [ ['allure-playwright', { outputFolder: '../my-allure-results' }] , ['html']] , 

  //timeout To Change The Waiting Time To Allocate Specific Web Element : By Default It's 30000ms 
  timeout: 25000,


  // It's Used To Change The Waiting Time Of Expected Assertion Result : By Default It's 5000ms
  expect:
  {
    timeout: 10000,
    /* toHaveScreenshot : 
    {
     maxDiffPixelRatio : 0.1 ,
     maxDiffPixels : 50
    } */
  },




  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
    // You Add This Global Key To Use These Options On The API Testing 
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders:
    {
      Accept: "application/json",
      "Content-Type": "application/json", //Any Key Consist Of Two Words Or More Need To Be Between Quotations
      //Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
    }
    //storageState : './playwright/.auth/auth3.json'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      // Here We Add New Dependency Project Will Run Before All The other Projects 
      name: "setup",
      testMatch: 'global.setup.ts'
      // testMatch : /.*\.setup.ts/ // Here If You Want To Add Multiple Files Setup You Can Use The Regular Expression 

    },

    {
      name: 'chromium',
      //dependencies: ["setup"], // Here We Add The Setup Dependency With Every Project 
      use: { ...devices['Desktop Chrome'] } //, storageState: './playwright/.auth/auth4.json' },

    },

    {
      name: 'firefox',
      //dependencies: ["setup"],
      use: { ...devices['Desktop Firefox'] } //, storageState: './playwright/.auth/auth4.json' },
    },

    {
      name: 'webkit',
      //dependencies: ["setup"],
      use: { ...devices['Desktop Safari'] }//, storageState: './playwright/.auth/auth4.json' },
    },
    /*
    {
      name : "andriod" ,
      use : {...devices['Pixel 7']}
    }
      */
    /*
     {
      name: 'Iphone14ProMax',
      use: { ...devices['iPhone 14 Pro Max'] },
     },
    */
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
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
