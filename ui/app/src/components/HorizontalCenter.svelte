<script>
  import { css } from "emotion";

  const HorizontalCenter = css`
    display: flex;
    justify-content: center;
  `;
</script>

<div class={HorizontalCenter}><slot/></div>
