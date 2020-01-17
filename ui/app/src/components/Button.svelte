<script>
  import { css } from "emotion";

  import { colors } from "../utils/constants";

  export let styleType = "borders";

  const Button = css`
    text-align: center;
    padding: 10px 20px;
    background-color: ${colors[styleType]};
    border-radius: 4px;
    box-shadow: 2px 2px 4px;
    color: ${colors.antiFlashWhite};
    font-weight: bold;
    text-transform: capitalize;
    margin: 1px 5px;
    border: 2px solid ${colors.background};
    :hover {
      border: 2px solid ${colors[styleType]};
      color: ${colors[styleType]};
      background-color: ${colors.background};
    }
  `;
</script>

<div class={Button} on:click>
  <slot />
</div>
