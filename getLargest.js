const getLargest=(a,b,c)=>{
return Math.max(a,b,c);

}

const getSmallest=(a,b,c)=>{
    return Math.min(a,b,c);
    
    }
    

console.log(getLargest(3,4,6))

module.exports={getLargest:getLargest,
    getSmallest:getSmallest}