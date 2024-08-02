const btn = document.querySelector('#all');

btn.addEventListener('click',(event) => {
    const checkboxes = document.querySelectorAll('.all-pages .button-check input');
    const hasUnchecked = Array.from(checkboxes).some(checkbox => !checkbox.checked);
  
    checkboxes.forEach(checkbox => {
      checkbox.checked = hasUnchecked;
    }); 
    })
