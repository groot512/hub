document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".fortune-form");
  const resultBox = document.querySelector(".result-box");

  if (!form || !resultBox) {
    return;
  }

  const fortuneMessages = {
    today: "오늘은 서두르기보다 차분하게 순서를 정리하면 좋은 흐름을 만들 수 있습니다.",
    monthly: "이번 달은 무리하게 넓히기보다, 이미 시작한 일을 안정적으로 마무리하는 것이 좋습니다.",
    yearly: "올해는 꾸준함이 가장 큰 힘이 되는 시기입니다. 작은 기회를 잘 이어가면 좋은 결과가 생길 수 있습니다.",
    saju: "기본 성향은 신중하고 책임감이 강한 흐름으로 볼 수 있습니다. 한 번 정한 방향을 꾸준히 밀고 가는 힘이 있습니다."
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form.username.value.trim();
    const fortuneType = form.fortuneType.value;

    if (!username) {
      resultBox.textContent = "이름을 먼저 입력해 주세요.";
      return;
    }

    const selectedMessage = fortuneMessages[fortuneType];
    resultBox.textContent = `${username}님, ${selectedMessage}`;
  });
});
