import { test } from "@playwright/test"

test.describe("Describe Block 1", {tag : "@Regression"} , async () => { // You Can Add Tag For The Describe Too
    test("Test Practise 1 @UI", async () => { //That's The First Way To Tag The Test Scripts By Adding @TagName At the Test Title
        console.log("Test Practise 1")
    })

    test("Test Practise 2 @API", async () => {
        console.log("Test Practise 2")
    })

    test("Test Practise 3 @UI @Sainty", async () => { //You Can Add Multiple Tags @Tag1 @Tag2
        console.log("Test Practise 3")
    })
})

test("Test Practise 4", {tag : "@Smoke"} , async () => { //That's The Second Way To Tag The Test Scripts By Adding New {} AS Parameter To The Test Method This Object Have {tag : "@tagName"} , This Way Is More Preferable Before The Tag Name Will Not Appear At The Test Script Name/Describe It's More Cleaner
    console.log("Test Practise 4")
})

test("Test Practise 5", {tag : ["@Smoke","@Sainty"]} , async () => { // You CAn Add Multiple Tags {tag : ["@tag1" , "@tag2"]}
    console.log("Test Practise 5")
})


test("Test Practise 6", {tag : "@Smoke"} ,async () => {
    console.log("Test Practise 6")
})

// You Can Run The Only The Test Scipts That Have Specific Tage By Using This Command : npx playwright test --grep=@Tagname

// 


