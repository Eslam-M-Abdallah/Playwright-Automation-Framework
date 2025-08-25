import { test, expect } from "@playwright/test"

// 1- list Reporter >> You Can Genrete It From The CMD By Using The Command --reporter=list Or Set It At The Config File "Reporter" : "list" & This Is The Default Reporter

// 2- Line Reporter >> The Line Reporter Is Show The Tests Result With No Details But In Case Of The Failure Tests Will Display The Tets Details , You Can Genrete It From The CMD By Using The Command --reporter=line Or Set It At The Config File "Reporter" : "line"

// 3- Dot Reporter >> It's SHow The Test Result Only as Dots ANd F In Case OF The Failure Withn The Test Fails Details It;s The Default Reporter In The CI , You Can Genrete It From The CMD By Using The Command --reporter=dot Or Set It At The Config File "Reporter" : "dot"

// 4- html Reporter >> It's Much Details Rich Graphical Reporter , You Can Genrete It From The CMD By Using The Command --reporter=html Or Set It At The Config File "Reporter" : "html" 

// 5- blob Reporter >> It's Useful When You Run The Tests On Multiple Machines And Want To Merge Then On One Blob Reporter , You Can Genrete It From The CMD By Using The Command --reporter=blob Or Set It At The Config File "Reporter" : "blob"
test("Reports Practise 1", async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})

test("Reports Practise 2", async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})

test("Reports Practise 3", async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google2")
})