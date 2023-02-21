
const friends = ['shakil', 'kawsar', 'alif', 'mamun'];

const checkFriend = (arr) => {
    evenFriend = [];
    for(let friend of arr){
        if(friend.length % 2 === 0){
            evenFriend.push(friend);
        }
    }
    return evenFriend;
}

console.log(checkFriend(friends));