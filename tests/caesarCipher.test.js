import caesarCipher from "../scripts/caesarCipher";


test('str test 1',() => {
    let str = 'hello'
    expect(caesarCipher(str, 3))
    .toBe('khoor')
})

test('str test 2',() => {
    let str = 'abc xyz'
    expect(caesarCipher(str, 3))
    .toBe('def abc')
})

test('all upper',() => {
    let str = 'YASSINE'
    expect(caesarCipher(str, 3))
    .toBe('BDVVLQH')
})

test('random case',() => {
    let str = 'HeLLo'
    expect(caesarCipher(str, 3))
    .toBe('KhOOr')
})

test('wrapping',() => {
    let str = 'xyz'
    expect(caesarCipher(str, 3))
    .toBe('abc')
})
test('punctuation',() => {
    let str = 'Hello, World!'
    expect(caesarCipher(str, 3))
    .toBe('Khoor, Zruog!')
})


test('not str',() => {
    let str = 10
    expect(caesarCipher(str, 3))
    .toBe('')
})

test('shift not int',() => {
    let str = 'yassine'
    expect(caesarCipher(str, 'what'))
    .toBe('')
})

test('negative shift',() => {
    let str = 'yassine'
    expect(caesarCipher(str, -3))
    .toBe('vxppfkb')
})


