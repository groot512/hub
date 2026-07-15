// 모두보훈 드림 웹 애플리케이션 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // DOM 요소들
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const applicationBtn = document.getElementById('applicationBtn');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    // 모바일 메뉴 토글 기능
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('open');
        });
    }

    // 부드러운 스크롤 네비게이션
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // 모바일 메뉴 닫기
                if (mobileMenuToggle && mainNav) {
                    mobileMenuToggle.classList.remove('active');
                    mainNav.classList.remove('open');
                }
                
                // 부드러운 스크롤
                const offsetTop = targetSection.offsetTop - 80; // 네비게이션 높이 고려
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 스크롤 시 네비게이션 표시/숨김
    let lastScrollY = 0;
    let ticking = false;

    function updateNavVisibility() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            mainNav.classList.add('visible');
        } else {
            mainNav.classList.remove('visible');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateNavVisibility);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);

    // 스크롤 애니메이션 설정
    const animationElements = [
        { selector: '.service-stats', animation: 'fade-in', delay: 0 },
        { selector: '.service-details', animation: 'fade-in', delay: 200 },
        { selector: '.benefit-card', animation: 'fade-in', delay: 100 },
        { selector: '.process-step', animation: 'slide-in-left', delay: 150 },
        { selector: '.discount-info', animation: 'fade-in', delay: 0 },
        { selector: '.application-content', animation: 'fade-in', delay: 0 },
        { selector: '.contact-info', animation: 'fade-in', delay: 0 },
        { selector: '.faq-item', animation: 'fade-in', delay: 100 }
    ];

    // 각 애니메이션 요소에 클래스 추가
    animationElements.forEach(item => {
        const elements = document.querySelectorAll(item.selector);
        elements.forEach((element, index) => {
            element.classList.add(item.animation);
            element.style.transitionDelay = `${item.delay * index}ms`;
        });
    });

    // Intersection Observer를 사용한 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 애니메이션 요소들 관찰
    const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // 가입 신청 버튼 클릭 핸들러
    if (applicationBtn) {
        applicationBtn.addEventListener('click', function() {
            // 구글폼 준비 중 알림
            showNotification('구글폼을 준비 중입니다. 곧 서비스가 시작됩니다!', 'info');
            
            // 실제 구글폼이 준비되면 아래 주석을 해제하고 링크를 업데이트하세요
            // window.open('https://forms.google.com/your-form-link', '_blank');
        });
    }

    // 통계 카운터 애니메이션
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + '만명';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '만명';
            }
        }
        
        updateCounter();
    }

    // 통계 섹션이 보일 때 카운터 애니메이션 실행
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('300')) {
                        animateCounter(stat, 300);
                    }
                });
                
                const breakdownStrongs = entry.target.querySelectorAll('.breakdown-item strong');
                breakdownStrongs.forEach(strong => {
                    const text = strong.textContent;
                    if (text.includes('240')) {
                        animateCounter(strong, 240);
                    } else if (text.includes('60')) {
                        animateCounter(strong, 60);
                    }
                });
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const serviceStats = document.querySelector('.service-stats');
    if (serviceStats) {
        statsObserver.observe(serviceStats);
    }

    // 알림 표시 함수
    function showNotification(message, type = 'info') {
        // 기존 알림 제거
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // 새 알림 생성
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="알림 닫기">&times;</button>
            </div>
        `;

        // 스타일 적용
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: type === 'info' ? 'var(--color-primary)' : 'var(--color-success)',
            color: 'white',
            padding: '16px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: '10000',
            maxWidth: '400px',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-out',
            fontSize: '14px',
            fontWeight: '500'
        });

        // DOM에 추가
        document.body.appendChild(notification);

        // 애니메이션으로 표시
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // 닫기 버튼 이벤트
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', hideNotification);

        // 자동 숨김 (5초 후)
        setTimeout(hideNotification, 5000);

        function hideNotification() {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }

    // FAQ 아코디언 기능
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h4');
        const answer = item.querySelector('p');
        
        if (question && answer) {
            // 초기 상태: 답변 숨김
            answer.style.display = 'none';
            question.style.cursor = 'pointer';
            question.style.userSelect = 'none';
            
            // 클릭 표시 추가
            question.innerHTML += ' <span style="float: right; font-weight: normal;">+</span>';
            
            question.addEventListener('click', function() {
                const isVisible = answer.style.display === 'block';
                const indicator = this.querySelector('span');
                
                if (isVisible) {
                    answer.style.display = 'none';
                    indicator.textContent = '+';
                    item.style.backgroundColor = 'white';
                } else {
                    answer.style.display = 'block';
                    indicator.textContent = '−';
                    item.style.backgroundColor = 'var(--color-secondary)';
                }
            });
        }
    });

    // 키보드 네비게이션 지원
    document.addEventListener('keydown', function(e) {
        // ESC 키로 모바일 메뉴 닫기
        if (e.key === 'Escape' && mainNav && mainNav.classList.contains('open')) {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('open');
        }
    });

    // 윈도우 리사이즈 시 모바일 메뉴 상태 초기화
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (mobileMenuToggle && mainNav) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('open');
            }
        }
    });

    // 스크롤 시 헤더 그림자 효과
    function updateHeaderShadow() {
        if (window.scrollY > 10) {
            mainNav.style.boxShadow = 'var(--shadow-md)';
        } else {
            mainNav.style.boxShadow = 'var(--shadow-sm)';
        }
    }

    window.addEventListener('scroll', updateHeaderShadow);

    // 페이지 로드 완료 시 초기 애니메이션
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
    }, 100);

    // 외부 링크에 대한 새 창 열기 확인
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // 개발자 콘솔 메시지
    console.log('🇰🇷 모두보훈 드림 웹사이트가 성공적으로 로드되었습니다.');
    console.log('국가유공자를 위한 특별한 서비스에 참여해주셔서 감사합니다.');
    
    // 성능 모니터링 (선택사항)
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log(`페이지 로드 시간: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
            }, 0);
        });
    }
});