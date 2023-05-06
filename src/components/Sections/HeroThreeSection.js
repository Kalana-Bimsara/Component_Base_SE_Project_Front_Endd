import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import dish0 from "../../assets/image/dish0.jpg";
import dish1 from "../../assets/image/dish1.webp";
import dish2 from "../../assets/image/dish2.webp";
import dish3 from "../../assets/image/dish3.webp";
import dish4 from "../../assets/image/dish4.webp";
import dish5 from "../../assets/image/dish5.webp";
import dish6 from "../../assets/image/dish6.webp";
import dish7 from "../../assets/image/dish7.jpg";
import dish8 from "../../assets/image/dish8.jpg";
import dish9 from "../../assets/image/dish9.jpg";
import dish10 from "../../assets/image/dish10.jpg";
import dish11 from "../../assets/image/dish11.webp";


import HeroThreeContent from "../SectionComponents/HeroThreeContent";
import React, { useEffect, useState } from 'react';

const HeroThreeSection = () => {


  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8084/items/")
      .then(response => response.json())
      .then(json => setFood(json))
  }, [])

  const foodRowItems = [];

  const foodImages = (index) => {
    switch (index) {
      case 0:
        return dish1;
      case 1:
        return dish2;
      case 2:
        return dish3;
      case 3:
        return dish4; 
      case 4:
        return dish5;
      case 5:
        return dish6;
      case 6:
        return dish7;
      case 7:
        return dish0;
      case 8:
        return dish8;
      case 9:
        return dish9;
      case 10:
        return dish10;
      case 11:
        return dish11;
      default:
        return dish6;
    }
  }

  const ITEMS_PER_ROW = 3;
  if (food.length !== 0) {
    let currentFoodRow = [];
    let foodItemRows = [];

    food.map((dish, i) => {
      currentFoodRow.push((
        <Col lg={4} className={classes.dish_col} key={i}>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <HeroThreeContent
              key={dish.id}
              id={dish.id}
              name={dish.name}
              src={foodImages(i)}
              price={dish.price}
            />
          </div>
        </Col>
      ));

      if (i % ITEMS_PER_ROW === 2) {
        foodItemRows.push(currentFoodRow);
        currentFoodRow = [];
      }
    });

    foodItemRows.map((foodItem, i) => {
      foodRowItems.push((i === 0) ? <Row className={classes.row_dish} key={i}>{foodItem}</Row> : <Row key={i}>{foodItem}</Row>);
    });
  }


  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>
        {foodRowItems}
      </Container>
    </section>
  );

};

export default HeroThreeSection;
