function myProfile() {
  const url = "https://api.github.com/users/cleversonasj";
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      profileName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      profilePhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

myProfile();
