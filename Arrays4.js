let arr = [1,3,8,2,5];
let n = arr.length;
//Task : Add element 6 at index 3

let ans = [];
for(i=0 ; i<n ; i++){
    if(i==3){
        ans.push(6);
    }
    ans.push(arr[i]);
}
console.log(ans);