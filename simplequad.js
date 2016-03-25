var a =0, b=2, c=1;


function discriminant(a,b,c)
{
	return(b*b-4*a*c);
}



var root1=(-b-Math.sqrt(discriminant(a,b,c)))/(2*a);
var root2=(-b+Math.sqrt(discriminant(a,b,c)))/(2*a);

console.log("Root are " +root1+ " "+root2);