var zip2search;
function getZipInput(){
    zip2search = document.getElementById('zip-field').value;
    console.log(zip2search)
}

var link = 'http://ctp-zip-api.herokuapp.com/zip/' + zip2search;

const findZip = (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (event)=>{
        if(event.target.readyState === 4 && event.target.status === 200){
            const data = JSON.parse(event.target.responseText)
            callback(undefined, data)
        }
        else{
            callback('ZipCode not Found. Please try again', undefined)
        }

    })
}


