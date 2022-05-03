var interval = setInterval(function () {
  if (document.getElementById('search').value!=" 🔎︎ Type here to search") {
    document.getElementById('searchvar').value="1";
  } else {
  }
  
var x = document.getElementById('searchvar').value;
  if(x=='1'){
    document.getElementById('searchvar').value="2";
    document.getElementById('search').value=""
  }else if (x=='0'){
    document.getElementById('search').value=" 🔎︎ Type here to search"
  }
  
}, 1);

function hover(element) {
  element.setAttribute('src', 'https://raw.githubusercontent.com/MushroomFX/html_src/main/Taskico_20x_1.png');
}

function unhover(element) {
  element.setAttribute('src', 'https://raw.githubusercontent.com/MushroomFX/html_src/main/Taskico_20x_2.png');
}