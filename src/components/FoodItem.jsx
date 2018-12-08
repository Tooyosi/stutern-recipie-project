import React from 'react';
import styled from 'styled-components';

const FoodItemStyle = styled.div`
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  background: #f80;
  color: #fff;
  overflow: hidden;
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  div{
    padding: 5px 10px;
  }
  h3, h5{
    margin: 5px 0;
  }
  h3{
    font-weight: 300;
    font-size: 20px;
  }
`;

const FoodItem = ({ name, rating }) => (
  <FoodItemStyle>
    <img src="http://placehold.it/400" alt="Food item"/>
    <div>
      <h3>{name}</h3>
      <h5>{rating}</h5>
    </div>
  </FoodItemStyle>
);

export default FoodItem;