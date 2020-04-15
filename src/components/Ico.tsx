import React from 'react';
import styled from 'styled-components/macro';
import { typeColors } from '../globalValues/GlobalConstants';
interface ThemeColorsObj {
  [key: string]: string;
}

const IconSVG = styled.svg<Props>`
display: inline-block;
  height: 1.4em;
  width: 1.4em;
  margin: 0.1em;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke: var(--clr-gray);
  stroke-width: 5;
  fill: ${(props: Props) => {
    let colorBank: ThemeColorsObj = typeColors;
    const pogoType: string = (props.name || '');
    return colorBank[pogoType];
  }};
`;

interface Props {
  name: string;
  isExtra?: boolean | undefined;
}

const Ico: React.FC<Props> = ({ name }): JSX.Element => {
  const generateUseTag = (name: string) => {
    return (<use href={'#'.concat(name)} />);
  };
  // this href might be better as one of the following two other options:
  //        <use xlink:href=#{name} />
  //        <use xlinkHref=#{name} />

  return (
    <IconSVG name={name}>
      {generateUseTag(name)}
    </IconSVG>
  );
};

export default Ico;