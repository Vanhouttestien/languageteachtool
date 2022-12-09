import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import styles from "../styles/Carousel.module.css";


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className={styles.img} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ds6jpxpzy/image/upload/e_brightness_hsb:-80/v1670446048/student-849822_1920_1_qaly0w.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Find.</h3>
            <p>Find your teaching materials.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ds6jpxpzy/image/upload/e_brightness_hsb:-80/v1670443278/teacher-3765909_1920_ftf5f2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Share.</h3>
            <p>share your teaching material with the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ds6jpxpzy/image/upload/e_brightness_hsb:-80/v1670443278/teacher-3765909_1920_ftf5f2.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Community.</h3>
            <p>Help improve access.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel