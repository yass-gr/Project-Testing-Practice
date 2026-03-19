export default function reverseString(str){
    if (str === null || str === undefined){return ''}
    else{
        return String(str).split('').reverse().join('')
    }
    
}