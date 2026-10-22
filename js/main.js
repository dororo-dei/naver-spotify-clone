const benefitSwiper = new Swiper("#service .benefitSwiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
  grabCursor: true,

  // 이전·다음 버튼 연결
  navigation: {
    prevEl: "#service .benefit-prev",
    nextEl: "#service .benefit-next",
  },
});
