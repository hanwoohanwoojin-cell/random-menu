const MENUS = [
  // 한식 (4)
  {
    name: "김치찌개",
    category: "한식",
    emoji: "🍲",
    image: "images/kimchi-jjigae.jpg",
    desc: "얼큰하고 깊은 국물에 흰쌀밥 한 공기 뚝딱!",
    theme: {
      bgBase: "#fff0ed",
      bgCheck: "rgba(220, 38, 38, 0.09)",
      icons: ["🍲", "🌶️", "🥬", "🍚"],
    },
  },
  {
    name: "비빔밥",
    category: "한식",
    emoji: "🥗",
    image: "images/bibimbap.jpg",
    desc: "고소한 참기름 향과 다채로운 나물의 완벽한 조화!",
    theme: {
      bgBase: "#f4fbe9",
      bgCheck: "rgba(101, 163, 13, 0.09)",
      icons: ["🥗", "🍳", "🥕", "🍚"],
    },
  },
  {
    name: "제육볶음",
    category: "한식",
    emoji: "🍖",
    image: "images/jeyuk-bokkeum.jpg",
    desc: "매콤달콤한 불향 가득, 실패 없는 든든한 한 끼!",
    theme: {
      bgBase: "#fff1e8",
      bgCheck: "rgba(234, 88, 12, 0.1)",
      icons: ["🍖", "🌶️", "🧅", "🍚"],
    },
  },
  {
    name: "삼겹살",
    category: "한식",
    emoji: "🥓",
    image: "images/samgyeopsal.jpg",
    desc: "노릇노릇 구워 쌈 싸 먹으면 오늘 하루 피로가 싹!",
    theme: {
      bgBase: "#fdf3e7",
      bgCheck: "rgba(180, 83, 9, 0.09)",
      icons: ["🥓", "🥬", "🧄", "🔥"],
    },
  },

  // 중식 (3)
  {
    name: "짜장면",
    category: "중식",
    emoji: "🍜",
    image: "images/jjajangmyeon.jpg",
    desc: "윤기 좌르르 달콤짭짤한 춘장 소스, 언제 먹어도 꿀맛!",
    theme: {
      bgBase: "#f9f3e8",
      bgCheck: "rgba(146, 64, 14, 0.09)",
      icons: ["🍜", "🥢", "🥒", "🥟"],
    },
  },
  {
    name: "짬뽕",
    category: "중식",
    emoji: "🌶️",
    image: "images/jjamppong.jpg",
    desc: "불맛 가득 얼큰한 국물로 속까지 시원하게!",
    theme: {
      bgBase: "#ffecec",
      bgCheck: "rgba(225, 29, 72, 0.1)",
      icons: ["🌶️", "🦐", "🦑", "🍜"],
    },
  },
  {
    name: "마라탕",
    category: "중식",
    emoji: "🥘",
    image: "images/malatang.jpg",
    desc: "알싸하고 중독적인 얼얼함, 원하는 재료 듬뿍!",
    theme: {
      bgBase: "#fff0e6",
      bgCheck: "rgba(194, 65, 12, 0.11)",
      icons: ["🥘", "🌶️", "🍄", "🥬"],
    },
  },

  // 일식 (3)
  {
    name: "돈까스",
    category: "일식",
    emoji: "🍛",
    image: "images/tonkatsu.jpg",
    desc: "겉은 바삭, 속은 촉촉! 새콤달콤 소스에 콕!",
    theme: {
      bgBase: "#fef8e7",
      bgCheck: "rgba(217, 119, 6, 0.09)",
      icons: ["🍛", "🥩", "🥬", "🍋"],
    },
  },
  {
    name: "초밥",
    category: "일식",
    emoji: "🍣",
    image: "images/sushi.jpg",
    desc: "신선한 회와 부드러운 밥의 깔끔하고 완벽한 조합!",
    theme: {
      bgBase: "#eef7ff",
      bgCheck: "rgba(37, 99, 235, 0.08)",
      icons: ["🍣", "🐟", "🥢", "🍵"],
    },
  },
  {
    name: "라멘",
    category: "일식",
    emoji: "🍥",
    image: "images/ramen.jpg",
    desc: "진하고 깊은 육수에 쫄깃한 면발, 반숙 계란까지!",
    theme: {
      bgBase: "#fff8eb",
      bgCheck: "rgba(202, 138, 4, 0.09)",
      icons: ["🍥", "🍜", "🥚", "🥢"],
    },
  },

  // 양식 (3)
  {
    name: "크림 파스타",
    category: "양식",
    emoji: "🍝",
    image: "images/cream-pasta.jpg",
    desc: "부드럽고 고소한 크림 소스가 면에 쏙 배어든 맛!",
    theme: {
      bgBase: "#fdfaf0",
      bgCheck: "rgba(202, 138, 4, 0.08)",
      icons: ["🍝", "🧀", "🍄", "🌿"],
    },
  },
  {
    name: "수제 버거",
    category: "양식",
    emoji: "🍔",
    image: "images/burger.jpg",
    desc: "육즙 가득 패티와 아삭한 채소를 한 입 크게!",
    theme: {
      bgBase: "#fff5e6",
      bgCheck: "rgba(234, 88, 12, 0.09)",
      icons: ["🍔", "🍟", "🧀", "🍅"],
    },
  },
  {
    name: "피자",
    category: "양식",
    emoji: "🍕",
    image: "images/pizza.jpg",
    desc: "쭉 늘어나는 치즈와 풍성한 토핑의 행복한 유혹!",
    theme: {
      bgBase: "#fff3e6",
      bgCheck: "rgba(220, 38, 38, 0.09)",
      icons: ["🍕", "🧀", "🍅", "🌿"],
    },
  },

  // 분식 (3)
  {
    name: "떡볶이",
    category: "분식",
    emoji: "🍢",
    image: "images/tteokbokki.jpg",
    desc: "매콤달콤 쫀득한 떡에 어묵 국물까지 완벽한 조합!",
    theme: {
      bgBase: "#ffefe8",
      bgCheck: "rgba(239, 68, 68, 0.1)",
      icons: ["🍢", "🌶️", "🥚", "🔥"],
    },
  },
  {
    name: "김밥",
    category: "분식",
    emoji: "🍙",
    image: "images/gimbap.jpg",
    desc: "알록달록 속재료가 꽉 찬 고소하고 든든한 한 줄!",
    theme: {
      bgBase: "#f2faf4",
      bgCheck: "rgba(22, 163, 74, 0.085)",
      icons: ["🍙", "🥕", "🥒", "🥚"],
    },
  },
  {
    name: "순대",
    category: "분식",
    emoji: "🥢",
    image: "images/sundae.jpg",
    desc: "쫄깃한 당면 순대를 소금이나 떡볶이 국물에 콕!",
    theme: {
      bgBase: "#f8f2f5",
      bgCheck: "rgba(136, 19, 55, 0.085)",
      icons: ["🥢", "🍢", "🧂", "🌶️"],
    },
  },

  // 아시안 (2)
  {
    name: "쌀국수",
    category: "아시안",
    emoji: "🥣",
    image: "images/pho.jpg",
    desc: "따뜻하고 담백한 육수로 가볍고 든든하게 한 그릇!",
    theme: {
      bgBase: "#f1fbf5",
      bgCheck: "rgba(16, 185, 129, 0.09)",
      icons: ["🥣", "🌿", "🍋", "🥢"],
    },
  },
  {
    name: "팟타이",
    category: "아시안",
    emoji: "🍤",
    image: "images/pad-thai.jpg",
    desc: "탱글한 새우와 새콤달콤 볶음면, 고소한 땅콩 토핑까지!",
    theme: {
      bgBase: "#fff6e5",
      bgCheck: "rgba(245, 158, 11, 0.1)",
      icons: ["🍤", "🍋", "🥜", "🌿"],
    },
  },

  // 디저트 (3)
  {
    name: "딸기 케이크",
    category: "디저트",
    emoji: "🍰",
    image: "images/strawberry-cake.jpg",
    desc: "부드러운 생크림과 상큼달콤한 딸기의 행복한 만남!",
    theme: {
      bgBase: "#fff0f5",
      bgCheck: "rgba(236, 72, 153, 0.09)",
      icons: ["🍰", "🍓", "🧁", "☕"],
    },
  },
  {
    name: "크로플",
    category: "디저트",
    emoji: "🧇",
    image: "images/croffle.jpg",
    desc: "겉바속촉 버터 향 가득 크로플 위에 바닐라 아이스크림 한 스쿱!",
    theme: {
      bgBase: "#fef6e7",
      bgCheck: "rgba(180, 83, 9, 0.09)",
      icons: ["🧇", "🍨", "🍯", "☕"],
    },
  },
  {
    name: "마카롱",
    category: "디저트",
    emoji: "🧁",
    image: "images/macaron.jpg",
    desc: "쫀득한 꼬끄와 달콤한 필링, 한 입에 기분이 사르르!",
    theme: {
      bgBase: "#f8f0ff",
      bgCheck: "rgba(168, 85, 247, 0.085)",
      icons: ["🧁", "🍬", "🎀", "☕"],
    },
  },
];

// 이미지 미리 로드하여 슬롯 전환 시 깜빡임 방지
MENUS.forEach((menu) => {
  const img = new Image();
  img.src = menu.image;
});

const resultStage = document.getElementById("result-stage");
const menuEmojiEl = document.getElementById("menu-emoji");
const menuPhotoEl = document.getElementById("menu-photo");
const menuCategoryEl = document.getElementById("menu-category");
const menuNameEl = document.getElementById("menu-name");
const menuDescEl = document.getElementById("menu-desc");
const recommendBtn = document.getElementById("recommend-btn");
const btnTextEl = recommendBtn.querySelector(".btn-text");
const filterBtns = document.querySelectorAll(".filter-btn");
const historySection = document.getElementById("history-section");
const historyList = document.getElementById("history-list");
const photoBgEl = document.getElementById("photo-bg");
const floatingFoodEls = document.querySelectorAll(".floating-food");

let selectedCategory = "전체";
let lastPickedName = null;
let isRolling = false;
const recentHistory = [];

// 이미지 로드 실패 시 이모지 폴백
menuPhotoEl.addEventListener("error", () => {
  menuPhotoEl.classList.add("hidden");
  menuEmojiEl.classList.remove("hidden");
});

// 카테고리 필터 클릭 이벤트
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isRolling) return;
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.category;
  });
});

function getFilteredMenus() {
  if (selectedCategory === "전체") return MENUS;
  return MENUS.filter((menu) => menu.category === selectedCategory);
}

function pickRandomMenu(pool, excludeName = null) {
  if (pool.length <= 1) return pool[0];
  const candidates = excludeName
    ? pool.filter((menu) => menu.name !== excludeName)
    : pool;
  const idx = Math.floor(Math.random() * candidates.length);
  return candidates[idx];
}

function applyFoodTheme(menu) {
  if (!menu.theme) return;
  const root = document.documentElement;
  root.style.setProperty("--bg-base", menu.theme.bgBase);
  root.style.setProperty("--bg-check", menu.theme.bgCheck);

  // 선택된 음식 사진을 은은하게 블러해 배경 무드 반영
  photoBgEl.style.backgroundImage = `url("${menu.image}")`;
  photoBgEl.classList.add("visible");

  // 배경에 떠다니는 음식 아이콘들을 해당 음식과 어울리는 아이콘으로 교체
  const icons = menu.theme.icons;
  floatingFoodEls.forEach((el, idx) => {
    el.textContent = icons[idx % icons.length];
  });
}

function renderMenu(menu, isFinal = false) {
  menuEmojiEl.textContent = menu.emoji;
  menuEmojiEl.classList.add("hidden");
  menuPhotoEl.src = menu.image;
  menuPhotoEl.alt = `${menu.name} 사진`;
  menuPhotoEl.classList.remove("hidden");

  menuNameEl.textContent = menu.name;
  menuCategoryEl.textContent = menu.category;
  menuCategoryEl.dataset.category = menu.category;
  menuCategoryEl.classList.remove("hidden");
  menuDescEl.textContent = isFinal ? menu.desc : "오늘의 행운의 메뉴를 고르는 중...";
}

function updateHistory(menu) {
  recentHistory.unshift(menu);
  if (recentHistory.length > 5) {
    recentHistory.pop();
  }

  historySection.classList.remove("hidden");
  historyList.innerHTML = recentHistory
    .map((item) => `<li class="history-item">${item.emoji} ${item.name}</li>`)
    .join("");
}

function recommendMenu() {
  if (isRolling) return;

  const pool = getFilteredMenus();
  const finalMenu = pickRandomMenu(pool, lastPickedName);

  isRolling = true;
  recommendBtn.disabled = true;
  btnTextEl.textContent = "메뉴 고르는 중...";
  resultStage.classList.remove("picked");
  resultStage.classList.add("rolling");

  let step = 0;
  const totalSteps = 14;
  let delay = 55;

  function rollStep() {
    step += 1;
    const tempMenu = pickRandomMenu(pool);
    renderMenu(tempMenu, false);

    if (step < totalSteps) {
      delay += 12; // 점점 느려지는 슬롯 효과
      setTimeout(rollStep, delay);
    } else {
      renderMenu(finalMenu, true);
      applyFoodTheme(finalMenu);
      lastPickedName = finalMenu.name;
      resultStage.classList.remove("rolling");
      // 애니메이션 재실행을 위해 reflow 트리거
      void resultStage.offsetWidth;
      resultStage.classList.add("picked");

      updateHistory(finalMenu);
      launchConfetti();

      isRolling = false;
      recommendBtn.disabled = false;
      btnTextEl.textContent = "다른 메뉴 추천하기";
    }
  }

  rollStep();
}

recommendBtn.addEventListener("click", recommendMenu);

/* 간단한 컨페티(폭죽) 파티클 효과 */
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animationId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function launchConfetti() {
  const colors = ["#ff6b35", "#fbbf24", "#34d399", "#60a5fa", "#f472b6", "#a78bfa"];
  const originX = canvas.width / 2;
  const originY = canvas.height / 2;

  for (let i = 0; i < 48; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 7;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: 5 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      life: 1,
    });
  }

  if (!animationId) {
    animateConfetti();
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles = particles.filter((p) => p.life > 0);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.22; // 중력
    p.rotation += p.vRot;
    p.life -= 0.018;

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
    ctx.restore();
  }

  if (particles.length > 0) {
    animationId = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animationId = null;
  }
}
