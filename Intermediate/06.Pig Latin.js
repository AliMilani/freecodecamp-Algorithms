function translatePigLatin(str) {
    str = str.toLowerCase();
    const pigLatinRegex = /(a|e|i|o|u)\w+/;
    let result = str.match(pigLatinRegex);
    if (result == null) return str + "ay";

    if (result["index"] == 0) return str + "way";

    return result[0] + str.slice(0, result["index"]) + "ay";
}

console.log(translatePigLatin("consonant"));
