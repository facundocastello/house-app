<script>
  import { css } from "emotion";

  let CardContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
</script>

<div class={CardContainer}>
  <slot />
</div>
