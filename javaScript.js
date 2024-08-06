const blurDivs = document.querySelectorAll(".photo-item");

      blurDivs.forEach((div) => {
        const img = div.querySelector("img");

        function loaded() {
          div.classList.add("loaded");
        }

        if (img.complete) {
          loaded();
        } else {
          img.addEventListener("load", loaded);
        }
      });