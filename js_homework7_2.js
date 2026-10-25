var pattern = /\b[^Aa\s]{6,}\b/;

var words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

for (var i = 0; i < words.length; i++) {
    console.log(words[i] + ": " + pattern.test(words[i]));
}
