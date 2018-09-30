module.exports = function solveEquation(equation) {
  // your implementation
    equation=equation.replace(/\s/g, '');
    const array=[];
    let indexA=equation.search(/\^/),
        a=parseInt(equation.slice(0,indexA)),
        indexB=equation.search(/\*x[+-]/),
        b=parseInt(equation.slice(indexA+2,indexB)),
        c=parseInt(equation.slice(indexB+2));

    let discremenant=(b*b)-(4*a*c);
    if(discremenant>0){
        let x1=Math.round((-b+Math.sqrt(discremenant))/(2*a)),
            x2=Math.round((-b-Math.sqrt(discremenant))/(2*a));

        array.push(x1,x2);
        return array.sort((a,b)=> {
            return a-b;
        });

    }else if(discremenant==0){
        let x=(-b)/(2*a);
        array.push(x);
        return array;
    }
    else if(discremenant<0){
        return console.log("The equation has no solution");
    }


}
