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
  projects: [
    {
      id: 1,
      nameProject: "Selling Book Website - MBook",
      picProject:
        "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",
    },
    {
      id: 2,
      nameProject: "Recipes App - WeCooked",
      picProject:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
    },
  ],
};

function deleteClass(nameDiv) {
  let div = document.getElementById(nameDiv);
  div.classList.remove("isChoosed");
}
function addClass(nameDiv) {
  let div = document.getElementById(nameDiv);
  div.classList.add("isChoosed");
}

const sorryInfo = {
  picture:
    "https://i.pinimg.com/originals/68/67/64/68676479cc46c59795fc9bd524dd3c46.gif",
  content: "This page is under development. Sorry for this inconvenience!",
};
export { mineData, deleteClass, addClass, sorryInfo };
