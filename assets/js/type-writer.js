Array.prototype.typeWriter = function (element) {
  let currentIndex = 0;
  let currentWord = 0;
  let that = this;
  function interv() {
    let postChar = setInterval(function () {
      element.textContent += that[currentWord][currentIndex];
      currentIndex++;
      if (that[currentWord].length == currentIndex) {
        clearInterval(postChar);
        setTimeout(function () {
          let removeChar = setInterval(function () {
            currentIndex--;
            element.textContent = element.textContent.substring(
              0,
              currentIndex
            );
            if (currentIndex == 0) {
              clearInterval(removeChar);
              currentWord++;
              if (currentWord != that.length) {
                interv();
              } else {
                setTimeout(function () {
                  currentWord = 0;
                  interv();
                }, 1000);
              }
            }
          }, 40);
        }, 500);
      }
    }, 80);
  }
  interv();
};

export const typeWriter = Array.prototype.typeWriter;

// Coded By Mo3bassia
// repo => https://github.com/Mo3bassia/Type-Writer
