<script>
  import { css } from "emotion";

  const SpaceAroundDiv = css`
    display: flex;
    justify-content: space-around;
  `;
</script>

<div class={SpaceAroundDiv}>
  <slot />
</div>
