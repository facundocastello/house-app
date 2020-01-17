<script>
  import { css } from "emotion";

  import { colors } from "../utils/constants";

  export let placeholder = undefined;
  export let checked = undefined;

  const Label = css`
    font-weight: bold;
    text-align: center;
  `;

  const HiddenCheckbox = css`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    &:focus {
      box-shadow: 0 0 0 2px ${colors.borders};
    }
  `;

  const checkedStyles = css`
    background-color: ${colors.background};
  `;
  const uncheckedStyles = css`
    background-color: ${colors.background};
  `;

  const Icon = css`
    fill: none;
    stroke: ${colors.borders};
    stroke-width: 4px;
    z-index: 1000;
    visibility: ${checked ? "visible" : "hidden"};
  `;

  const CheckboxContainer = css`
    display: inline-block;
    vertical-align: middle;
  `;

  const StyledCheckbox = css`
    margin: 10px;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    transition: all 150ms;
    ${checked ? checkedStyles : uncheckedStyles};
  `;

  const InputContainer = css`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
</script>

<div class={InputContainer}>
  <div class={Label}>{placeholder}</div>
  <label>
    <div class={CheckboxContainer}>
      <input type="checkbox" class={HiddenCheckbox} {checked} />
      <div class={StyledCheckbox} {checked}>
        <svg class={Icon} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  </label>
</div>
