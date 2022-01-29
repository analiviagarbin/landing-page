class MobileHeader {
    constructor(mobileMenu, headerList, headerLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.headerList = document.querySelector(headerList);
        this.headerLinks = document.querySelectorAll(headerLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.headerLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `headerLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }

      handleClick() {
        this.headerList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
      }
    
      addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
      }

    init(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileHeader = new MobileHeader(
    ".mobile-menu",
    ".header-list",
    ".header list li",
);
mobileHeader.init();