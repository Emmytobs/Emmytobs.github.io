// When the user scrolls down 80px from the top of the document...
window.onscroll = function() {
  
  function scrollFunction() {
    if ( document.documentElement.scrollTop > 100 ) {
      document.querySelector('.headline').style.display = 'none';
      document.querySelector('.nav').style.backgroundColor = 'rgb(0,0,0)';
      document.querySelector('.go_to_btn').style.display = 'none';
    } 
    
    else {
      document.querySelector('.headline').style.display = 'block';
      document.querySelector('.nav').style.backgroundColor = 'transparent';   
      document.querySelector('.go_to_btn').style.display = 'block';

    }
  }
  scrollFunction();

};


// function scrollFunction() {
//   if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
//     document.querySelector('.go_to_btn').style.display = 'none';
//   }

//   else {
//     document.querySelector('.go_to_btn').style.display = 'block';    
//   }
// }