const quadraticEquation = require('./FirstFunc')


test('Adds 1, -4, 4 to equal 2',() =>{
    expect(quadraticEquation(1,-4,4)).toBe(2);
})

test('Adds 1, 3, -4 to equal -4, 1',() =>{
    expect(quadraticEquation(1,3,-4)).toBe(-4,1)
})

test('Adds 1, -5, 9 to equal Error', ()=>{
    expect(quadraticEquation(1,-5,9)).toString("Error! I can't resolve the equation!")
})

