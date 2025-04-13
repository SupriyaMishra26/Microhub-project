import { useProduct } from "../../context/ProductContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProductSection = ({ title, filterKey }) => {
  const { products } = useProduct();
  const filtered = products.filter(product => product[filterKey]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.sliderContainer}>
        <div className={`${styles.swiperButton} ${styles.swiperButtonPrev}`}>
          <IoIosArrowBack />
        </div>
        <div className={`${styles.swiperButton} ${styles.swiperButtonNext}`}>
          <IoIosArrowForward />
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: `.${styles.swiperButtonPrev}`,
            nextEl: `.${styles.swiperButtonNext}`,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className={styles.swiper}
        >
          {filtered.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection;