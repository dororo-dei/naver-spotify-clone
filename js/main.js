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

// 내비게이션이 화면 상단에 붙으면 배경색 적용
const heroNav = document.querySelector(".heroNav");
const topNotice = document.querySelector(".topNotice");

function updateNavBackground() {
  const noticeBottom = topNotice.getBoundingClientRect().bottom;

  heroNav.classList.toggle("is-sticky", noticeBottom <= 0);
}

window.addEventListener("scroll", updateNavBackground, {
  passive: true,
});

window.addEventListener("resize", updateNavBackground);

const shareUrl = document.querySelector(".shareUrl");
const copyUrlBtn = document.querySelector(".copyUrlBtn");

// 입력창에 현재 페이지 주소 표시
shareUrl.value = "https://naver.me/GKbXpiIG";

// URL복사 버튼 클릭
copyUrlBtn.addEventListener("click", async (e) => {
  // 클릭이 모달 배경까지 전달되지 않게 처리
  e.stopPropagation();

  try {
    await navigator.clipboard.writeText(shareUrl.value);
    alert("URL이 복사되었습니다.");
  } catch (error) {
    alert("복사하지 못했습니다. 주소를 직접 선택해서 복사해 주세요.");
  }
});

// 처음 페이지를 열었을 때도 현재 스크롤 위치 확인
updateNavBackground();

// // 모달
// const shareBox = document.querySelector(".shareBox");
// const modal = document.querySelector(".modal");
// const closeBtn = document.querySelector(".close");

// // modal.addEventListener("click", () => {
// //   modal.classList.add(".show");
// // });

// shareBox.innerHTML = `

// `

// // 닫기 버튼 클릭
// closeBtn.addEventListener("click", () => {
//   modal.classList.remove("show");
// });
// // 모달 배경 클릭
// modal.addEventListener("click", (e) => {
//   modal.classList.remove("show");
// });
