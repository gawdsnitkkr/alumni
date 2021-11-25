const content = document.querySelector("#content");

fetch('https://sheets.googleapis.com/v4/spreadsheets/1DmQG7l-C4mlp3puiogcGWHiqV4Ru9rNtCLZOqJ2fr9Q/values/A1:F500?key=AIzaSyDFy_HlmKj__Rogf1NPnN1mALpr2CAYpWM')
  .then(res => res.json())
  .then(result => {
    populateContent(result.values)
  })
  .catch(err => console.log('Error: ' + err))


function populateContent(arrOfAlumni) {
  let noOfAlumni = arrOfAlumni.length - 1;

  const date = new Date();
  for (let i = 1; i <= noOfAlumni; i++) {
    const batch = arrOfAlumni[i][5].split("-")[1];

    if (batch < date.getFullYear() || (+batch === date.getFullYear() && date.getMonth() >= 5)) {
      const card = document.createElement("div");
      const profile_image_container = document.createElement("div");
      const profile_image_back = document.createElement("div");
      const profile_name = document.createElement("div");
      const profile_title = document.createElement("div");

      const linkImage = document.createElement("a");
      const image = new Image()

      const linkName = document.createElement("a");
      const batch = document.createElement("p");


      image.src = arrOfAlumni[i][2];
      image.onerror = function () {
        // image did not load
        image.src = 'images/avatar.png'
      }

      image.alt = arrOfAlumni[i][1];

      linkImage.href = arrOfAlumni[i][4];

      linkImage.target = "_blank";

      linkImage.appendChild(image);
      profile_image_container.appendChild(linkImage);
      card.appendChild(profile_image_container);

      linkName.href = arrOfAlumni[i][4];

      linkName.target = "_blank";

      let name = document.createTextNode(arrOfAlumni[i][1]);
      linkName.appendChild(name);

      batch.textContent = arrOfAlumni[i][5];

      let title = document.createTextNode(arrOfAlumni[i][3]);
      profile_title.appendChild(title);

      profile_name.appendChild(linkName);
      profile_name.appendChild(batch);
      profile_image_back.appendChild(profile_name);
      profile_image_back.appendChild(profile_title);
      card.appendChild(profile_image_back);

      content.appendChild(card);


      card.setAttribute("class", "card");
      profile_image_container.setAttribute("class", "profile-image-container");
      profile_image_back.setAttribute("class", "profile-image-back");
      profile_name.setAttribute("class", "profile-name");
      profile_title.setAttribute("class", "profile-title");
    }
  }
}
