import avatar from "../Images/avatar.jpg";

const mineData = {
  name: "Đông Gia Huy",
  dob: "10/11/2000",
  avatar: avatar,
  position: "Front-end Developer",
  socials: [
    {
      icon: <ion-icon name="logo-facebook"></ion-icon>,
      link: "https://www.facebook.com/yuhtaro.it/",
    },
    {
      icon: <ion-icon name="logo-github"></ion-icon>,
      link: "https://github.com/nameishuy",
    },
  ],
  skills: ["HTML5", "CSS3", "Javascript", "Responsive", "Angular", "ReactJS"],
};

function deleteClass(nameDiv) {
  let div = document.getElementById(nameDiv);
  div.classList.remove("isChoosed");
}
function addClass(nameDiv) {
  let div = document.getElementById(nameDiv);
  div.classList.add("isChoosed");
}
export { mineData, deleteClass, addClass };
