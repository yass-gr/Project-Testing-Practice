export default function caesarCipher(str, shift){
    if (typeof str !== 'string' || typeof shift !== 'number') {return ''}
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let alphabetsUppercase = alphabets.map(ch  => ch.toUpperCase())
    
    let res = ''

    for (let ch of str){
        if (alphabets.includes(ch)){
            res += alphabets[alphabets.indexOf(ch) + (shift)] ? alphabets[alphabets.indexOf(ch) + (shift)]  : alphabets[ ((alphabets.indexOf(ch) + (shift) ) - (alphabets.length))]
        }
         else if (alphabetsUppercase.includes(ch)){
            res += alphabetsUppercase[alphabetsUppercase.indexOf(ch) + shift] ? alphabetsUppercase[alphabetsUppercase.indexOf(ch) + shift]  : alphabetsUppercase[ ((alphabetsUppercase.indexOf(ch) + shift ) - (alphabetsUppercase.length))]
        }
        else{
            res += ch
        }
        
    }
    return res
}

console.log(caesarCipher('YASSINE', 3));
