class testBar {
    constructor(options) {
        this.parent = options.parent || document.body;
        this.position = options.position || "top";
        this.message = options.message || "default message";
        this.call = options.call || (() => { alert("get widgets!") });

        const params = {
            self: {
                style: {
                    position: "absolute",
                    top: (this.position === "top") ? "0%" : "",
                    bottom: (this.position === "bottom") ? "0%" : "",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: "rgba(54,61,77,1)",
                    padding: "10px",
                    fontFamily: "Arial"
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
                    } else if (param === "self") {
                        this.parent.appendChild(this.self);
                    }
                    this[param].innerText = params[param].txt;
                    setStyles(params[param].style, this[param]);
                });

                this.self.animate([
                    { transform: `translateY(calc(${this.position === "top" ? "100vh - 60px" : "-100vh + 60px"}))` },
                    { transform: "translateY(0)" },
                ],
                    { duration: 600, easing: "ease-in-out" }
                )

                this.remove = () => {
                    this.self.remove();
                    this.initialized = false;
                }

                this.btnRemove.addEventListener("click", this.remove);
                this.btn.addEventListener("click", this.call);
            }
        };





    }
}