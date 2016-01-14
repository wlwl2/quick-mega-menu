document.querySelector(".overflow-nav__button").addEventListener("click", function() {
      document.querySelector(".overflow-nav__indicator").classList.toggle("overflow-nav__indicator--active");
      this.blur();
      return false;
    });
