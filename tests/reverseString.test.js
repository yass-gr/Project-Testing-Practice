import reverseString from "../scripts/reverseString";


test('str test 1', () =>{
    let str = 'yassine'
    expect(reverseString(str))
    .toBe('enissay') 
})

test('str test 2', () =>{
    let str = 'yassine sana'
    expect(reverseString(str))
    .toBe('anas enissay') 
})

test('single ch', () =>{
    let str = 'y'
    expect(reverseString(str))
    .toBe('y') 
})

test('empty str', () =>{
    let str = ''
    expect(reverseString(str))
    .toBe('') 
})

test('symbols', () =>{
    let str = "!@#"
    expect(reverseString(str))
    .toBe("#@!") 
})

test('mixed', () =>{
    let str = "AbC123!"
    expect(reverseString(str))
    .toBe("!321CbA") 
})

test('number', () =>{
    let str = 123
    expect(reverseString(str))
    .toBe("321") 
})