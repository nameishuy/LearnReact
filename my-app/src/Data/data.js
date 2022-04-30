import avatar from "../Images/avatar.jpg";
import avatar_gif from "../Images/avatar_gif.gif";
const mineData = {
  name: "Đông Gia Huy",
  dob: "10/11/2000",
  avatar: avatar_gif || avatar,
  position: "Front-end Developer",
  description:
    "Hi! I'm a 4th years student of HUTECH, I love to work with the beauty UI and programing so that's why I want to be a Front-end Developer. And more to become a FullStack Developer in several years later.",
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
  education: [
    {
      schoolName: "HUTECH",
      schoolYear: "2018 - Now",
    },
    {
      schoolName: "NGUYEN TRAI HIGH SCHOOL",
      schoolYear: "2015 - 2018",
    },
    {
      schoolName: "KHANH HOI A SECONDARY SCHOOL",
      schoolYear: "2011 - 2015",
    },
    {
      schoolName: "TANG BAT HO B PRIMARY SCHOOL",
      schoolYear: "2006 - 2010",
    },
    {
      schoolName: "NGUYEN TRONG TUYEN PRIMARY SCHOOL",
      schoolYear: "9/2005 - 2006",
    },
  ],
  skills: ["HTML5", "CSS3", "Javascript", "Responsive", "Angular", "ReactJS"],
  projects: [
    {
      id: 1,
      nameProject: "Selling Book Website - MBook",
      picProject:
        "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",
      content: {
        hello: "Hello",
      },
    },
    {
      id: 2,
      nameProject: "Recipes App - WeCooked",
      picProject:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
      content: {},
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
