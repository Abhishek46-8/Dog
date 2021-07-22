var url="https://dog.ceo/api/breeds/image/random"

async function getUserData (){
    
    try{
        let resp = await fetch(url)
        let result= await resp.json(); 
        console.log(result.message)
        
        var img=document.getElementById("display");
        img.src=result.message;
    }
    catch(error){
        console.log(error)
    }
}