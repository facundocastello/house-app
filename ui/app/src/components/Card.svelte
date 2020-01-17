<script>
  import { css } from "emotion";

  import { colors } from "../utils/constants";
  import Button from "./Button";

  export let successButton = undefined;
  export let primaryButton = undefined;
  export let infoButton = undefined;
  export let secondaryButton = undefined;
  export let warningButton = undefined;
  export let dangerButton = undefined;
  export let successClicked = undefined;
  export let primaryClicked = undefined;
  export let infoClicked = undefined;
  export let secondaryClicked = undefined;
  export let warningClicked = undefined;
  export let dangerClicked = undefined;
  export let props = {};

  const Card = css`
    border-radius: 5px;
    border: 2px solid ${colors.borders};
    background-color: ${colors.cardsBackground};
    box-shadow: 5px 5px 10px;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 90%;
    margin: 10px 5px;
    min-width: 200px;
    justify-content: center;
    padding: 5px;
    @media (min-width: 468px) {
      flex: 0 0 44%;
    }
    @media (min-width: 968px) {
      flex: 0 0 31%;
    }
  `;

  const ButtonsContainer = css`
    margin: 10px 10px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `;
</script>

<div class={Card} {...props}>
  <slot />
  <div class={ButtonsContainer}>
    {#if successButton}
      <Button on:click={successClicked} styleType="success">
        {successButton}
      </Button>
    {/if}
    {#if primaryButton}
      <Button on:click={primaryClicked} styleType="primary">
        {primaryButton}
      </Button>
    {/if}
    {#if infoButton}
      <Button on:click={infoClicked} styleType="info">{infoButton}</Button>
    {/if}
    {#if secondaryButton}
      <Button on:click={secondaryClicked} styleType="secondary">
        {secondaryButton}
      </Button>
    {/if}
    {#if warningButton}
      <Button on:click={warningClicked} styleType="warning">
        {warningButton}
      </Button>
    {/if}
    {#if dangerButton}
      <Button on:click={dangerClicked} styleType="danger">{dangerButton}</Button>
    {/if}
  </div>
</div>
