<script>
  import { css } from "emotion";

  import { colors } from "../utils/constants";
  import HorizontalCenter from "./HorizontalCenter.svelte";

  export let title = undefined;
  export let showContent = undefined;
  export let triggerContent = undefined;
  export let padding = undefined;
  export let height = undefined;
  export let margin = undefined;
  export let width = undefined;
  export let widthMD = undefined;
  export let widthLG = undefined;

  const BoxContainer = css`
    background-color: ${colors.containersBackground};
    padding: ${(!showContent && padding) || "10px 0px"};
    border: 2px solid ${colors.borders};
    border-radius: 5px;
    box-shadow: 8px 8px 15px;
    height: ${height};
    margin: ${margin || "10px 5px"};
    width: ${width || "90%"};
    @media (min-width: 700px) {
      width: ${widthMD || "80%"};
    }
    @media (min-width: 968px) {
      width: ${widthLG || "50%"};
    }
  `;

  const H2 = css`
    margin: ${!showContent && "0px"};
  `;
</script>

<!-- export default ({ , ...props }) => ( -->
<div class={BoxContainer}>
  {#if title}
    <HorizontalCenter>
      <h2 class={H2}>{title}</h2 >
      <div on:click={triggerContent}>
        <h2 class={H2}>{showContent ? 'c' : 'a'}</h2>
      </div>
    </HorizontalCenter>
  {/if}
  {#if showContent}
    <slot />
  {/if}
</div>
