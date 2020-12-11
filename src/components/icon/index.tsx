import React, { memo } from 'react';
import styled from 'styled-components';

export interface IconProps {
  color?: string;
  size?: number | string;
  children?: any;
}

const IconContainer = styled.span<IconProps>`
  display: inline-block;

  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  color: ${(props) => props.color || props.theme.color_grey_1};
  fill: ${(props) => props.color || props.theme.color_grey_1};

  > svg {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;

    color: ${(props) => props.color || props.theme.color_grey_1};
    fill: ${(props) => props.color || props.theme.color_grey_1};
  }
`;

export const Icon = memo(({ color, size = 16, ...props }: IconProps) => {
  return <IconContainer color={color} size={size} {...props} />;
});

export default Icon;
