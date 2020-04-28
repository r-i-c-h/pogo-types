import React from 'react';
import styled from 'styled-components/macro';
import { typeColors } from '../globalValues/GlobalConstants';
import { ThemeColorsObj } from '../globalValues/Interfaces';

interface IcoProps {
  name: string;
  isExtra?: boolean;
}

const IconSVG = styled.svg<IcoProps>`
  display: inline-block;
  height: 1em;
  width: 1em;
  font-style: normal;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke: var(--clr-gray);
  stroke-width: 5;
  order: var(--normal-sort-order);
  fill: ${ props => {
    let colorBank: ThemeColorsObj = typeColors;
    return colorBank[props.name];
  }};
  ${ props =>
    props.isExtra &&
    `border-radius: 50%;
    overflow:visible;
    /* transform: scale(1.1); */
    padding: 1px;
    order: var(--override-sort-order);
    border: 1px solid var(--clr-gray);
    box-shadow: 0px 2px 3px 2px rgba(50,50,50,1);
    margin: 0.1em;
    @media screen and (min-width: 30rem){
      margin: 0.2em;
    }
    `
  };
`;

const Ico: React.FC<IcoProps> = ({ name, isExtra }): JSX.Element => {
  const generateUseTag = (name: string) => {
    return (<use href={'#'.concat(name)} />);
  };
  // this href might be better as one of the following two other options:
  //        <use xlink:href=#{name} />
  //        <use xlinkHref=#{name} />

  return (<IconSVG name={name} isExtra={isExtra}> {generateUseTag(name)} </IconSVG>);
};

export default Ico;