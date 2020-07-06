function compute(expression) {  
    // TODO - write method definition here
    var total=0;
    var newArray=[];
    var number1=0;
    var number2=0;

     // this function seperates the expression into arrays
    
     function formatArray(expression)  
     newArray(x)

function formatArray(ex)    //creates a new array and pops new numbers into it
{
var number;
var arr=ex.split("");
var counter=1;

for(var i=0;i<arr.length;i++)
{
      if(testNumber(arr[i]==true))
      {
             number+=arr[i]
             counter++

      }
      else{
             number=parseInt(number)
             newArray.push(number);
             if(counter>arr.length)
             {
              newArray.push(arr[i]);
             }        
             arr.splice(i,counter)
      }
      
}


}
function testNumber(x)      //test whole numbers
{
       var i=true;
       if(i==/\d/.test(x)) //test for whole number using regex
       {
           return i;
       }
       else{
           return false
       }
}

newArray(x)
{
       

       for(var i=0;i<x.length;i++)
       {
              if(x[i]=="+")
              {
                     var place=0;
                     number1=parseInt(x[i-1])
                     number2=parseInt(x[i+1])
                 total= number1+number2
                 place=--i
                 x.splice(place,3)
                 x.splice(place,0,total);
              }
              else if(arr[i]=="-")
              {
                     var place=0;
                     number1=parseInt(x[i-1])
                     number2=parseInt(x[i+1])
                 total= number1-number2
                 place=--i
                 x.splice(place,3)
                 x.splice(place,0,total);
             
                }
       }
       
       return total;
}

}


// function testArray(x)
// {
//        switch(x){
//               case "*":

//                      break;

//               case"/":
//                      break;

//               case "+":
//                      break;
       
//               case "-":
//                      break;

//               default:
//                      break;
//        }
// }