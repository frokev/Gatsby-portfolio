import * as React from "react";
import styled from "styled-components";
/**
 * Container for responsive page content. 100% width under 1625px.
 */
const Container = (props: any) => (
  <div className={props.className}>
    <div className={"container"}>{props.children}</div>
  </div>
);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  width: 100%;

  .container {
    flex: 0 1 1625px;
  }
`;

export default StyledContainer;
