
document.getElementById('change-bg').addEventListener('click', function(){
    let friends = document.getElementsByClassName('friend');
    for(let friend of friends){
        friend.style.backgroundColor = 'green';
    }
})

document.getElementById('new-friend').addEventListener('click', function(){
    const friend = document.createElement('div');
    friend.innerHTML = `
        <div class="friend">Friend-5</div>
    `
    document.getElementById('friends-container').appendChild(friend);
})