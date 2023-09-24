const navigation = documemt.querySelector(".primary-navigation");
const navigationheight = navigation.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding", navigationheight + "px"
);