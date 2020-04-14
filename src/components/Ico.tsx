import React from 'react';
import styled from 'styled-components/macro';
import { typeColors } from '../globalValues/GlobalConstants';
interface ThemeColors {
  [key: string]: string;
}

const IconSVG = styled.svg`
display: inline-block;
  height: 1.4em;
  width: 1.4em;
  margin: 0.1em;
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: ${props => {
    let colorBank: ThemeColors = typeColors;
    const pogoType: string = (props.name || '');
    return colorBank[pogoType];
  }};
  stroke: var(--clr-gray);
`;

interface Props {
  name: string;
}

const Ico: React.FC<Props> = ({ name }): JSX.Element => {
  const generateUseTag = (name: string) => {
    return (<use href={'#'.concat(name)} />);
  };
  // this href might be better as one of the following two other options:
  // <use xlink:href=#{name} />
  // <use xlinkHref=#{name} />

  return (
    <IconSVG name={name}>
      {generateUseTag(name)}
    </IconSVG>
  );
};

export default Ico;