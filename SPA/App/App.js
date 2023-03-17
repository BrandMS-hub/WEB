import { Loader } from "./components/loader.js";
import { Header } from "./components/header.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/router.js";

export function App(){
   const $root = document.getElementById("root");
   $root.appendChild(Header());
   $root.appendChild(Posts());
   $root.appendChild(Loader());
   Router();

}

