const url="https://625ba98c50128c570206280c.mockapi.io/priya/iceandfireapi"
async function Suman(url)
{
    let data = await fetch(url)
    if(data.ok)
    {
        return(data.json())
    }else{
        return data.status;
    }
    
}



fetch(url)
.then((response) => response.json())
.then((data) => console.log(JSON.stringify(data)));

const data = {
    "name":"A Feast for Crows",
    "isbn":"888888",
    "numberofpages":"354",
    "authors":["George R. R. Martin"],
    "publishername":"yuvi",
    "released":"2055-11-28T13:28:17.125Z",
    "characters":"73715",
}

fetch(url,
{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});
