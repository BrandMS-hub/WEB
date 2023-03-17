import wp_api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Loader } from "./components/loader.js";
import { Header } from "./components/header.js";
import { Posts } from "./components/Posts.js";
import { Post_Card } from "./components/post_card.js";

export function App(){
   const $root = document.getElementById("root");
   $root.appendChild(Header());
   $root.appendChild(Posts());
   $root.appendChild(Loader());
   
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
}

