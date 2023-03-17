export function Search(){
      const $Form = document.createElement("form"),
      $input = document.createElement("input");
      $Form.classList.add("Form_search");
      $input.name = "search";
      $input.type = "search";
      $input.placeholder = "Buscar...";
      $Form.appendChild($input);
      return $Form;
}