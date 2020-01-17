<script>
  import { css } from "emotion";

  const CenterDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  `;
</script>

<div class={CenterDiv}><slot/></div>
