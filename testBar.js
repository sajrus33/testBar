class testBar {
    constructor(options) {
        this.parent = options.parent || document.body;
        this.position = options.position || "top";
        this.message = options.message || "default message";

        const params = {
            self: {
                style: {
                    position: "absolute",
                    top: (this.position === "top") ? "0%" : "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: "rgba(54,61,77,1)",
                    padding: "10px",
                    fontFamily: "Arial"

                }
                , txt: ""
            },
            p: {
                style: {
                    fontSize: "16px",
                    color: "#fff",
                    fontWeight: "500"

                }
                , txt: this.message

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
            }
        };

        this.self = document.createElement("div");
        this.p = document.createElement("p");
        this.btn = document.createElement("button");
        this.btnRemove = document.createElement("button");

        const setStyles = (styles, element) => {
            Object.assign(element.style, styles);
        };

        Object.keys(params).forEach(param => {
            this[param] = document.createElement(param);
            if (param !== "self") {
                this.self.appendChild(this[param]);
            } else if (param === "self") {
                this.parent.appendChild(this.self);
            }
            this[param].innerText = params[param].txt;
            setStyles(params[param].style, this[param]);
        });

        this.remove = () => {
            this.self.remove();
        }


    }
}