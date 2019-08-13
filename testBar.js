class testBar {
    constructor(options) {
        this.parent = options.parent || document.body;
        this.position = options.position || "top";
        this.message = options.message || "default message";
        this.call = options.call || (() => { alert("get widgets!") });
        this.oldScroll = window.scrollY;
        this.initialized = false;
        this.slidedUp = true;
        this.slidedDown = false;


        const params = {
            self: {
                style: {
                    position: "fixed",
                    top: (this.position === "top") ? "0%" : "",
                    bottom: (this.position === "bottom") ? "0%" : "",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: "rgba(54,61,77,1)",
                    padding: "10px",
                    fontFamily: "Arial",
                    transform: "none"
                }
                , txt: ""
                , type: "div"
            },
            p: {
                style: {
                    fontSize: "16px",
                    color: "#fff",
                    fontWeight: "500"
                }
                , txt: this.message
                , type: "p"
            },
            btn: {
                style: {
                    backgroundColor: "rgba(255,190,0,1)",
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    color: "#fff",
                    margin: "0 30px 0 10px",
                    fontWeight: "600",
                    whiteSpace: "nowrap"
                }
                , txt: "Get widgets"
                , type: "button"
            },
            btnRemove: {
                style: {
                    position: "absolute",
                    right: "5%",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                }
                , txt: "X"
                , type: "button"
            }
        };

        const setStyles = (styles, element) => {
            Object.assign(element.style, styles);
        };

        this.init = () => {
            if (!this.initialized) {
                this.initialized = true;
                Object.keys(params).forEach(param => {

                    this[param] = document.createElement(params[param].type);
                    if (param !== "self") {
                        this.self.appendChild(this[param]);
                    } else this.parent.appendChild(this.self);

                    this[param].innerText = params[param].txt;
                    setStyles(params[param].style, this[param]);
                });

                this.slide = (up = true) => {

                    this.self.animate([
                        { transform: up ? `translateY(calc(${this.position === "top" ? "-100%" : "100%"}))` : "translateY(0)" },
                        { transform: up ? "translateY(0)" : `translateY(calc(${this.position === "top" ? "-100%" : "100%"}))` }
                    ],
                        { duration: 200, easing: "ease-out", fill: "forwards" }
                    );
                };
                this.slide();

                this.toggleSlide = () => {
                    const scrollUp = window.scrollY < this.oldScroll
                    // console.log("up", this.slidedUp, "down", this.slidedDown);

                    if (this.slidedDown && scrollUp) {
                        this.slidedUp = true;
                        this.slidedDown = false;
                        this.slide();
                    }
                    if (this.slidedUp && !scrollUp) {
                        this.slidedUp = false;
                        this.slidedDown = true;
                        this.slide(false);
                    }
                    this.oldScroll = window.scrollY;
                };

                this.remove = () => {
                    this.self.remove();
                    this.initialized = false;
                    this.slidedUp = true;
                    this.slidedDown = false;
                    this.oldScroll = window.scrollY;
                    window.removeEventListener("touchend", this.toggleSlide, false);
                    window.removeEventListener("scroll", this.toggleSlide);

                }
                

                this.btnRemove.addEventListener("click", this.remove);
                this.btn.addEventListener("click", this.call);
                window.addEventListener("touchend", this.toggleSlide, false);
                window.addEventListener("scroll", this.toggleSlide, false);
                }
        
            };
    }
}