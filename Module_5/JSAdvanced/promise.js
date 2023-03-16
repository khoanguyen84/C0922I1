// setTimeout(function(){
//     console.log(1);
// }, 3000)

// setTimeout(function(){
//     console.log(2);
// }, 2000)
// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//     }, 2000)
// }, 3000)

let promise = new Promise(
    function executor(resolve, reject)
    {
        // biện luận
        let number = 0;
        if(number != 0){
            return resolve(0);
        }
        return reject({
            code: '404',
            message :'Not found'
        });
    }
)

// chain

promise
    .then(function(number){
        console.log(++number);
        return number;
    })
    .then(function(number){
        console.log(++number);
        return number;
    })
    .then(function(number){
        console.log(++number);
        return number;
    })
    .catch(function(data){
        console.log(data.code, data.message);
        return data
    })
    .finally(function(){
        console.log('done');
    })
