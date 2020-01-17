<script>
  import BoxContainer from "./BoxContainer.svelte";
  import SpaceAroundDiv from "./SpaceAroundDiv.svelte";
  import InputsContainer from "./InputsContainer.svelte";
  import Input from "./Input.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Button from "./Button.svelte";

  export let fields = {};

  const defineComponent = (field) => {
    return field.checked !== undefined ? Checkbox : Input;
  };
</script>

<BoxContainer showContent="true">
  <InputsContainer>
    {#each fields as field}
      <svelte:component this={defineComponent(field)} {...field} />
    {:else}not{/each}
  </InputsContainer>

  <SpaceAroundDiv style={{ alignItems: 'center', margin: '10px 0px' }}>
    <Button on:click={() => console.log('asd')}>Add To Do</Button>
  </SpaceAroundDiv>
</BoxContainer>
