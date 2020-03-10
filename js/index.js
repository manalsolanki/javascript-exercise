// 1. Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num){
    result = num /2;
    document.getElementById("result-1").innerHTML =`Half of ${num} is ${result}.`;
    return result;
}
halfNumber(4)
// 2. Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf (num1 ,num2){
    answer=(num1/num2)*100;
    document.getElementById("result-2").innerHTML =`${num1} is ${answer}% of ${num2}`;
    return answer;
}
percentOf(5,15);

// 3. Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      EXTRA CHALLENGE: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius){
    area =  3.14 * radius**2;
    document.getElementById("result-3").innerHTML =`The area for a circle with radius ${radius} is ${area}m`;
    return area;
}
areaOfCircle(3)

// 4. Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

function allFucntionUse(num){
    half=halfNumber(num);
    sqaure=half**2;
    area=areaOfCircle(sqaure); 
    document.getElementById("result-4").innerHTML=area;
    percentage=percentOf(area,sqaure);
   document.getElementById("result-4").innerHTML="percentage of"+ area + "is"+percentage + "of" + sqaure;
}

allFucntionUse(4);