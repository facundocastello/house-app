<script>
  import { Router, Link, Route } from "svelte-routing";
  import ToDosPage from "./src/pages/ToDosPage.svelte";
  import Menu from "./src/components/Menu.svelte";

  export let url = "";
  // import TasksPage from "./src/pages/TasksPage";
  // import Menu from "./src/components/Menu";
  import { colors } from "./src/utils/constants";

  import { css } from "emotion";
</script>

<style>
  :global(body) {
    color: #13293d;
    margin: 0px;
    background-color: #eaebed;
    font-family: monospace;
  }
</style>

<!-- App.svelte -->
<Router {url}>
  <Menu />
  <div>
    <Route path="todos" component={ToDosPage} />
    <!-- <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
    <Route path="/">
      <Home />
    </Route> -->
  </div>
</Router>
