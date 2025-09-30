import { test, expect } from '@playwright/test'
import CryptoJs from "crypto-js"
import { encryotData, decryptData } from '../Utility/Encrypt-Decrypt-Utility'
import SecureData  from "../TestData/SecureData.json"  

test("Encrypt & Decrypt Senstaive Data In Playwright", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    // Here We Will Use CryptoJs.AES.encrypt() Method To encrypt The Sensitaive Data The Method Need 2 Arguments (The Encrypted Target Data,Secret Key)
    // You Will Use The Same Secret Key To Decrypt This Data Again 
    const SecretKey: any = process.env.SECRET_KEY
    /* const EncryptedUserName = CryptoJs.AES.encrypt("standard_user" , Password500 ).toString()
    console.log(`Encrypted Username : ${EncryptedUserName}`) 
    const EncryptedPassword = CryptoJs.AES.encrypt("secret_sauce" , Password500 ).toString()
    console.log(`Encrypted Pass : ${EncryptedPassword}`)  */

    //Using The encryotData & decryptData  Utilty Methods To Encrypt & Decrypt The Data 
    //const EncryptedUserName = encryotData("standard_user") ; 
    //console.log(`EncryptedUserName : ${EncryptedUserName}`)

    //const DecryptedUsername = decryptData("U2FsdGVkX1+BbL1RXgM1Id0AfpRGUMG4maxTaLYb7PA=") 
    //console.log(`DecryptedUsername : ${DecryptedUsername}`)

    //THat's The Encrypted Data 
    let EncryptedUname = 'U2FsdGVkX19U377I0ENdp7fv4l/fUlFib4goJVVlz2E='

    let EncryptedPass = 'U2FsdGVkX1/BLf/NvZtJx5zi1NAbKlIdvAKCK/aHD0Y='

    // Now If You Want To Decrypt These Data Again Use This Method : CryptoJs.AES.decrypt() The Required 2 Args Here (The Encrypted Data , Secret Key) 
    // to Avoid Insert The Secret Key Here As Hardcoded In You Script Tou Can Use The Env Varible 
    //You Can Set The SecretKey AS Env Varible By 2 Ways 
    // First Way : 
    //const SecretKey : any = process.env.SECRET_KEY 
    const DecryptedUsername = CryptoJs.AES.decrypt(EncryptedUname, SecretKey).toString(CryptoJs.enc.Utf8) // You Must To Use This Argument Inside The tostring() Method To Decrypt The Data to The utf-8 String 
    console.log(`Decrypted Username: ${DecryptedUsername}`)
    // Second  Way : 
    //const SecretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : '' 
    const DecryptedPassword = CryptoJs.AES.decrypt(EncryptedPass, SecretKey).toString(CryptoJs.enc.Utf8)
    console.log(`Decrypted Pass : ${DecryptedPassword}`)

    await page.locator("#user-name").fill(DecryptedUsername)
    await page.locator("#password").fill(DecryptedPassword)
    await page.locator("#login-button").click()
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible()
    await page.close()
})

test("encrypt Decrypt Data From External Env File", async ({ page }) => {
    const encunm : any  = process.env.EncryptedUname
    const encpwd : any = process.env.EncryptedPass
    const DecryptedUsername = decryptData(encunm) 
    const DecryptedPassword = decryptData(encpwd)
    await page.goto("https://www.saucedemo.com/") 
    await page.locator("#user-name").fill(DecryptedUsername)
    await page.locator("#password").fill(DecryptedPassword)
    await page.locator("#login-button").click()
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible()
    await page.close()
})

test("encrypt Decrypt Data From External Json File", async ({ page }) => {
    const encunm : any  = SecureData.EncryptedUname
    const encpwd : any = SecureData.EncryptedPass
    const DecryptedUsername = decryptData(encunm) 
    const DecryptedPassword = decryptData(encpwd)
    await page.goto("https://www.saucedemo.com/") 
    await page.locator("#user-name").fill(DecryptedUsername)
    await page.locator("#password").fill(DecryptedPassword)
    await page.locator("#login-button").click()
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible()
    await page.close()
})