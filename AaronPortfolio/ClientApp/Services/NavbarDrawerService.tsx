
interface INavbarDrawer {
    isLoggedIn: boolean;
}

export default class NavbarDrawer {

    constructor(){
        
    }

    openNav(){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

}