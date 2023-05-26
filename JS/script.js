// Example function to fetch and display dynamic images
function myFunction() {
    
  document.getElementById("imageContainer").innerHTML = "Hello World";
}

function fetchImages() {
  
// Simulated image URLs
const imageUrls = [
  'img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
  'img/1.jpeg','img/1.jpeg','img/1.jpeg',
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
    //imageItem.width = "100px";
   // imageItem.height = "100px";
    parentdiv.appendChild(imageItem)
    parentdiv.appendChild(spanitem)
    imageContainer.appendChild(parentdiv);
    
    spanitem.innerHTML='';
    spanitem.className='spanclass'
    const dynamicdiv = document.createElement('div');
//create table
    const name = "kiska bhinam"
dynamicdiv.innerHTML='<table><tr><td>'+name+'</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr><tr><td>Name</td><td>Emp1</td></tr></table>';

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

function clickimage(index) {
  var image = index;
  //alert(index)
  var popupContent = `
    <div>
      <img src="`+index+`" alt="wow" width="40%" height="50%">
      <h2>You selected this</h2>
      <p>Loading screen for the post</p>
      <button onclick="closePopup()">Close</button>
    </div>
  `;
/*alert(popupContent);
  var popupWidth = 400;
  var popupHeight = 400;
  var leftPosition = (window.innerWidth - popupWidth) / 2;
  var topPosition = (window.innerHeight - popupHeight) / 2;

  var popupWindow = window.open("", "popupWindow", `width=${popupWidth},height=${popupHeight},left=${leftPosition},top=${topPosition},toolbar=no,menubar=no,location=no,status=no`);
  popupWindow.document.body.innerHTML = popupContent;
  // <p>${image.data.description}</p>



  var newTab = window.open("loadDetails.html");
  newTab.document.open();
  newTab.document.write(popupContent);
  newTab.document.close();*/

  var newTab = window.open("loadDetails.html", "_blank");
  newTab.addEventListener("load", function() {
    this.alert(newTab.document.innerHTML)
    newTab.document.getElementById("imageCell").innerHTML = `
    <img src="`+index+`" alt="wow" width="40%" height="50%">
    `;
  });

}

function closePopup() {
  window.close();
}

  