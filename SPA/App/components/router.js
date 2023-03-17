import wp_api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { Post_Card } from "./post_card.js";

export function Router(){
      let {hash} = location;

      document.getElementById("posts").innerHTML=""
      if (!hash || hash === "#/") {
            ajax({
                  url: wp_api.POSTS,
                  cbSuccess: (posts)=>{
                        let html ="";
                        console.log(posts);
                        posts.forEach(post => {html += Post_Card(post)});
                        document.querySelector(".Loader").style.display="none";
                        document.getElementById("posts").innerHTML= html;     
                  },
               });
      }else if(hash.includes("#/search")){
            document.getElementById("posts").innerHTML="buscar"
      }else{
            
      }

      
}