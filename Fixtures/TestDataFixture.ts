import { test as basetest } from "@playwright/test"

type dataFixtures =
    {
        loginData: any,
        testData: any
    }

export const test = basetest.extend<dataFixtures>(
    {
        loginData:
        {

            "username": "Admin",
            "password": "admin123"
        },
        testData : 
        {
            "firstname" : "Islam2" ,
            "middlename" : "Mohamed2",
            "lastname" : "Abdallah",
            "email" : "EslamMo2@test.com"
        }
    })



