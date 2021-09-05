var image1 = document.getElementById('image1')
    image2 = document.getElementById('image2')
    image3 = document.getElementById('image3')
    body = document.getElementById('body');


// var images = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.jpeg"];
var child = false;
function image(image){
    if(child){
      var view = document.getElementById('view');
      body.removeChild(view);
      child = false;
    }

    var div1 = document.createElement('div');
    child = true;
    div1.setAttribute('id', "view");
    div1.innerHTML = "<img src='images/"+ image +"' alt='screenshot1' width=100%>";
    div1.style = "position: fixed";
    div1.style.top = 0;
    div1.style.bottom = 0;
    div1.style.left = 0;
    div1.style.right = 0;
    div1.style.backgroundColor = "rgb(0,0,0, 0.5)";
    div1.style.padding = '10%';

    // div1.addEventListener('keydown', function(){
    //   body.removeChild(div1);
    // });

    body.appendChild(div1);
     div1.addEventListener('click', function(){
       body.removeChild(div1);
       child = false;
     });
}
//
// image1.addEventListener('click', function(){
//   var div1 = document.createElement('div');
//   div1.setAttribute('class', "view");
//   div1.innerHTML = "<img src='images/image1.jpeg' alt='screenshot1' width=100%>";
//   div1.style = "position: absolute";
//   div1.style.top = 0;
//   div1.style.bottom = 0;
//   div1.style.left = 0;
//   div1.style.right = 0;
//   div1.style.backgroundColor = "rgb(0,0,0, 0.5)";
//   div1.style.padding = '10%';
//
//   body.appendChild(div1);
//    div1.addEventListener('click', function(){
//      body.removeChild(div1);
//    })
//
// });
//
// image2.addEventListener('click', function(){
//   var div1 = document.createElement('div');
//   div1.setAttribute('class', "view");
//   // div = document.createTextNode("<img src='images/image1 alt=screenshot1'>");
//   div1.innerHTML = "<img src='images/image2.jpeg' alt='screenshot2' width=100%>";
//   div1.style = "position: absolute";
//   div1.style.top = 0;
//   div1.style.bottom = 0;
//   div1.style.left = 0;
//   div1.style.right = 0;
//   div1.style.backgroundColor = "rgb(0,0,0, 0.5)";
//   div1.style.padding = '10%';
//
//   body.appendChild(div1);
//    div1.addEventListener('click', function(){
//      body.removeChild(div1);
//    });
//
// });
//
// image3.addEventListener('click', function(){
//   var div1 = document.createElement('div');
//   div1.setAttribute('class', "view");
//   // div = document.createTextNode("<img src='images/image1 alt=screenshot1'>");
//   div1.innerHTML = "<img src='images/image3.jpeg' alt='screenshot3' width=100%>";
//   div1.style = "position: absolute";
//   div1.style.top = 0;
//   div1.style.bottom = 0;
//   div1.style.left = 0;
//   div1.style.right = 0;
//   div1.style.backgroundColor = "rgb(0,0,0, 0.5)";
//   div1.style.padding = '10%';
//
//   body.appendChild(div1);
//    div1.addEventListener('click', function(){
//      body.removeChild(div1);
//    });
//
// });
//
// var link = document.getElementById('download');
// var number = 0;
//
// link.addEventListener('click', function(){
//         number++;
//         var numberElement = document.getElementById('number');
//         numberElement.innerHTML =  number;
// });
//
var ham = document.getElementById('ham')
    cross = document.getElementById('cross')
    side = document.getElementById('side')
    update = document.getElementById('update');


    ham.addEventListener('click', function(){
      side.style.width = "70%";
    });

    cross.addEventListener('click', function(){
      side.style.width = 0;
    });

    update.addEventListener('click', function(){
      side.style.width = 0;
    });
