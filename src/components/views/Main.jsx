import { h } from 'hyperapp'
import ExampleComponent from '../ExampleComponent'

export default () => {
  return (
    <div>
      <h1>Allons coder le ouaibe(h1)</h1>
      <h2>Un h2</h2>
      <h3>Un h3</h3>
      <p>Default text size</p>
      <a href="https://www.google.fr">Un lien vers google</a>
      <ExampleComponent nom="Name" prenom="Lastname">
        <p>Child</p>
      </ExampleComponent>
      <ExampleComponent />
    </div>
  )
}
