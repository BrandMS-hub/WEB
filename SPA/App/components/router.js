import wp_api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { Post_Card } from "./post_card.js";
import { Post } from "./Post.js";

export  async function Router(){
      let {hash} = location;
      const $main = document.getElementById("main");
      $main.innerHTML = "";
      if (!hash || hash === "#/") {
            await ajax({
                  url: wp_api.POSTS,
                  cbSuccess: (posts)=>{
                        let html ="";
                        console.log(posts);
                        posts.forEach(post => {html += Post_Card(post)});
                        $main.innerHTML = html;     
                  },
               });
      }else if(hash.includes("#/search")){
            $main.innerHTML="buscar"
      }else{     
            await ajax({
                  url: `${wp_api.POST}/${localStorage.getItem("WpPostID")}`,
                  cbSuccess: (post)=>{
                        $main.innerHTML = Post(post);
                  },
               });
      }
      document.querySelector(".Loader").style.display="none";

}