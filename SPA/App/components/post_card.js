export function Post_Card(props){
      let {title, date, slug, _embedded} = props;
      let dateformat = new Date(date).toLocaleDateString(),
            urldefault = _embedded["wp:featuredmedia"]? _embedded["wp:featuredmedia"][0].source_url: "App/assets/loader.svg"

      return `
      <article class="Post_Card">
      <img src="${urldefault}" alt="">    
      <h2>${title.rendered}</h2>
      <p>
            <time datetime="${date}">Fecha:${dateformat} </time>
            <a href="#/${slug}">Ver post</a>
      </p>
      </article> 
      `;

}
