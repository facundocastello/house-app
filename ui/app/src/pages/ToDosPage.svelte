<script>
  import { onMount } from "svelte"; // Importamos onMount un método que utilizaremos para detectar cuándo esta montado el componente.
  import Card from "../components/Card.svelte";
  import CardItem from "../components/CardItem.svelte";
  import Form from "../components/Form.svelte";
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";
  import BoxContainer from "../components/BoxContainer.svelte";
  import CardContainer from "../components/CardContainer.svelte";
  import CenterDiv from "../components/CenterDiv.svelte";
  // Creamos una constate API con la URL de la API publica
  import { API } from "../utils/constants";

  let showFilters = false;
  let toDos = [];

  const fetchData = async () => {
    const res = await fetch(`${API}to-dos`);
    toDos = await res.json();
  };

  onMount(fetchData);
</script>

  <Form
    fields={[{ placeholder: 'Title', checked: false }]}
    title={`Add To Do`}
    showContent={true} />
<CenterDiv>

  <BoxContainer
    title={`Filters`}
    showContent={showFilters}
    triggerContent={() => (showFilters = !showFilters)}>
    <CenterDiv>
      <Button>done</Button>
      <Button>not done</Button>
      <Button>other filter</Button>
    </CenterDiv>
  </BoxContainer>
</CenterDiv>

<CenterDiv>
  <Button on:click={fetchData}>asd</Button>
</CenterDiv>
<CardContainer>
  {#each toDos as { to_do_id, title } (to_do_id)}
    <Card
      successClicked={() => console.log('success')}
      successButton="success"
      dangerClicked={() => console.log('danger')}
      dangerButton="danger">
      <CardItem center>{title}</CardItem>
    </Card>
  {:else}
    <p>no hay nada</p>
  {/each}
</CardContainer>
