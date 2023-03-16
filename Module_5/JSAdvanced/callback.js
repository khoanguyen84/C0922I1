// 1. phải là 1 function
// 2. phải được truyền vào function khác thông qua argument
// 3. phải được thực thi

// function callBack(n1, n2){
//     return n1 + n2;
// }
// function callBack_2(n1, n2){
//     return n1 * n2;
// }

function useCallback(param){
    console.log(param(10, 20));
}

useCallback(function(n1, n2){
    return n1 + n2;
})
useCallback(function(n1, n2){
    return n1 * n2;
})

// function useCallback_2(){
//     console.log(callBack(10, 20));
// }

// useCallback_2();