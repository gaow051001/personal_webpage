import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import * as styles from "../carousel/carouselBox.module.css";
const CarouselBox = () => {
  return <Carousel indicators={false} interval={6000} controls={false}>
            <Carousel.Item>
              <div className={styles.blockQuoteWrapper}>
                <div className={styles.blockQuote}>
                  <h1 className={styles.blockQuoteH1}>
                    Creativity is intelligence having fun.
                  </h1>
                  <h4 className={styles.blockQuoteH4}>&mdash; Albert Einstein &mdash;</h4>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.blockQuoteWrapper}>
                <div className={styles.blockQuote}>
                  <h1 className={styles.blockQuoteH1}>
                    Code is like humor. When you have to explain it, it's bad.
                  </h1>
                  <h4 className={styles.blockQuoteH4}>&mdash; Cory House &mdash;</h4>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.blockQuoteWrapper}>
                <div className={styles.blockQuote}>
                  <h1 className={styles.blockQuoteH1}>
                    Controlling complexity is the essence of computer programming.
                  </h1>
                  <h4 className={styles.blockQuoteH4}>&mdash; Brian Kernighan &mdash;</h4>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
};
export default CarouselBox;

