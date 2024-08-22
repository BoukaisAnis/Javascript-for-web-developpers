function longestWord(words) {
    return words.reduce((longest, currentWord) => 
        currentWord.length > longest.length ? currentWord : longest, "");
}


console.log(longestWord(["apple", "banana", "strawberry", "kiwi"])); 
