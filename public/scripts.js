const username = prompt("Enter your username? ") // prompt the user to enter his username

const socket = io('http://localhost:9000', { // here we connect to the socket and use
    query: {                                 // use the options to send the username 
        username                             // the user provided which will be connected
    }                                        // to the main namespace(NS) i.e. /
});

let nsSocket = ""; // we setup an initial global variable

// down here we have the socket listen for the 'nsList' event which will be sent from the server
// which is going to run a callback whenever that happens and assign whatever it gets from the server to 'nsData'
socket.on('nsList', (nsData) => {
    let namespacesDiv = document.querySelector('.namespaces');
    namespacesDiv.innerHTML = "";
    nsData.forEach((ns) => {
        namespacesDiv.innerHTML += `<div class="namespace" ns=${ns.endpoint} ><img src="${ns.img}" /></div>`
    })

    // Add clickListener to each Namespace (NS)
    console.log(document.getElementsByClassName('namespace'))
    Array.from(document.getElementsByClassName('namespace')).forEach(elem => {

        elem.addEventListener('click', e => {
            const nsEndpoint = elem.getAttribute('ns');
            joinNs(nsEndpoint)
        })
    })
    joinNs('/anime')
    
})

