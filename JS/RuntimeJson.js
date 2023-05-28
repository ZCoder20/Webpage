document.addEventListener('DOMContentLoaded', function() 
    // Page initialization code here
 
{
    const jsonObject = {};
const userObject = {};
const postObject = {};
const orderObject = {};
const searchObject = {};
const logintokenObject = {};
    
//User Details
userObject.firstname = 'test';
userObject.middlename = 'test';
userObject.firstname = 'test';
userObject.dob = '01/01/1900';
userObject.email = 'test@example.com';
userObject.phone=0000000000;
userObject.streetaddress='test';
userObject.city='test';
userObject.country='test';
userObject.state='test';
userObject.idtype='test';


//posting details

postObject.details='test details';
postObject.URL = 'test';
postObject.totalS = 'test';
postObject.totalL = 'test';
postObject.totalv = '01/01/1900';
postObject.totalP = 'test@example.com';
postObject.thumbnailpath=0000000000;
postObject.category='test';
postObject.platform='test';
postObject.country='test';




jsonObject.user=userObject;
jsonObject.post=postObject;

    const jasonstring = JSON.stringify(jsonObject);

// Save the updated JSON string back to localStorage
localStorage.setItem('webdata', jasonstring);

});