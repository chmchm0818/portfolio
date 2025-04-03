import anime from "animejs";

// タイトルのアニメーション
export const animateTitle = () => {
  return new Promise<void>((resolve) => {
    document.querySelectorAll(".animated-text").forEach((el) => {
      const text = el.textContent || "";
      el.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
      (el as HTMLElement).style.opacity = "1";
    });

    anime
      .timeline()
      .add({
        targets: ".title-1 .letter",
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 100 * (i + 1),
      })
      .add({
        targets: ".title-2 .letter",
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 100 * (i + 1),
        offset: "+=500",
      })
      .finished.then(() => resolve());
  });
};

// ヘッダーとスクロールインジケーターのフェードインアニメーション
export const animateUI = () => {
  console.log("🚀 animateUI を実行！");

  const header = document.querySelector(".header");
  const scrollIndicator = document.querySelector(".scroll-indicator");

  header?.classList.remove("opacity-0");
  scrollIndicator?.classList.remove("opacity-0");

  anime({
    targets: [".header", ".scroll-indicator"],
    opacity: [0, 1],
    translateY: [-20, 0],
    easing: "easeOutQuad",
    duration: 500,
    delay: 100,
  });
};
