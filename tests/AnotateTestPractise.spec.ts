import { test, expect } from "@playwright/test"
// Annotation Is A Way To Add Extra Information To The Test Script 


test("Anotate Test Practise 1", 
    {
        annotation : //Single Annotation 
        {
            type : "Jira Story" , 
            description : "This Is My Jira Story Description " // AS Useful Use For This Annotation Feature You Can Add The Jira Ticket Link Here To Map Between The Jira Stories ANd The Test Scripts 
        }
    } ,async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})

test("Anotate Test Practise 2", 
    {
        annotation : // Multiple Annotations
        [
            {
                type : "Jira Ticket 1" ,
                description : "Jira Ticket 1 Links"
            } ,
            {
                type : "Jira Ticket 2" ,
                description : "Jira Ticket 2 Links"
            }
        ] , 
        tag : "@Test"
    } ,async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})

test.skip("Anotate Test Practise 3", 
    {
        annotation : 
        {
            type : "Skip Reason" ,
            description : "Requirement Changes "
        } ,
        tag : "@Skip"
    } ,async()=>
    {

    })

test.describe("Descripe Block 1", 
    {   //Add Annotation For The Whole Describe 
        annotation : 
        {
            type : "Describe Annotation",
            description : "This Is Describe Annotation "
        }
    } , async () => { 
    test("Test Practise 1", async () => {
        console.log("Test Practise 1")
    })

    test("Test Practise 2", async () => {
        console.log("Test Practise 2")
    })

    test("Test Practise 3", async () => {
        console.log("Test Practise 3")
    })
})