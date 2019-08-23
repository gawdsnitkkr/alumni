const MAX_TITLE_LENGTH = 35;

const getProfile = (profile) => {
  const { name, imageUrl, profileLink, batch, title } = profile;

  return `
    <div class="card">
      <div class="profile-image-container">
        <a href="${profileLink}" target="_blank">
          <img src="${imageUrl}" alt="${name}" />
        </a>
      </div>
      <div class="profile-name">
        <a href="${profileLink}" target="_blank">
          ${name}
        </a>
        <p>${batch}</p>
      </div>
      <div class="profile-title">
        ${title}
      </div>
    </div>
  `;
};

const content = document.getElementById('content');

let contentHtml = '';
profiles.data.forEach(profile => {
  contentHtml += getProfile(profile);
});

content.innerHTML = contentHtml;
