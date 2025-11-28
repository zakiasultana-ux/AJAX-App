(() => {
  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");
  const loader = document.querySelector(".loader-container");

  //functions
  function loadInfoBoxes() {
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then((response) => response.json())
      .then((infoBoxes) => {
        console.log(infoBoxes);

        infoBoxes.forEach((infoBox, index) => {
          let selected = document.querySelector(`#hotspot-${index + 1}`);

          const titleElement = document.createElement("h2");
          titleElement.textContent = infoBox.heading;

          const textElement = document.createElement("p");
          textElement.textContent = infoBox.description;

          selected.appendChild(titleElement);
          selected.appendChild(textElement);
        });
      })
      .catch((error) => {
        console.log(error);

        const errorMessage = document.createElement("p");
        errorMessage.textContent =
          "Your request tried to travel through the Neon Datastream… but halfway through, a tiny cyber-hamster powering our servers decided to take a snack break. At the same moment, a sparkly, hyper-energetic robot-cat chased a glowing data packet into a dark alley of the Grid, knocking three circuits off balance and causing a reality hiccup. Now, our systems are doing the digital equivalent of a facepalm. Please try again later, when the cyber-hamster is back on its wheel and the robot-cat has returned from its adventure!";

        document.body.appendChild(errorMessage);
      });
  }
  loadInfoBoxes();

  function loadMaterialInfo() {
    loader.classList.toggle("hidden");

    fetch("https://swiftpixel.com/earbud/api/materials")
      .then((response) => response.json())
      .then((materialListData) => {
        materialListData.forEach((material) => {
          const clone = materialTemplate.content.cloneNode(true);
          const materialHeading = clone.querySelector(".material-heading");
          materialHeading.textContent = material.heading;

          const materialDescription = clone.querySelector(
            ".material-description"
          );
          materialDescription.textContent = material.description;

          materialList.appendChild(clone);
        });

        loader.classList.toggle("hidden");
      })
      .catch((error) => {
        console.log(error);

        const errorMessage = document.createElement("p");
        errorMessage.textContent =
          "Your request tried to travel through the Neon Datastream… but halfway through, a tiny cyber-hamster powering our servers decided to take a snack break. At the same moment, a sparkly, hyper-energetic robot-cat chased a glowing data packet into a dark alley of the Grid, knocking three circuits off balance and causing a reality hiccup. Now, our systems are doing the digital equivalent of a facepalm. Please try again later, when the cyber-hamster is back on its wheel and the robot-cat has returned from its adventure!";

        document.body.appendChild(errorMessage);
      });
  }
  loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
