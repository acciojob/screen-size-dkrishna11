//your JS code here. If required.
function updateWindowSize() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var dimensionsElement = document.getElementById('dimensions');
        dimensionsElement.textContent = 'Width: ' + width + ' Height: ' + height;
      }

      window.addEventListener('resize', updateWindowSize);
      updateWindowSize(); // Initial update when the page loads