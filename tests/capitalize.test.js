import capitalize from "../scripts/capitalize.js"



test('normal string test 1', () => {
    let str = 'yassine'
    expect(capitalize(str)).toBe('Yassine')
})
test('normal string test 2', () => {
    let str = 'sana'
    expect(capitalize(str)).toBe('Sana')
})

test('all Caps test', () => {
    let str = 'YASSINE'
    expect(capitalize(str)).toBe('Yassine')
})

test('already Capitalized test', () => {
    let str = 'Yassine'
    expect(capitalize(str)).toBe('Yassine')
})

test('random Caps test', () => {
    let str = 'yAsSINE'
    expect(capitalize(str)).toBe('Yassine')
})


test('long str test', () => {
    let str = "hello world"
    expect(capitalize(str)).toBe("Hello world")
})


test('empty str test', () => {
    let str = ""
    expect(capitalize(str)).toBe("")
})
test('space str test', () => {
    let str = " "
    expect(capitalize(str)).toBe(" ")
})

test('non letter start str test', () => {
    let str = "!hello"
    expect(capitalize(str)).toBe("!hello")
})

test('unicode ch str test', () => {
    let str = "école"
    expect(capitalize(str)).toBe("École")
})

test('undefined test', () => {
    let str = undefined
    expect(capitalize(str)).toBe("")
})

test('not str test', () => {
    let str = 10
    expect(capitalize(str)).toBe("")
})


test('null str test', () => {
    let str = null
    expect(capitalize(str)).toBe("")
})


