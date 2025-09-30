import CryptoJS  from "crypto-js";

const Secretkey : any = process.env.SECRET_KEY
export function encryotData(data : string) : string
{
    return CryptoJS.AES.encrypt(data , Secretkey).toString() 
}

export function decryptData(encdata : string) : string 
{
    return CryptoJS.AES.decrypt(encdata , Secretkey).toString(CryptoJS.enc.Utf8)
}