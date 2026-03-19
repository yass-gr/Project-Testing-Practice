export default function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return { average: 0, min: 0, max: 0, length: 0 }
    }
    
    const sum = arr.reduce((acc, num) => acc + num, 0)
    const average = sum / arr.length
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    
    return { average, min, max, length: arr.length }
}
