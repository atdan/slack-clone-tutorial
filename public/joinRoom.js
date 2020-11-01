function joinRoom(roomName){
    // Send roomName to the server
    nsSocket.emit('joinRoom', roomName, (newNumberOfMembers) => {
        // want to update the room member total
        document.querySelector('.curr-room-num-users').innerHTML = `${newNumberOfMembers} <span class="glyphicon glyphicon-user"></span></span>`
    
    })
    nsSocket.on("historyCatchUp", history => {
        const messagesUl = document.querySelector("#messages")
        messagesUl.innerHTML = ""
        history.forEach((msg) => {
            const newMsg = buildHTML(msg)
            const currentMessages = messagesUl.innerHTML;
            messagesUl.innerHTML = currentMessages + newMsg
        })

        messagesUl.scrollTo(0,messagesUl.scrollHeight)
    })
    nsSocket.on('updateMembers', (numMembers) => {
        document.querySelector('.curr-room-num-users').innerHTML = `${numMembers} <span class="glyphicon glyphicon-user"></span></span>`
        document.querySelector('.curr-room-text').innerText = `${roomName}`
    })

    let searchbox = document.querySelector("#search-box");
    searchbox.addEventListener('input', (e) => {
        console.log(e.target.value)
        let messages = Array.from(document.getElementsByClassName('message-text'));
        console.log(messages);
        messages.forEach((msg) => {
            if(msg.innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1){
                // message does not contain user search text
                msg.style.display = 'none'
            }else{
                msg.style.display = 'block'
            }
        })
    })
}