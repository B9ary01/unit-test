const each=require("jest-each").default;


const {getLargest, getSmallest}=require("./getLargest");

describe("describe:: ",()=>{

test("get largest",()=> {
    const ans=(getLargest(4,5,6));

    expect(ans).toBe(6);
});

each([
    [[2,3,4],4],
    [[2,34,64],64],
    [[42,43,74],74]

]).test("-> ",(arr,expected)=>{
expect(getLargest(...arr)).toEqual(expected);

});

});



describe("describe: smallest : ",()=>{

test("get smallest --- -> ",()=> {
    const ans=(getSmallest(4,5,6));

    expect(ans).toBe(4);
});

each([
    [[2,3,4],2],
    [[3,34,64],3],
    [[42,43,74],42]

]).test("-> ",(arr,expected)=>{
expect(getSmallest(...arr)).toEqual(expected);

});

});