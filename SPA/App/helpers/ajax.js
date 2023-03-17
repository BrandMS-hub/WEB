export function ajax(props){
      let{ url, cbSuccess} = props

      fetch(url).then(res => res.ok? res.json():Promise.reject(res))
      .then(json=> cbSuccess(json))
      .catch(err=>{
            console.log(err);
            let message = err.statusText||"Ocurrio un error";
            document.getElementById("posts").innerHTML = `<div class="error"><p>${err.status}: ${message}</p></div>`;
            document.querySelector(".loader").style.display = "none";

      })
}

