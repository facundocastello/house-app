<script>
  import { css } from "emotion";

  import { colors } from "../utils/constants";

  export let center = false;
  export let bold = false;
  export let fontSm = false;
  export let fontLg = false;
  export let column = false;

  const CardItem = css`
    text-align: ${center && "center"};
    font-weight: ${bold && "bold"};
    font-size: ${fontSm ? ".8em" : fontLg && "1.2em"};
    flex: 0 0 ${column ? `${100 / column - 1}%` : "35%"};
    text-transform: capitalize;
  `;
</script>

<div class={CardItem}>
  <slot />
</div>
