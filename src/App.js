import './App.css';
import './my.css';
import React from 'react';
import Content from './Content';
import FormAdd from './FormAdd';
class App extends React.Component{
  state = {
    personnes : [
      {id: 1, nom: 'Ives Rocher', ville: 'Nord-pas-de-calais'},
      {id: 2, nom: 'Anne Louise', ville: 'Aquitaine'},
      {id: 3, nom: 'Jean Michel', ville: 'Toulouse'},
    ],
    newNom: '',
    newVille: '',
    editMode: false,
    indexToEdit: '',
    nameToEdit: '',
    idToEdit: ''
  };

  handleDelete = (id) => {
    const personnes = [...this.state.personnes],
          index = personnes.findIndex(personne => {
            return personne.id === id
          });
    personnes.splice(index, 1);
    this.setState({personnes, newNom: '', newVille: '', editMode: false});
  }
  handleEdit = (id) => {
    
    const personnes = [...this.state.personnes];
    const indexToEdit = personnes.findIndex(personne =>{
      return personne.id === id;
    });
    const personne = personnes[indexToEdit];
    this.setState({personnes, indexToEdit,
                  idToEdit: personne.id,
                  newNom: personne.nom, 
                  newVille: personne.ville, 
                  editMode: true, 
                  nameToEdit: personne.nom
                });

  }
  handleSubmit = (event) => {
    event.preventDefault();
    var personnes = [...this.state.personnes];
    const idMax = getMaxId(personnes);
    
    if(!this.state.editMode){
      if(this.state.newNom === '' || this.state.newVille === ''){
        alert("L'un des champs est vide");
        return 0;
      }else
        personnes.push({id: idMax+1, nom: this.state.newNom, ville: this.state.newVille});
    }else{
      if(this.state.newNom === '' || this.state.newVille === ''){
        alert("L'un des champs est vide");
        return 0;
      }else{
        personnes.splice(this.state.indexToEdit, 1);
        personnes.push({id: this.state.idToEdit, nom: this.state.newNom, ville: this.state.newVille});
      }
    }
    sortById(personnes);
    this.setState({personnes, editMode: false, newNom: '', newVille: ''});
  }
  handleNameChange = (event) => {
    event.preventDefault();
    this.setState({newNom: event.currentTarget.value});
  }
  handleVilleChange = (event) => {
    event.preventDefault();
    this.setState({newVille: event.currentTarget.value});
  }
  
  render(){
    return (
      <>
        <Content personnes = {this.state.personnes} handleDelete = {this.handleDelete} handleEdit = {this.handleEdit}/>
        <FormAdd handleSubmit = {this.handleSubmit} handleNameChange = {this.handleNameChange} handleVilleChange = {this.handleVilleChange} newNom = {this.state.newNom} newVille = {this.state.newVille} editMode = {this.state.editMode} nameToEdit={this.state.nameToEdit}/>
      </>
   );
  }
}
const getMaxId = (personnes) => {
  var maxId = 0;
  for(var i = 0 ; i < personnes.length ; i++)
    maxId = (maxId < personnes[i].id) ? personnes[i].id : maxId;
  return maxId;
}
const sortById = (personnes) => {
  for(var i = 0 ; i < personnes.length ; i++){
    for(var j = 0 ; j < personnes.length ; j++){
      if(personnes[i].id < personnes[j].id){
        var temp = personnes[i];
        personnes[i] = personnes[j];
        personnes[j] = temp;
      }
    }
  }
}
export default App;
