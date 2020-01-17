// Importamos el componente
import App from './App.svelte'
// Creamos App y definimos el target dentro del documento HTML.
const app = new App({
  target: document.querySelector('main'),
  data: {
    quotes: []
  }
});
