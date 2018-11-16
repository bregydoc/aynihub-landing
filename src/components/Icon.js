import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  vertical-align: middle;
  margin: 0 auto;
  width: ${props => (props.width ? props.width : "32px")};
  height: ${props => (props.height ? props.height : "32px")};
  fill: ${props => (props.fill ? props.fill : "#ffffff")};
`;

const Icon = props => {
  const { color, size } = props;
  return (
    <Svg fill={color} height={size} width={size} viewBox="0 0 32 32">
      {props.children}
    </Svg>
  );
};

export default Icon;
