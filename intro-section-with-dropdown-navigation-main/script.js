function showMenu() {
    let menu = document.querySelector('.mobile-menu');
    let body = document.getElementsByTagName('body')[0];
  
    if (menu.style.display === 'none') {
      menu.style.display = 'flex';
      body.style.backgroundColor = 'rgba(0 , 0, 0, 0.5)';
    } else {
      menu.style.display = 'none';
    }
  }
  
  function closeMenu() {
   let menu = document.querySelector('.mobile-menu');
   let body = document.getElementsByTagName('body')[0];
 
   if(menu.style.display === 'flex') {
     menu.style.display = 'none';
     body.style.backgroundColor = 'rgba(0 , 0, 0, 0)';
   } else {
    menu.style.display = 'flex';
   }
  }
  