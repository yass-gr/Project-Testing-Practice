export default function capitalize(str){
    if (typeof str !== 'string' || !str){return ""}
    else{
         return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
   
}

