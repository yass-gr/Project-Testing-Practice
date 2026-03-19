export default function caesarCipher(str, shift){
    if (typeof str !== 'string' || typeof shift !== 'number') {return ''}
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const doubled = alphabets.concat(alphabets)
    
    let res = ''

    for (let ch of str){
        if (alphabets.includes(ch)){
            const idx = alphabets.indexOf(ch)
            const newIdx = idx + shift
            res += newIdx >= 0 ? doubled[newIdx] : alphabets[newIdx + 26]
        }
        else if (alphabets.includes(ch.toLowerCase())){
            const idx = alphabets.indexOf(ch.toLowerCase())
            const newIdx = idx + shift
            const char = newIdx >= 0 ? doubled[newIdx] : alphabets[newIdx + 26]
            res += char.toUpperCase()
        }
        else{
            res += ch
        }
    }
    return res
}

console.log(caesarCipher('YASSINE', 3));
