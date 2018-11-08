
const quadraticEquation = (a,b,c)=>{
    var d,x1,x2;
    d=(Math.pow(b,2))-4*a*c;
    if (d >= 0){
        x1=(-b+Math.sqrt(d))/2*a;
        x2=(-b-Math.sqrt(d))/2*a;
    }else if (d < 0){
        return "Error! I can't solve the equation!";
    }
    return x1,x2;
}
module.exports = quadraticEquation;
