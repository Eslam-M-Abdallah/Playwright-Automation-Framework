import {test , expect} from "@playwright/test"

test("Drag & Drop Event Practise",async({page})=>
    {
        await page.goto("https://qavbox.github.io/demo/dragndrop/",{waitUntil : "load"}) 
        // First Approach :  Drag And Drop Manullay Usimg Mouse (Hover , Down & Up )
        //First Allocate The Sorce Element ANd Press Down On It 
        /*await page.locator('#draggable').hover(); //Source
        await page.mouse.down();

        // Second Allocate The target Element ANd Press Up On It
        await page.locator('#droppable').hover() //Target
        await page.mouse.up();
        await expect(page.locator('#droppable')).toHaveText("Dropped!") 
        */ 
        //Second Approch : Drag And Drop using The dragTo() Method that Will Drag The Sorce Elemnt To The Middle Position Of The Target Element

        await page.locator('#draggable').dragTo(page.locator('#droppable'), // If You Want To Determine Speicific Position For The Source Or Target Elements
        {
            sourcePosition : {x:0 , y:0} ,
            targetPosition : {x:0, y:0}
        })  
        await expect(page.locator('#droppable')).toHaveText("Dropped!") 
    })