fox = window.prompt("Type R for a random fox or type a number from 1 - 123", "")
success_1 = false;
success_2 = false;

if (fox.toLowerCase().includes("r")) {
  document.write("Showing random fox");
  var img = document.createElement("img");
  n = Math.floor(Math.random() * 123) + 1;
  img.src = "/images/fox"+n.toString() + ".jpg"
  document.body.appendChild(img);
  success_1 = true;
  fox = n
}

if (isNaN(fox) == false) {
  fox = parseInt(fox)
  if (fox >= 1 && fox <= 123) {
    document.write("Showing fox " + fox);
    var img = document.createElement("img");
    img.src = "/images/fox" + fox.toString() + ".jpg";
    document.body.appendChild(img);
    success_2 = true;
  }

}
if (success_1 == false && success_2 == false){
    document.write("An error occurred, try again later");
}
