function joinWith(words,spaces){
    // console.log("spaces",spaces);
    // console.log("words",words);
    if (words.length==1){
        return lastLine(words,spaces)
    }
    if (spaces%(words.length-1)==0){
        let num = spaces/(words.length-1)
        let str = " "
        while (str.length != num){
            str = str + " "
        }
        return words.join(str)
    }
    
    let num = Math.floor(spaces/(words.length-1))
    // console.log(num,"num");
    let str = " "
    let count = 1
    while (str.length != num){
        str = str + " "
        count++
    }
    let outstr = words.slice(1).join(str)

    let remaingingspace = spaces - count*(words.length-2)
    // console.log(remaingingspace,"remaingingspace")

    str = " "
    while (str.length != remaingingspace){
        str = str + " "
    }
    return words[0]+str+outstr
}

function lastLine(words,spaces){
    let output = words.join(" ")
    let num = spaces  -(words.length -1)
    str = " "
    while (str.length != num){
        str = str + " "
    }
    return output + str
}

function spreadOutWords(words, maxWidth){
    let spreadOutWordsOutput = []
    let count = 0
    let wordsout = []
    for (i in words){
        count = count + words[i].length
        
        // console.log(words[i],count);
        if (count <=maxWidth){
            wordsout.push(words[i])
            count ++

        }else{
            spreadOutWordsOutput.push(joinWith(wordsout,maxWidth-(wordsout.join("").length)));
            // console.log(wordsout);
            // console.log(words[i],count,"count");
            count = words[i].length
            wordsout = [words[i]]
        }

    }
    spreadOutWordsOutput.push(lastLine(wordsout,maxWidth-(wordsout.join("").length)));
    console.log(spreadOutWordsOutput);
    return spreadOutWordsOutput

}

spreadOutWords(["This", "is", "an", "example", "of", "text", "justification."],16)
spreadOutWords(["What","must","be","acknowledgment","shall","be"],16)

spreadOutWords(["What","must","be","acknowledgment","shall","be"],20)
spreadOutWords(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
,18)
// spreadOutWords(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
// ,20)
