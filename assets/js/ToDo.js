function add(event) {
    a = document.getElementById("get");
    b = document.getElementById("apnd");
    c = document.createElement("li"); // if this is specified outside then changes will get stored in already created list. new list will not get created.
    d = document.createElement("button");
    d.textContent = "DEL";
    d.setAttribute("onclick", "clk(event)");
    d.setAttribute("id", "delbtn");
    c.textContent = a.value;
    c.append(" ", d);
    b.append(c);
    a.value = "";
};
function clk(event) {
    event.target.parentElement.remove();
};
// CUSTOMIZE
f = document.getElementById("bgclr");
g = document.getElementById("bodyy");
function bodybgclr() {
    document.body.style.backgroundColor = f.value;
};
i = document.getElementById("fntclr");
function fontclr() {
    document.body.style.color = i.value;
};
j = document.getElementById("fontSize");
function fntize() {
    document.body.style.fontSize = `${j.value}px`;
};

