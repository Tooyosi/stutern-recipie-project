import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Column } from './Grid';
import FoodBg from '../../assets/food-bg.jpg';
import FoodItem from './FoodItem';

const HomeStyle = styled.div`
  header, footer{
    text-align: center;
  }
  main{
    margin: 20px 0;
  }
`;

const Container = styled.dv`
  width: 90%;
  max-width: 1000px;
  margin: auto;
`;

const Header = styled.header`
  height: 250px;
  padding: 60px;
  background: linear-gradient(rgba(0, 0, 0, 7), rgba(0, 0, 0, 7));
  url(${FoodBg});
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const Footer = styled.footer`
  padding: 20px;
  background: #f80;
  color: #fff;
`;

// Stateless Functional Component
class Home extends Component {
  constructor() {
    super();
    this.state = {
     date: (new Date()).getFullYear(),
    };
  }
  render() {
    const { date } = this.state;
    return (
      <HomeStyle>
        <Header>
          <h1>Recipouille</h1>
          <p>Your Trusted Source For Great Food Recipes</p>
        </Header>
        <main>
          <Container>
            <Grid>
              <Column>
                <FoodItem name="Jollof Rice and Plantain" rating="4.5" />
              </Column>
              <Column>
                <FoodItem name="Fried Rice" rating="5.0" />
              </Column>
              <Column>
                <FoodItem name="Alfredo Fettucine and Chicken" rating="3.0" />
              </Column>
            </Grid>
          </Container>
        </main>
        <Footer>
          <p> &copy; {date} Recipouille</p>
        </Footer>
      </HomeStyle>

    )
  }
}



export default Home;