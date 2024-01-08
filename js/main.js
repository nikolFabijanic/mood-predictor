
  // LIGHT
  // function that changes light color based on slider value
  function changeColor() {
    // arrays to store slider and element IDs
    const sliders = ['myRange1', 'myRange2', 'myRange3', 'myRange4'];
    const elementIds = ['lamp1', 'lamp2', 'lamp3', 'lamp4'];
  
    // loops though each slider and updated the color change to its corresponding light element
    for (let i = 0; i < sliders.length; i++) {
      // gets the value of the current slider in the loop
      const sliderValue = document.getElementById(sliders[i]).value;
      // gets the color based on the slider value
      const color = getColorForSlider(i + 1, sliderValue);
  
      // stores the color in the local storage
      localStorage.setItem(`elementColor${i + 1}`, color);
  
      // checks if the element exists and changes its background color
      const element = document.getElementById(elementIds[i]);
      if (element) {
        element.style.backgroundColor = color;
      }
    }
  }
  
  // function that determines the color based on slider value and returns the result
  function getColorForSlider(sliderNumber, value) {
    const baseColor = ['#00A6DB', '#FF0000', '#FFE500', '#0029FF'][sliderNumber - 1];
    const alternateColor = ['#A3FF2F', '#AF9CF9', '#FF9900', '#FF90FB'][sliderNumber - 1];
  
    return value < 50 ? baseColor : alternateColor;
  }
  



  // FRIEND CABINET

  document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('.addBtn');
    const gridItems = document.querySelectorAll('.grid-item');
    const input = document.querySelector('.addFriend');
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '1%';

    addBtn.addEventListener('click', function() {
      const inputValue = input.value.trim();

      // Checks if input contains only 6 numbers
      if (!/^\d{6}$/.test(inputValue)) {
        console.log('Please enter a 6-digit number');
        errorMessage.textContent = 'Please enter a 6-digit number';
        input.parentNode.appendChild(errorMessage);
        return; // Stops execution if the input doesn't match the requirments
      } else {
        if (errorMessage.parentNode === input.parentNode) {
          input.parentNode.removeChild(errorMessage); // Removes the error message if input matches requiremets
        }
        // Updates the grid items
        gridItems.forEach(item => {
          const img = item.querySelector('img[src="img/glass.png"]');
          const plus = item.querySelector(".plus");
          if (img) {
            // Replaces the glass img with a plant img
            img.src = 'img/orangeflower.png';
            if (plus) {
              plus.remove();
            }
            // Adds a name under the plant img
            const name = document.createElement('p');
            name.textContent = 'Nora';
            item.appendChild(name);

            // Stores those changes in the local storage
            localStorage.setItem('plantAdded', true);
            localStorage.setItem('plantName', 'Nora');

            // Changes the class name to the new corresponding element
            img.classList.remove('glass');
            img.classList.add('friendPlant');
          }

          // Changes the lock img to a glass img
          const lock = item.querySelector('.lock');
          if (lock) {
            lock.src = 'img/glass.png';
            const plus = document.createElement('img');
            plus.src = 'img/plus.png';
            item.appendChild(plus);
            // Adjusts the class name to the new corresponding element
            plus.classList.add("plus");
            lock.classList.remove('lock');
            lock.classList.add('glass');
          }
        });
      }
    });

    // Checks local storage for previous changes
    if (localStorage.getItem('plantAdded')) {
      gridItems.forEach(item => {
        const img = item.querySelector('img[src="img/glass.png"]');
        const plus = item.querySelector(".plus");
        if (img) {
          const name = document.createElement('p');
          name.textContent = localStorage.getItem('plantName');
          item.appendChild(name);

          img.src = 'img/orangeflower.png';
          if (plus) {
            plus.remove();
          }

          img.classList.remove('glass');
          img.classList.add('friendPlant');
        }

        const lock = item.querySelector('.lock');
        if (lock) {
          lock.src = 'img/glass.png';
          const plus = document.createElement('img');
          plus.src = 'img/plus.png';
          item.appendChild(plus);
          plus.classList.add("plus");
          lock.classList.remove('lock');
          lock.classList.add('glass');
        }
      });
    }
  });


  // onclick popup for add friend button
  var modal = document.getElementById("myModal");

  var btn = document.querySelector(".plus");

  var addBtn = document.getElementsByClassName("addBtn")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  addBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  // on click shows the button menu on dachboard page
  window.onload = function() {
    var menuButton = document.getElementById("open-menu");
    menuButton.click();
  };






