const swiperHandler = () => {
  // eslint-disable-next-line no-unused-vars, no-undef
  const swiper = new Swiper('.product-slider', {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
};
export default swiperHandler;
