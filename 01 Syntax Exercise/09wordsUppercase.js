function wordsUppercase(str) { 
    let rgxp = /[^a-zA-Z\d\s:]/g; 
    str = str.replace(rgxp, ''); 
    console.log(str.split(' ').map(s => s.toUpperCase()).join(', ')); //almost xdd
    
    
    // let printline = '', arr = [];
    // for  (let x = 0; x < str.length -1; x++) {
    //     let currCharr = str[x]; 
    //     let nextChar = str[x+1] 
    //     printline += currCharr.toUpperCase(); 
    //     let num = nextChar.charCodeAt(0); 
    //     if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
    //         continue;
    //     } else {
    //         arr.push(printline);
    //         x++; 
    //         printline = '';
    //     }
    // } 
    // console.log(arr);
} //  66/100
wordsUppercase('Hi, how are you?'); 
wordsUppercase('hello');