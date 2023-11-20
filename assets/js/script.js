const icon = document.querySelector('.navbar-brand');
document.querySelector("#btn-nav").onclick = function(){
  if(icon.style.display === 'none'){
    icon.style.display = 'block';
  }else{
    icon.style.display = 'none'
  }
}