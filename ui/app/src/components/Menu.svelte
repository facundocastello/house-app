<script>
  import { css } from "emotion";
  import { Link as NonStyledLink } from "svelte-routing";

  import { colors } from "../utils/constants";

  const NavBar = css`
    display: flex;
    border-bottom: 3px solid ${colors.borders};
    justify-content: center;
    margin: 0px 10px;
    padding: 10px 0px;
  `;

  const LinksContainer = css`
    display: flex;
    justify-content: space-around;
    width: 50%;
  `;

  const Link = css`
    a {
      color: ${colors.font};
      font-weight: bold;
      text-decoration: none;
      :hover {
        color: ${colors.borders};
      }
    }
  `;
</script>

<div class={NavBar}>
  <div class={LinksContainer}>
    <div class={Link}>
      <NonStyledLink to="/todos">To Dos</NonStyledLink>
    </div>
    <div class={Link}>
      <NonStyledLink to="/tasks">Tasks</NonStyledLink>
    </div>
    <div class={Link}>
      <NonStyledLink to="/tasks">Tasks</NonStyledLink>
    </div>
    <div class={Link}>
      <NonStyledLink to="/tasks">Tasks</NonStyledLink>
    </div>
  </div>
</div>
