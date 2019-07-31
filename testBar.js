class testBar {
    constructor(options) {
        this.parent = options.parent || document.body;
        this.position = options.position || "top";
        this.message = options.message || "default message";



        const setStyles = (styles, element) => {
            console.log(element)
            Object.assign(element.style, styles);
        };

        const styles = {
            self: {
                backgroundColor: "rgba(54,61,77,1)"
            },
            p: {
                backgroundColor: "rgba(54,61,77,1)"

            },
            btn: {
                backgroundColor: "rgba(54,61,77,1)"

            },
            btnRemove: {
                backgroundColor: "rgba(54,61,77,1)"

            }
        };

        this.self = document.createElement("div");
        this.p = document.createElement("p");
        this.p.innerText = "lorem";
        this.btn = document.createElement("button");
        this.btnRemove = document.createElement("button");
        this.parent.appendChild(this.p);

        console.log(this.self, this.p, this.btn, this.btnRemove);

        Object.keys(styles).forEach(style => {
            // console.log(styles, this.p);
            setStyles(styles[style], this.p);
        });

        this.remove = () => {
            this.self.remove();
        }


        // console.log(this.position, this.message);
    }
}