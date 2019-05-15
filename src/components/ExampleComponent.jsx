import { h } from 'hyperapp'

export default ({ nom, prenom }, children) =>
  <div>
    <p>Un composant enfant</p>
    <p>Nom : {nom}</p>
    <p>Prenom: {prenom}</p>
    <p>
      {children}
    </p>
  </div>
