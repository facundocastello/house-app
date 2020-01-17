<script>
  import { css } from "emotion";

  import { colors } from "../utils/constants";

  const Label = css`
    font-weight: bold;
    text-align: center;
  `;

  const Text = css`
    border: 2px solid ${colors.borders};
    background-color: ${colors.background};
    padding: 5px;
    margin: 5px;
    width: 170px;
    border-radius: 3px;
    font-family: monospace;
  `;

  const TextArea = css`
    border: 2px solid ${colors.borders};
    background-color: ${colors.background};
    padding: 5px;
    margin: 5px;
    width: 170px;
    border-radius: 3px;
  `;

  export let placeholder = {};
  export let type = {};
  export let props = {};

  // $: {
  //   switch (props.type) {
  //     case "textarea":
  //       component = TextArea;
  //       break;
  //   }
  // }
</script>

<div>
  <div class={Label}>{placeholder}</div>
  <!-- <svelte:component class={componentClass} this={component} {...props} /> -->
  {#if type === 'textarea'}
    <textarea class={TextArea} {...props}/>
  {:else}
    <input class={Text} {...props}/>
  {/if}
</div>
