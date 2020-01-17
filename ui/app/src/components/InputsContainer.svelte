<script>
  import { css } from "emotion";

  const InputsContainer = css`
    align-items: center;
    margin: "10px 0px";
    display: flex;
    width: 100%;
    flex-direction: column;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
    }
  `;
</script>

<div class={InputsContainer}>
  <slot />
</div>
