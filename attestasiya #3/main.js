class Message {
    constructor(author, send_date, short) {
        this.author = author;
        this.send_date = send_date;
        this.short = short;
    }
    toHtml() {
        const show = document.querySelector(".show");
        const p = document.createElement("p");
        p.innerHTML = `${this.send_date} ${this.author}: ${this.short} </b>`;
        show.append(p);
    }
}

class Messenger {
    constructor() {
        this.messages = [];
    }

    show_history() {
        this.messages.forEach((short) => {
            console.log(short.toHtml());
        });

    }

    send(author, text) {
        this.messages.push(new Message(author, this.gettime(), text));
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    }
}


let messenger = new Messenger();
const nameI = document.querySelector(".name");
const short = document.querySelector(".short");
const send_button = document.querySelector("button");

send_button.addEventListener("click", () => {
    messenger.send(nameI.value, short.value);
    messenger.show_history();
    short.value = "";
    nameI.value = ""
});