const jsonObject = {};
// Example function to fetch and display dynamic images
function myFunction() {
    
  document.getElementById("imageContainer").innerHTML = "Hello World";
}

const content = document.querySelector('#content');
content.style.transformOrigin = 'top left';

window.addEventListener('resize', recalculateScale);

function recalculateScale() {
    const windowHeight = window.innerHeight;
    content.style.transform = `scale(${windowHeight / content.offsetHeight})`;
}

recalculateScale();
async function SearchImages()
{
    const imageUrls =[];

   cat = document.getElementById('ddlcat');
    palt = document.getElementById('ddlplat');
    price = document.getElementById('ddlprice');
    ts = document.getElementById('ddlts');
    lang = document.getElementById('ddllang');




    fetch(`http://localhost:8080/vi/api/searchall?category=${cat.value}&price=${price.value}&totalF1=${ts.value}&plat=${palt.value}&pstlang=${lang.value}`)
        .then(response => response.json())
        .then(data => {
            // Access the specific element from the JSON response

            data.forEach(element => {
                // Access specific properties of each array element

                const myObj = JSON.parse(JSON.stringify(element));


                /*for (const x in myObj) {
                    if(x=='imgpath')
                    {
                        imageUrls.push('img/'+myObj[x]);
                        //alert(myObj[x])  ;
                    }

                }*/
                //  alert('Value of property1:', property1);
                //  alert('Value of property2:', property2);

                // Perform further operations with each array element
                // ...
                imageUrls.push(myObj);

            });
            getData(imageUrls);
            //  var specificElement = data.totalF4[0];
            //   alert('Value of specific element:', specificElement);
            // Process the response data



        })
        .catch(error => {
            console.error('Error calling API:', error);
        });


}
function fetchImages(cate)
{

    category = document.getElementById('ddlcat');
    palt = document.getElementById('ddlplat');
    price = document.getElementById('ddlprice');
    ts = document.getElementById('ddlts');
    lang = document.getElementById('ddllang');
    category.value = '';
    palt.value = '';
    lang.value = '';
    price.value=0;
    ts.value=0;
    asyncfetchImages(cate)
}

async function asyncfetchImages(cat) {


    const imageUrls =[];
    fetch(`http://localhost:8080/vi/api/byCategory?category=${cat}`)
        .then(response => response.json())
        .then(data => {
            // Access the specific element from the JSON response

            data.forEach(element => {
                // Access specific properties of each array element

                const myObj = JSON.parse(JSON.stringify(element));
              //alert(JSON.stringify(element));


             /*   for (const x in myObj) {
                    if (x == 'imgpath') {
                      //  imageUrls.push('img/' + myObj[x]);
                        //alert(myObj[x])  ;
                        imageUrls.push(myObj);
                    }
                }*/
                //alert("obj  "+JSON.stringify(element));
                imageUrls.push(myObj);
                //  alert('Value of property1:', property1);
                //  alert('Value of property2:', property2);

                // Perform further operations with each array element
                // ...


            });

            getData(imageUrls);
            //  var specificElement = data.totalF4[0];
            //   alert('Value of specific element:', specificElement);
            // Process the response data



        })
        .catch(error => {
            console.error('Error calling API:', error);
        });

}

function Createimage(myObj)
{
    const imageContainer = document.getElementById('imageContainer');
    var name = ''
    var emp = ''
    var total  =''
    var url=''
var Emp1=''
    const tl = 'bahutbhait'
    const tv = 'sadadaffg fsdf g g gg '
    const tp  ='esss vv 55 rdndnfknned dfdf fg'
    imageContainer.innerHTML = '';
    count =0;
    for (const x in myObj) {
        count =1;
        if(x=='imgpath')
        {
            url =('img/'+myObj[x]);
            //alert(myObj[x])  ;
        }
        if(x=='postTitle')
        {
            name =myObj[x];
        }
        if(x=='price')
        {
            emp =myObj[x];
        }
        if(x=='totalF1')
        {
            total =myObj[x];
        }




            const parentdiv = document.createElement('div');
            parentdiv.className = 'parentdiv';

            const spanitem = document.createElement('span');
            const imageItem = document.createElement('img');
            imageItem.className = 'imageItem';
            imageItem.src = url;



            imageItem.addEventListener('click', function() {
                clickimage(url,name,emp,total,tl,tv,tp);
            });

            //imageItem.width = "100px";
            // imageItem.height = "100px";
            parentdiv.appendChild(imageItem)
            parentdiv.appendChild(spanitem)
            imageContainer.appendChild(parentdiv);

            spanitem.innerHTML='';
            spanitem.className='spanclass'
            const dynamicdiv = document.createElement('div');

            dynamicdiv.innerHTML='<table><tr><td>'+name+'</td><td>'+emp+'</td></tr><tr><td>'+name+'</td><td>name</td></tr><tr><td>'+total+'</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr></table>';

//create table
            spanitem.append(dynamicdiv);
            // imageContainer.appendChild(spanitem);
            //alert(imageContainer.innerHTML);




    }
    if(count ==0)
    {
        imageContainer.innerHTML = '<h1><p>There is no post for the search criteria</p></h1>';
    }
}


function imagedetialsdisplay(myObj)
{
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
    var count =0;
    for (const x in myObj) {
        if (x == 'imgpath') {
            imageUrls.push('img/' + myObj[x]);
            count =1;
            const parentdiv = document.createElement('div');
            parentdiv.className = 'parentdiv';

            const spanitem = document.createElement('span');
            const imageItem = document.createElement('img');
            imageItem.className = 'imageItem';
            imageItem.src = url;
            const name = 'iska bhinam'
            const emp = 'Employee name'
            const total  ='total number is'

            const tl = 'bahutbhait'
            const tv = 'sadadaffg fsdf g g gg '
            const tp  ='esss vv 55 rdndnfknned dfdf fg'


            imageItem.addEventListener('click', function() {
                clickimage(url,name,emp,total,tl,tv,tp);
            });

            //imageItem.width = "100px";
            // imageItem.height = "100px";
            parentdiv.appendChild(imageItem)
            parentdiv.appendChild(spanitem)
            imageContainer.appendChild(parentdiv);

            spanitem.innerHTML='';
            spanitem.className='spanclass'
            const dynamicdiv = document.createElement('div');

            dynamicdiv.innerHTML='<table><tr><td>'+name+'</td><td>'+emp+'</td></tr><tr><td>'+name+'</td><td>Emp1</td></tr><tr><td>'+total+'</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr></table>';

//create table
            spanitem.append(dynamicdiv);
        }
    }
    if(count ==0)
    {

        imageContainer.innerHTML = '<h1><p>There is no post for the search criteria</p></h1>';
    }


}

function getData(imageUrls) {





// Simulated image URLs
    /*
const imageUrls = [
  'img/1.jpeg','img/2.jpeg',
  'img/4.jpeg','img/1.jpeg','img/3.jpeg',
  'img/1.jpeg','img/2.jpeg','img/1.jpeg',
  'img/4.jpeg','img/1.jpeg','img/1.jpeg',
  'img/2.jpeg','img/5.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg'
  
 
];*/

const imageContainer = document.getElementById('imageContainer');
imageContainer.innerHTML = '';
var count =0;
   // alert("hello")
imageUrls.forEach(obj => {
    count =1;

    url  = 'img/'+obj.imgpath;
    posttitle = obj.postTitle;
    postid = obj.postId;
    posturl = obj.postURL;
    total_v = obj.totalF1;
    total_s = obj.totalF2;
    total_l = obj.totalF3;
    total_p = obj.totalF4;
    category = obj.category;
    price = obj.price;
    plat = obj.plat;
    smname = obj.smname;
    monot = obj.monot;
    isrestric = obj.isrestric;
    rsn_rest = obj.rsn_rest;
    pstlang = obj.pstlang;
    postdetails = obj.postDertails;
    //alert(url);

    const parentdiv = document.createElement('div');
    parentdiv.className = 'parentdiv';
    
    const spanitem = document.createElement('span');
    const imageItem = document.createElement('img');
    imageItem.className = 'imageItem';
    imageItem.src = url;
    imageItem.addEventListener('click', function() {

      clickimage('img/'+obj.imgpath,posttitle,posturl,price,total_l,total_v,total_p,total_s,category,plat,smname,monot,isrestric,rsn_rest,pstlang,postid,obj);
    });
    
    //imageItem.width = "100px";
   // imageItem.height = "100px";
    parentdiv.appendChild(imageItem)
    parentdiv.appendChild(spanitem)
    imageContainer.appendChild(parentdiv);
    
    spanitem.innerHTML='';
    spanitem.className='spanclass'
    const dynamicdiv = document.createElement('div');
   
    dynamicdiv.innerHTML='<table><tr><td>'+posttitle+'</td><td>'+posturl+'</td></tr><tr><td>'+price+'</td><td>'+total_l+'</td></tr><tr><td>'+total_s+'</td><td>'+url+'</td></tr></table>';
    
//create table
      spanitem.append(dynamicdiv);
   // imageContainer.appendChild(spanitem);
   //alert(imageContainer.innerHTML);

});
    if(count ==0)
    {

        imageContainer.innerHTML = '<h1><p>There is no post for the search criteria</p></h1>';
    }
}
/*imageUrls.forEach(url => {
  const imageItem = document.createElement('div');
  imageItem.className = 'imageItem';
  imageItem.style.backgroundImage = `url(${url})`;
  imageContainer.appendChild(imageItem);
});
}*/





    function clickimage(Ashu,posttitle,posturl,price,total_l,total_v,total_p,total_s,category,plat,smname,monot,isrestric,rsn_rest,pstlang,postid,obj)
    {

    var image = Ashu;

    var parameter1 = Ashu;
    var parameter2 = posttitle;
    var parameter3 = posturl;
    var parameter4 = price;
    var parameter5 = total_l;
    var parameter6 = total_v;
    var parameter7 = total_p;


        var jsonObject = {
            name: 'John',
            age: 30,
            city: 'New York'
        };

        var jsonString = JSON.stringify(obj);
        var encodedJsonString = encodeURIComponent(jsonString);
// Save the updated JSON string back to localStorage


       // alert(" parameter1 " +parameter1);
    var url = 'details.html';
    url += '?param1=' + encodeURIComponent(parameter1);
    url += '&param2=' + encodeURIComponent(encodedJsonString);

  
   
    window.open(url, '_blank');
  

}

function callAPIJson(url,data)
{
    $.ajax({
        url: url,
        method: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
            // Handle the success response

            alert("you have successfully registered!!! Thanks");



        },
        error: function(error) {
            // Handle the error response
        }
    });
}

function  callAPIFormdata(url, formdata)
{
    fetch(url, {
        method: 'POST',
        body: formData
    })
         .then(response => response.json())
        .then(data => {
            alert('Form data submitted successfully.'+data);
            // Do something with the response data
        })
        .catch(error => {
            console.error('Error submitting form data:', error);
        });
    return response;
}

function closePopup() {
  window.close();
}

  var logininnerHTML = `<div id="popup-overlay">
  <div class="popcontainer">
    <input type="button" id="crossbutton" value="X">
  <form action="/action_page.php">
    <div class="row">
      
      <h2 style="text-align:center">Login with Social Media or Manually</h2>
      <div class="vl">
        <span class="vl-innertext">or</span>
      </div>

      <div class="col">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
      </div>

      <div class="col">
        <div class="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>

        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" value="Login">
      </div>
      
    </div>
  </form>
</div>

<div class="bottom-container">
  <div class="row">
    <div class="col">
      <a href="register.html" style="color:white" class="btn">Sign up</a>
    </div>
    <div class="col">
      <a href="#" style="color:white" class="btn">Forgot password?</a>
    </div>
  </div>
</div>`

