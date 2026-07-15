// DOM elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const progressIndicator = document.getElementById('progress-indicator');

// Data from application
const appData = {
  title: "세계가 만일 100명의 마을이라면 - 2025년",
  subtitle: "80억 인구의 세계를 100명의 마을로 축소하여 본 현실",
  sections: [
    {
      id: "population",
      title: "인구 구성과 지역 분포",
      description: "2025년 현재 세계 인구 80억 명을 100명의 마을로 축소하여 표현한 지역별 분포",
      data: {
        regional_distribution: [
          {region: "아시아", count: 58, percentage: 58},
          {region: "아프리카", count: 19, percentage: 19},
          {region: "유럽", count: 10, percentage: 10},
          {region: "북미", count: 8, percentage: 8},
          {region: "남미", count: 5, percentage: 5},
          {region: "오세아니아", count: 1, percentage: 1}
        ],
        demographics: {
          male: 51,
          female: 49,
          under_15: 24,
          adults_15_74: 72,
          over_75: 4,
          average_age: 31,
          life_expectancy: 75
        }
      }
    },
    {
      id: "language_religion",
      title: "언어와 종교의 다양성",
      description: "세계의 언어적, 종교적 다양성을 보여주는 분포도",
      data: {
        languages: [
          {language: "중국어", speakers: 16},
          {language: "영어", speakers: 14},
          {language: "힌디어", speakers: 8},
          {language: "스페인어", speakers: 7},
          {language: "아랍어", speakers: 3},
          {language: "벵골어", speakers: 3},
          {language: "한국어", speakers: 1},
          {language: "기타", speakers: 49}
        ],
        religions: [
          {religion: "기독교", believers: 31},
          {religion: "이슬람교", believers: 23},
          {religion: "무종교", believers: 16},
          {religion: "힌두교", believers: 15},
          {religion: "불교", believers: 7},
          {religion: "민간신앙", believers: 6},
          {religion: "기타", believers: 2}
        ]
      }
    },
    {
      id: "economic_inequality",
      title: "경제적 불평등과 부의 분배",
      description: "전 세계 경제 불평등의 심각성을 보여주는 충격적인 현실",
      data: {
        wealth_distribution: [
          {group: "최부유층 10명", wealth_percentage: 76},
          {group: "중간층 34명", wealth_percentage: 23},
          {group: "빈곤층 56명", wealth_percentage: 1}
        ],
        poverty_stats: {
          absolute_poverty: 11,
          car_owners: 7,
          bank_account: 8,
          malnutrition: 11,
          obesity: 15
        }
      }
    },
    {
      id: "education_digital",
      title: "교육과 디지털 격차",
      description: "교육 수준과 디지털 접근성의 현황과 격차",
      data: {
        education: {
          university_educated: 45,
          illiterate: 10,
          no_education_poverty: 3
        },
        digital_access: {
          internet_smartphone: 66,
          computer_owners: 2,
          digital_excluded: 34
        }
      }
    },
    {
      id: "infrastructure",
      title: "생활 인프라와 기본 서비스",
      description: "기본적인 생활 인프라에 대한 접근성 현황",
      data: {
        basic_services: [
          {service: "안전한 식수", access: 91},
          {service: "전기", access: 82},
          {service: "개선된 위생시설", access: 68},
          {service: "화장실", access: 86},
          {service: "냉장고", access: 67},
          {service: "취사시설", access: 60}
        ]
      }
    },
    {
      id: "democracy",
      title: "정치적 자유와 민주주의 수준",
      description: "전 세계 정치적 자유도와 민주주의 수준 분포",
      data: {
        political_systems: [
          {system: "완전한 민주주의", count: 6},
          {system: "불완전한 민주주의", count: 39},
          {system: "혼합 체제", count: 17},
          {system: "독재 체제", count: 37},
          {system: "기타", count: 1}
        ]
      }
    },
    {
      id: "climate",
      title: "기후위기와 환경 문제",
      description: "2025년 새롭게 부각된 기후변화와 환경 문제의 영향",
      data: {
        climate_risks: {
          at_risk: 75,
          safe: 25,
          flood_risk: 7,
          disaster_deaths_poor_countries: 90
        },
        co2_emissions: [
          {group: "개발도상국 45명", emissions_per_person: 1},
          {group: "유럽 선진국 15명", emissions_per_person: 10},
          {group: "미국인 5명", emissions_per_person: 20}
        ]
      }
    },
    {
      id: "health",
      title: "건강과 의료 서비스",
      description: "전 세계 건강 상태와 질병 현황",
      data: {
        health_issues: [
          {condition: "철분 부족", affected: 70},
          {condition: "비만", affected: 15},
          {condition: "영양실조", affected: 11},
          {condition: "코로나19", affected: 2},
          {condition: "HIV/AIDS", affected: 1},
          {condition: "결핵", affected: 1}
        ],
        life_expectancy: 75
      }
    },
    {
      id: "food_agriculture",
      title: "식량과 농업 현황",
      description: "식량 안보와 농업 현황, 곡물 사용 분배",
      data: {
        grain_usage: [
          {use: "인간 소비", percentage: 48},
          {use: "가축 사료", percentage: 35},
          {use: "바이오연료 등", percentage: 17}
        ],
        food_security: {
          can_choose_food: 16,
          cannot_eat_three_meals: 41,
          agricultural_workers: 20,
          manual_farming: 7
        }
      }
    }
  ]
};

// Chart colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Navigation menu toggle
function initMobileNav() {
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

// Scroll progress indicator
function initScrollProgress() {
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    if (progressIndicator) {
      progressIndicator.style.width = scrollPercent + '%';
    }
  });
}

// Create Charts
function createCharts() {
  // 1. Population Chart
  if (document.getElementById('populationChart')) {
    const populationData = appData.sections[0].data.regional_distribution;
    new Chart(document.getElementById('populationChart'), {
      type: 'doughnut',
      data: {
        labels: populationData.map(item => item.region),
        datasets: [{
          data: populationData.map(item => item.count),
          backgroundColor: chartColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                family: "'Noto Sans KR', sans-serif"
              }
            }
          },
          title: {
            display: true,
            text: '세계 100명의 지역별 분포',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }

  // 2. Language Chart
  if (document.getElementById('languageChart')) {
    const languageData = appData.sections[1].data.languages;
    new Chart(document.getElementById('languageChart'), {
      type: 'bar',
      data: {
        labels: languageData.map(item => item.language),
        datasets: [{
          label: '사용자 수',
          data: languageData.map(item => item.speakers),
          backgroundColor: chartColors[0],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          title: {
            display: true,
            text: '언어 사용자 분포',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          },
          legend: {
            display: false
          }
        }
      }
    });
  }

  // 3. Religion Chart
  if (document.getElementById('religionChart')) {
    const religionData = appData.sections[1].data.religions;
    new Chart(document.getElementById('religionChart'), {
      type: 'pie',
      data: {
        labels: religionData.map(item => item.religion),
        datasets: [{
          data: religionData.map(item => item.believers),
          backgroundColor: chartColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '종교별 분포',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }

  // 4. Wealth Distribution Chart
  if (document.getElementById('wealthChart')) {
    const wealthData = appData.sections[2].data.wealth_distribution;
    new Chart(document.getElementById('wealthChart'), {
      type: 'bar',
      data: {
        labels: wealthData.map(item => item.group),
        datasets: [{
          label: '부의 비율 (%)',
          data: wealthData.map(item => item.wealth_percentage),
          backgroundColor: [chartColors[2], chartColors[0], chartColors[1]],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '부의 불평등',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          },
          legend: {
            display: false
          }
        }
      }
    });
  }

  // 5. Education Chart
  if (document.getElementById('educationChart')) {
    const educationData = appData.sections[3].data.education;
    new Chart(document.getElementById('educationChart'), {
      type: 'doughnut',
      data: {
        labels: ['대학 교육', '문맹', '빈곤으로 인한 무학', '기타 교육'],
        datasets: [{
          data: [
            educationData.university_educated,
            educationData.illiterate,
            educationData.no_education_poverty,
            100 - educationData.university_educated - educationData.illiterate - educationData.no_education_poverty
          ],
          backgroundColor: [chartColors[0], chartColors[2], chartColors[3], chartColors[1]],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '교육 수준',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }

  // 6. Digital Access Chart
  if (document.getElementById('digitalChart')) {
    const digitalData = appData.sections[3].data.digital_access;
    new Chart(document.getElementById('digitalChart'), {
      type: 'pie',
      data: {
        labels: ['인터넷·스마트폰 사용자', '컴퓨터 소유자', '디지털 소외계층'],
        datasets: [{
          data: [
            digitalData.internet_smartphone - digitalData.computer_owners,
            digitalData.computer_owners,
            digitalData.digital_excluded
          ],
          backgroundColor: [chartColors[0], chartColors[1], chartColors[2]],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '디지털 접근성',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }

  // 7. Infrastructure Chart
  if (document.getElementById('infrastructureChart')) {
    const infraData = appData.sections[4].data.basic_services;
    new Chart(document.getElementById('infrastructureChart'), {
      type: 'bar',
      data: {
        labels: infraData.map(item => item.service),
        datasets: [{
          label: '접근 가능한 사람 수',
          data: infraData.map(item => item.access),
          backgroundColor: chartColors[0],
          borderWidth: 1
        }, {
          label: '접근 불가능한 사람 수',
          data: infraData.map(item => 100 - item.access),
          backgroundColor: chartColors[2],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            max: 100
          }
        },
        plugins: {
          title: {
            display: true,
            text: '기본 인프라 접근성',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }

  // 8. Democracy Chart
  if (document.getElementById('democracyChart')) {
    const democracyData = appData.sections[5].data.political_systems;
    new Chart(document.getElementById('democracyChart'), {
      type: 'pie',
      data: {
        labels: democracyData.map(item => item.system),
        datasets: [{
          data: democracyData.map(item => item.count),
          backgroundColor: chartColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '정치체제별 분포',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }

  // 9. CO2 Emissions Chart
  if (document.getElementById('emissionsChart')) {
    const emissionsData = appData.sections[6].data.co2_emissions;
    new Chart(document.getElementById('emissionsChart'), {
      type: 'bar',
      data: {
        labels: emissionsData.map(item => item.group),
        datasets: [{
          label: '1인당 연간 CO2 배출량(톤)',
          data: emissionsData.map(item => item.emissions_per_person),
          backgroundColor: [chartColors[1], chartColors[0], chartColors[2]],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '탄소 배출량 불평등',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }

  // 10. Health Issues Chart
  if (document.getElementById('healthChart')) {
    const healthData = appData.sections[7].data.health_issues;
    new Chart(document.getElementById('healthChart'), {
      type: 'bar',
      data: {
        labels: healthData.map(item => item.condition),
        datasets: [{
          label: '영향 받는 사람 수',
          data: healthData.map(item => item.affected),
          backgroundColor: chartColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          title: {
            display: true,
            text: '건강 문제 현황',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            max: 100
          }
        }
      }
    });
  }

  // 11. Grain Usage Chart
  if (document.getElementById('grainUsageChart')) {
    const grainData = appData.sections[8].data.grain_usage;
    new Chart(document.getElementById('grainUsageChart'), {
      type: 'doughnut',
      data: {
        labels: grainData.map(item => item.use),
        datasets: [{
          data: grainData.map(item => item.percentage),
          backgroundColor: [chartColors[0], chartColors[1], chartColors[2]],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '전 세계 곡물 사용 현황',
            font: {
              family: "'Noto Sans KR', sans-serif",
              size: 16
            }
          }
        }
      }
    });
  }
}

// Initialize all functionality on document load
document.addEventListener('DOMContentLoaded', function() {
  initMobileNav();
  initScrollProgress();
  createCharts();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});