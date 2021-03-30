import React from 'react';

const FormAdd = (props) => {
  var title = "";
  var addEdit = "";
  if(props.editMode === false){
    title = "Ajouter une nouvelle personne";
    addEdit = "Ajouter";
  }else{
    title = "Modification de l'information de " + props.nameToEdit;
    addEdit = "Modifier";
  }
  return(
    <form>
        <h3>{title}</h3>
      <input type="text" value={props.newNom} placeholder="Nom" onChange={props.handleNameChange}/>
      <input type="text" value={props.newVille} placeholder="Ville" onChange={props.handleVilleChange}/>
      <button class="succ" onClick={props.handleSubmit}>{addEdit}</button>
    </form>
  );
}

export default FormAdd;