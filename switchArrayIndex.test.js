const{switchIndexElement} = require('./switchArrayIndex')

test("switch index of elements", ()=>{
    const input = [[2,3],[4,5]];
    const result = switchIndexElement(input);
    expect(result).toEqual([[2,4],[3,5]])
})