document.getElementById("submit-button").addEventListener('click' , function(e){
        e.preventDefault()

        let getZip =  document.getElementById('input').value ;
        console.log(getZip)

        fetch("https://geolocation-db.com/d802faa0-10bd-11ec-b2fe-47a0872c6708/json/")
        .then(res=>res.json())
        .then(data =>(data))

        if(getZip.length == data){
        
        }
})

// function setZip(data){
//    let getZip =  document.getElementById('input').value ;
//    console.log(getZip)
//     const zip = data.zip
//     console.log(zip)
//     if(getZip = zip){
//         console.log(data.zip  , getZip)
//     }
//     else(
//         alert("fuck")
//     )
// }
