
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  // console.log(x[myIndex - 1]);
  // console.log(myIndex)
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
var myIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x1 = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x1[i].style.display = "none";
  }
  myIndex1++;
  if (myIndex1 > x1.length) { myIndex1 = 1 }
  x1[myIndex1 - 1].style.display = "block";
  // console.log(x[myIndex - 1]);
  // console.log(myIndex)
  setTimeout(carousel1, 2000); // Change image every 2 seconds
}