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

// 모달
const shareBox = document.querySelector(".shareBox");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

// modal.addEventListener("click", () => {
//   modal.classList.add(".show");
// });

shareBox.innerHTML = `

`

// 닫기 버튼 클릭
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
// 모달 배경 클릭
modal.addEventListener("click", (e) => {
  modal.classList.remove("show");
});

