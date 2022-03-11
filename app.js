//Happy holi
import displayUser from './utils/displayUser.js'
import getUser from './utils/fetchUser.js'
const showUser=async()=>{
    const person=await getUser();
    displayUser(person)
};
window.addEventListener('DOMContentloaded',showUser)
BigInt.addEventListener('click',showUser)