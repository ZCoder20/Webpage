// Example function to fetch and display dynamic images
function myFunction() {
    
  document.getElementById("imageContainer").innerHTML = "Hello World";
}

function fetchImages() {
  
// Simulated image URLs
const imageUrls = [
  'img/1.jpeg','img/2.jpeg',
  'img/4.jpeg','img/1.jpeg','img/3.jpeg',
  'img/1.jpeg','img/2.jpeg','img/1.jpeg',
  'img/4.jpeg','img/1.jpeg','img/1.jpeg',
  'img/2.jpeg','img/5.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg'
  
 
];

const imageContainer = document.getElementById('imageContainer');
imageContainer.innerHTML = '';

imageUrls.forEach(url => {
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
   // imageContainer.appendChild(spanitem);
   //alert(imageContainer.innerHTML);

});

}
/*imageUrls.forEach(url => {
  const imageItem = document.createElement('div');
  imageItem.className = 'imageItem';
  imageItem.style.backgroundImage = `url(${url})`;
  imageContainer.appendChild(imageItem);
});
}*/


function myFunction()
{

}

function clickimage(index,name,emp,total,tl,tv,tp) {
  var image = index;
  
    var parameter1 = index;
    var parameter2 = name;
    var parameter3 = emp;
    var parameter4 = total;
    var parameter5 = tl;
    var parameter6 = tv;
    var parameter7 = tl;

    
    var url = 'details.html';
    url += '?param1=' + encodeURIComponent(parameter1);
    url += '&param2=' + encodeURIComponent(parameter2);
    url += '&param3=' + encodeURIComponent(parameter3);
    url += '&param4=' + encodeURIComponent(parameter4);
    url += '&param5=' + encodeURIComponent(parameter5);
    url += '&param6=' + encodeURIComponent(parameter6);
    url += '&param7=' + encodeURIComponent(parameter7);
  
   
    window.open(url, '_blank');
  

}

function closePopup() {
  window.close();
}

  