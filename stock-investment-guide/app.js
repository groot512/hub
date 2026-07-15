// Application Data
const investmentReasons = [
  {
    title: "높은 수익률 기대",
    description: "주식은 부동산이나 다른 금융상품에 비해 더 높은 수익률을 기대할 수 있는 자산입니다. 최근 20년간의 연평균 수익률 통계를 보면 주식투자가 다른 투자 수단보다 우수한 성과를 보여왔습니다."
  },
  {
    title: "인플레이션에 대한 최고의 방어",
    description: "2000년대 초반 한 달 생활비가 30만 원이었다면, 지금은 같은 생활을 위해 100만 원 이상이 필요합니다. 주식은 기업의 수익 증가와 함께 성장하기 때문에 인플레이션을 이겨내는 데 유리합니다."
  },
  {
    title: "높은 현금 유동성",
    description: "주식은 부동산에 비해 현금화가 매우 쉽습니다. 부동산은 매도부터 입금까지 몇 주에서 몇 달이 걸리지만, 주식은 매도 후 2영업일이면 바로 입금됩니다."
  },
  {
    title: "분산투자를 통한 위험 관리",
    description: "ETF와 같은 상품을 통해 수백 개 기업에 분산 투자할 수 있어, 리스크를 효과적으로 분산시킬 수 있습니다."
  }
];

const tenCommandments = [
  {
    title: "자신만의 투자 원칙을 세워라",
    description: "워런 버핏의 두 가지 투자 원칙처럼 - \"첫째, 돈을 잃지 않는다. 둘째, 첫 번째 원칙을 반드시 지킨다\". 투자의 최고 원칙은 원칙을 지킨다는 것이 원칙입니다."
  },
  {
    title: "투자노트를 작성하라",
    description: "매일 오르락내리락하는 주가에 앞서 내 마음의 중심부터 바로잡아야 합니다. 투자노트 작성은 똑같은 실수를 반복하지 않게 해줍니다."
  },
  {
    title: "종목에 신념을 가져라",
    description: "투자한 기업과 함께 성장한다는 마음가짐으로, 확신과 신념을 갖고 투자해야 합니다."
  },
  {
    title: "장기적인 관점으로 투자하라",
    description: "시장은 하락세보다 상승세를 이어갈 때가 더 많습니다. 지난 50년간 주식이 상승한 평균 기간이 하락했던 기간보다 4.6배 더 길었습니다."
  },
  {
    title: "포트폴리오를 다양화하라",
    description: "모든 달걀을 한 바구니에 담지 말아야 합니다. 투자 포트폴리오를 다양화하여 위험을 분산시키세요."
  },
  {
    title: "객관적인 분석과 연구를 지속하라",
    description: "주식투자는 객관적인 분석과 연구가 필수입니다. 기업의 재무상태, 성장 전망, 경쟁력 등을 심층적으로 분석해야 합니다."
  },
  {
    title: "과도한 현금 보유를 피하라",
    description: "순자산 대비 너무 많은 현금을 보유하지 않는 것이 좋습니다. 인플레이션의 영향으로 현금의 가치는 시간이 지날수록 하락합니다."
  },
  {
    title: "마켓 타이밍보다는 시간 분산 투자하라",
    description: "시장의 저점을 계속해서 잡아낼 수 있는 사람은 아무도 없습니다. 정기적으로 투자할 수 있는 계획을 세우는 것이 중요합니다."
  },
  {
    title: "손실 분석과 교훈으로 피드백하라",
    description: "투자에서 손실을 입었을 때는 왜 그런 결과가 나왔는지 분석하고 교훈을 얻으세요."
  },
  {
    title: "심리적 안정을 유지하고 인내하라",
    description: "탐욕과 공포심 등의 감정적인 반응으로 인한 즉흥적인 매매를 피하고 인내심을 가지고 투자하세요."
  }
];

const quizStocks = [
  {
    hint: "HBM(고대역폭메모리) 분야에서 압도적 우위를 점하고 있으며, AI 반도체 수요 증가에 따른 수혜가 지속될 전망인 메모리 반도체 회사",
    answer: "SK하이닉스",
    code: "000660",
    reason: "HBM(고대역폭메모리) 분야에서 압도적 우위를 점하고 있습니다. 2025년 1분기 D램 시장에서 점유율 세계 1위를 달성했으며, AI 반도체 수요 증가에 따른 수혜가 지속될 전망입니다."
  },
  {
    hint: "국내 대표적인 고배당 우선주로 현재 배당수익률이 약 8%에 달하는 자동차 회사의 우선주",
    answer: "현대차2우B",
    code: "005385",
    reason: "국내 대표적인 고배당 우선주로 현재 배당수익률이 약 8%에 달합니다. 참가적 우선주로 잉여금이 있을 경우 추가 배당도 가능하며, 시가총액과 유통주식 수가 많아 거래가 용이합니다."
  },
  {
    hint: "2025년을 'AI 실생활화 원년'으로 선포하고 자체 개발한 초거대언어모델 하이퍼클로바X를 보유한 IT 기업",
    answer: "네이버",
    code: "035420",
    reason: "2025년을 'AI 실생활화 원년'으로 선포하고 '온 서비스 AI' 전략을 추진 중입니다. 자체 개발한 초거대언어모델 하이퍼클로바X를 통해 AI 주권 확보에 성공했습니다."
  },
  {
    hint: "트럼프 정부의 셰일가스 수출 프로젝트 재개로 LNG선 수주 증가가 기대되는 조선업체",
    answer: "HD현대중공업",
    code: "009540",
    reason: "트럼프 정부의 셰일가스 수출 프로젝트 재개로 LNG선 수주 증가가 기대됩니다. 구체적인 수주 잔고를 바탕으로 안정적인 수익성 개선이 전망됩니다."
  },
  {
    hint: "K-라면의 글로벌 수요 증가로 2024년 3분기 매출이 전년 동기 대비 31% 증가한 식품회사",
    answer: "삼양식품",
    code: "003230",
    reason: "K-라면의 글로벌 수요 증가로 2024년 3분기 매출이 전년 동기 대비 31% 증가했습니다. 2025년 하반기 밀양2공장 가동으로 생산능력 확대가 예정되어 있습니다."
  },
  {
    hint: "AI 통합 브랜드 '카나나'의 베타 테스트와 오픈AI와의 협업이 주목받고 있는 IT 기업",
    answer: "카카오",
    code: "035720",
    reason: "AI 통합 브랜드 '카나나'의 베타 테스트와 오픈AI와의 협업이 주목받고 있습니다. 정부의 AI 정책 지원에 따른 수혜가 기대됩니다."
  },
  {
    hint: "글로벌 방산 수요 증가로 2024년 3분기 영업이익률이 18.1%를 기록한 방위산업체",
    answer: "한화에어로스페이스",
    code: "012450",
    reason: "글로벌 방산 수요 증가로 2024년 3분기 영업이익률이 18.1%를 기록했습니다. 수출 물량을 바탕으로 고수익성 기반의 성장이 지속될 전망됩니다."
  },
  {
    hint: "2025년 하반기 BTS 등 주요 아티스트 컴백이 예정되어 있는 엔터테인먼트 회사",
    answer: "하이브",
    code: "352820",
    reason: "2025년 하반기 BTS 등 주요 아티스트 컴백이 예정되어 있으며, 음반·공연·MD 매출 성장과 수익성 개선이 기대됩니다."
  },
  {
    hint: "국내 유일 원전 주기기 업체로 미국 웨스팅하우스 최신 노형에 주기기를 공급한 트랙레코드를 보유한 에너지 기업",
    answer: "두산에너빌리티",
    code: "034020",
    reason: "국내 유일 원전 주기기 업체로 미국 웨스팅하우스 최신 노형에 주기기를 공급한 트랙레코드를 보유하고 있습니다. SMR 분야에서도 성장 모멘텀이 기대됩니다."
  },
  {
    hint: "여전히 메모리 반도체 분야의 글로벌 리더이며, HBM 분야 추격을 위한 대규모 투자가 예정된 대한민국 대표 전자기업",
    answer: "삼성전자",
    code: "005930",
    reason: "여전히 메모리 반도체 분야의 글로벌 리더이며, HBM 분야 추격을 위한 대규모 투자가 중장기적으로 성과를 낼 것으로 기대됩니다."
  }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let quizAnswered = false;

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  populateCommandments();
  setupQuiz();
}

// Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const heroButtons = document.querySelectorAll('[data-page]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const page = e.target.getAttribute('data-page');
      navigateToPage(page);
      updateActiveNavLink(e.target);
    });
  });

  heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const page = e.target.getAttribute('data-page');
      navigateToPage(page);
      updateActiveNavLink(document.querySelector(`[data-page="${page}"]`));
    });
  });
}

function navigateToPage(page) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  const targetPage = document.getElementById(`${page}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

function updateActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  
  const correspondingNavLink = document.querySelector(`.nav-link[data-page="${activeLink.getAttribute('data-page')}"]`);
  if (correspondingNavLink) {
    correspondingNavLink.classList.add('active');
  }
}

// Ten Commandments
function populateCommandments() {
  const commandmentsList = document.querySelector('.commandments-list');
  
  tenCommandments.forEach((commandment, index) => {
    const commandmentItem = createCommandmentItem(commandment, index + 1);
    commandmentsList.appendChild(commandmentItem);
  });
}

function createCommandmentItem(commandment, number) {
  const item = document.createElement('div');
  item.className = 'commandment-item';
  
  item.innerHTML = `
    <div class="commandment-header">
      <div class="commandment-number">${number}</div>
      <div class="commandment-title">${commandment.title}</div>
      <div class="commandment-toggle">▼</div>
    </div>
    <div class="commandment-content">
      <div class="commandment-text">${commandment.description}</div>
    </div>
  `;
  
  const header = item.querySelector('.commandment-header');
  const content = item.querySelector('.commandment-content');
  
  header.addEventListener('click', () => {
    toggleCommandment(header, content);
  });
  
  return item;
}

function toggleCommandment(header, content) {
  const isActive = header.classList.contains('active');
  
  // Close all other commandments
  const allHeaders = document.querySelectorAll('.commandment-header');
  const allContents = document.querySelectorAll('.commandment-content');
  
  allHeaders.forEach(h => h.classList.remove('active'));
  allContents.forEach(c => c.classList.remove('active'));
  
  // Open clicked commandment if it wasn't active
  if (!isActive) {
    header.classList.add('active');
    content.classList.add('active');
  }
}

// Quiz functionality
function setupQuiz() {
  const restartButton = document.getElementById('restart-quiz');
  restartButton.addEventListener('click', resetQuiz);
  
  resetQuiz();
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  quizAnswered = false;
  
  updateQuizUI();
  showQuestion();
  
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-container').style.display = 'block';
}

function updateQuizUI() {
  document.getElementById('score').textContent = score;
  document.getElementById('current-question').textContent = currentQuestion + 1;
}

function showQuestion() {
  if (currentQuestion >= quizStocks.length) {
    showQuizResult();
    return;
  }
  
  // Update UI first to ensure correct question number is shown
  updateQuizUI();
  
  const quizContainer = document.getElementById('quiz-container');
  const stock = quizStocks[currentQuestion];
  
  quizContainer.innerHTML = `
    <div class="quiz-question">
      <div class="question-text">
        <strong>힌트:</strong> ${stock.hint}
      </div>
      <input type="text" class="answer-input form-control" placeholder="종목명을 입력하세요..." id="answer-input">
      <div class="quiz-buttons">
        <button class="btn btn--outline" id="skip-button">건너뛰기</button>
        <button class="btn btn--primary" id="submit-button">제출</button>
      </div>
      <div class="feedback" id="feedback"></div>
    </div>
  `;
  
  const answerInput = document.getElementById('answer-input');
  const submitButton = document.getElementById('submit-button');
  const skipButton = document.getElementById('skip-button');
  
  quizAnswered = false;
  
  answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !quizAnswered) {
      checkAnswer();
    }
  });
  
  submitButton.addEventListener('click', () => {
    if (!quizAnswered) {
      checkAnswer();
    } else {
      nextQuestion();
    }
  });
  
  skipButton.addEventListener('click', () => {
    if (!quizAnswered) {
      skipQuestion();
    } else {
      nextQuestion();
    }
  });
  
  answerInput.focus();
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer-input').value.trim();
  const correctAnswer = quizStocks[currentQuestion].answer;
  const feedback = document.getElementById('feedback');
  const submitButton = document.getElementById('submit-button');
  const skipButton = document.getElementById('skip-button');
  
  quizAnswered = true;
  
  const isCorrect = userAnswer === correctAnswer;
  
  if (isCorrect) {
    score++;
  }
  
  if (isCorrect) {
    feedback.className = 'feedback correct show';
    feedback.innerHTML = `
      <h4>✅ 정답!</h4>
      <div class="stock-info">
        <strong>${correctAnswer} (${quizStocks[currentQuestion].code})</strong><br>
        ${quizStocks[currentQuestion].reason}
      </div>
    `;
  } else {
    feedback.className = 'feedback incorrect show';
    feedback.innerHTML = `
      <h4>❌ 틀렸습니다</h4>
      <p><strong>정답:</strong> ${correctAnswer}</p>
      <div class="stock-info">
        <strong>${correctAnswer} (${quizStocks[currentQuestion].code})</strong><br>
        ${quizStocks[currentQuestion].reason}
      </div>
    `;
  }
  
  userAnswers.push({
    question: currentQuestion,
    userAnswer: userAnswer,
    correctAnswer: correctAnswer,
    isCorrect: isCorrect
  });
  
  // Update UI immediately after scoring
  updateQuizUI();
  
  submitButton.textContent = '다음 문제';
  skipButton.textContent = '다음 문제';
  
  document.getElementById('answer-input').disabled = true;
}

function skipQuestion() {
  const correctAnswer = quizStocks[currentQuestion].answer;
  const feedback = document.getElementById('feedback');
  
  quizAnswered = true;
  
  feedback.className = 'feedback incorrect show';
  feedback.innerHTML = `
    <h4>⏭️ 건너뛰기</h4>
    <p><strong>정답:</strong> ${correctAnswer}</p>
    <div class="stock-info">
      <strong>${correctAnswer} (${quizStocks[currentQuestion].code})</strong><br>
      ${quizStocks[currentQuestion].reason}
    </div>
  `;
  
  userAnswers.push({
    question: currentQuestion,
    userAnswer: '',
    correctAnswer: correctAnswer,
    isCorrect: false
  });
  
  document.getElementById('submit-button').textContent = '다음 문제';
  document.getElementById('skip-button').textContent = '다음 문제';
  document.getElementById('answer-input').disabled = true;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
}

function showQuizResult() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('quiz-result').classList.remove('hidden');
  
  const finalScore = document.getElementById('final-score');
  const scoreMessage = document.getElementById('score-message');
  
  finalScore.textContent = score;
  
  let messageClass = '';
  let messageText = '';
  
  if (score >= 8) {
    messageClass = 'score-excellent';
    messageText = '🎉 훌륭합니다! 주식투자에 대한 이해도가 매우 높습니다!';
  } else if (score >= 5) {
    messageClass = 'score-good';
    messageText = '👍 좋은 성과입니다! 조금 더 공부하시면 완벽해질 것 같아요.';
  } else {
    messageClass = 'score-needs-improvement';
    messageText = '📚 더 많은 공부가 필요해 보입니다. 투자 이유와 10계명을 다시 읽어보세요!';
  }
  
  scoreMessage.className = `score-message ${messageClass}`;
  scoreMessage.textContent = messageText;
}