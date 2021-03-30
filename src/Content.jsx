const Content = (props) => {
  return(
    <>
      <table>
          <tr class="tr-head">
            <th>ID</th>
            <th>Nom</th>
            <th>Ville</th>
          </tr>
        {props.personnes.map(personne=>(
          <tr>
              <td>{personne.id}</td>
              <td>{personne.nom}</td>
              <td>{personne.ville}</td>
              <td>
                <button class="succ" onClick={() => props.handleEdit(personne.id)}>Edit</button>
                &nbsp;<button onClick={() => props.handleDelete(personne.id)}>Suppr.</button>
              </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Content;