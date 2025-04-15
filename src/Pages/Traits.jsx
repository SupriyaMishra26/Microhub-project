import React from 'react';
import { Container, Grid } from '@mui/material';
import {
  RocketLaunchRounded,
  RotateLeftRounded,
  ErrorOutlineRounded,
} from '@mui/icons-material';
import {
  FaRegLifeRing,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';
import { VscArrowSmallRight } from 'react-icons/vsc';
import styles from './Traits.module.css';

const Trait = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <RocketLaunchRounded sx={{ width: '70px', fontSize: '3rem' }} />
            <div className={styles.box}>
              <h3>Free Shipping</h3>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className={styles.icon}>
            <RotateLeftRounded sx={{ width: '70px', fontSize: '3rem' }} />
            <div className={styles.box}>
              <h3>Free Returns</h3>
              <p>Within 30 days</p>
            </div>
          </div>
          <div className={styles.icon}>
            <ErrorOutlineRounded sx={{ width: '70px', fontSize: '3rem' }} />
            <div className={styles.box}>
              <h3>Get 20% Off 1 Item</h3>
              <p>when you sign up</p>
            </div>
          </div>
          <div className={styles.icon}>
            <FaRegLifeRing style={{ width: '70px', fontSize: '2.5rem' }} />
            <div className={styles.box}>
              <h3>We Support</h3>
              <p>24/7 amazing services</p>
            </div>
          </div>
        </div>

        <div className={styles.bgBG}>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <h1>Shop Social</h1>
              <p>
                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                mauris sit amet orci.
              </p>
              <div className={styles.socialIcons}>
                <div>
                  <FaFacebookF />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaInstagram />
                </div>
                <div>
                  <FaYoutube />
                </div>
                <div>
                  <FaPinterest />
                </div>
              </div>
            </div>

            <div className={`${styles.gridItem} ${styles.withBefore}`}>
              <h4>
                Get the Latest Deals <br />
                <p>
                  and <br /> receive <span>$20 coupon</span> for first shopping
                </p>
              </h4>
              <div className={styles.inputEmail}>
                <input type="text" placeholder="Enter your Email Address" />
                <button>
                  <VscArrowSmallRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Trait;