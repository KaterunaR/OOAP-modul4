class Originator {
    constructor() {
      this.words = [];
    }

    addWord(word) {
      this.words.push(word);
    }

    getState() {
      return [...this.words]; 
    }

    setState(state) {
      this.words = [...state];
    }

    getConversation() {
      return this.words.join(" ");
    }
}


class Caretaker {
    constructor(originator) {
      this.originator = originator;
      this.history = [];
    }

    save() {
      this.history.push(this.originator.getState());
    }

    undo() {
      if (this.history.length > 0) {
        const prevState = this.history.pop();
        this.originator.setState(prevState);
      }
      else{
        alert("There no words in conversation")
      }
    }
}

const words = ["hi", "how", "are", "you", "what", "do", "please", "don't", "know", "who", "good"];
const originator = new Originator();
const caretaker = new Caretaker(originator);
const conversation = document.getElementById("conversation");

function addWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    caretaker.save(); 
    originator.addWord(word);
    updateUI();
}

function undo() {
    caretaker.undo();
    updateUI();
}

function updateUI() {
    conversation.textContent = originator.getConversation();
}