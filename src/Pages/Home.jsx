import Carousel from '../component/Header/carousel';
import Trait from './Traits';
import ProductSection from '../component/Featured/ProductSection';
function Home() {
  return (
    <div>
      <Carousel />
      {/* Product Categories */}
      <div className="container mx-auto p-4">
        <ProductSection title="Featured Products" filterKey="isFeatured" />
        <ProductSection title="New Arrivals" filterKey="isNewArrival" />
        <ProductSection title="Top Sellers" filterKey="isTopSeller" />
      </div>
      <Trait />
    </div>
  );
}

export default Home;
