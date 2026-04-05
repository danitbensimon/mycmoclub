import { StoreCarousel } from './components/StoreCarousel';

export const StoreSection = () => {
  return (
    <section className="relative bg-black py-12 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-semibold text-white mb-2">
            CMO CLUB <span className="text-sky-500">Store</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Exclusive swag our members received at previous dinners
          </p>
        </div>

        {/* Carousel */}
        <StoreCarousel />
      </div>
    </section>
  );
};
