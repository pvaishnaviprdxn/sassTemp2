/* Author: 

*/
//let userinput = prompt("Enter any number");
function mynum(){
    let userinput = document.getElementById("input").value;
    let usernum = userinput;
    let num = [1,2,6,4,3,9,7,8,10,23,4,1,23,41,6,12,18,55,71,32];
    let numlen = num.length;
    let sum=0;
    for(let i = 0;i < numlen;i++){
        for(let j=i+1; j < numlen;j++){
            sum = num[i] + num[j];
            if(sum == usernum){
                document.write(num[i]+"&"+num[j]+" ");
            }
        }
    }
}





















