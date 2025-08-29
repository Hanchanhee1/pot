// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 햄버거 메뉴 토글
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 네비게이션 링크 클릭 시 메뉴 닫기
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // 스크롤 시 네비게이션 배경 변경
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 스킬 바 애니메이션
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    };
    
    // 스크롤 시 스킬 바 애니메이션 실행
    const skillsSection = document.querySelector('#skills');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // 네비게이션 높이만큼 조정
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 스크롤 시 요소들 페이드인 애니메이션
    const fadeElements = document.querySelectorAll('.portfolio-item, .skill-item, .contact-item, .education-item');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(element);
    });
    
    // 통계 숫자 카운트 애니메이션
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;
            
            const updateStat = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current) + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                }
            };
            
            updateStat();
        });
    };
    
    // 자기소개 섹션이 보일 때 통계 애니메이션 실행
    const aboutSection = document.querySelector('#about');
    
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    
    // 폼 제출 처리
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 가져오기
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // 간단한 유효성 검사
            if (!name || !email || !message) {
                alert('모든 필드를 입력해주세요.');
                return;
            }
            
            // 이메일 형식 검사
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('올바른 이메일 형식을 입력해주세요.');
                return;
            }
            
            // 성공 메시지 (실제로는 서버로 데이터를 전송)
            alert('메시지가 성공적으로 전송되었습니다!');
            this.reset();
        });
    }
    
    // 포트폴리오 아이템 호버 효과 개선
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 스킬 아이템 호버 효과
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // // 타이핑 효과 (히어로 섹션)
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const text = heroTitle.innerHTML;
    //     heroTitle.innerHTML = '';
        
    //     let i = 0;
    //     const typeWriter = () => {
    //         if (i < text.length) {
    //             heroTitle.innerHTML += text.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 100);
    //         }
    //     };
        
    //     // 페이지 로드 후 1초 뒤에 타이핑 시작
    //     setTimeout(typeWriter, 1000);
    // }
    
    // 스크롤 진행률 표시
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };
    
    createScrollProgress();
    
    // 로딩 애니메이션
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // 키보드 네비게이션 지원
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // 터치 디바이스 지원
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 위로 스와이프
                window.scrollBy(0, -100);
            } else {
                // 아래로 스와이프
                window.scrollBy(0, 100);
            }
        }
    };
    
    // 성능 최적화: 스크롤 이벤트 쓰로틀링
    let ticking = false;
    
    const updateOnScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                // 스크롤 관련 업데이트 로직
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', updateOnScroll);
    
    console.log('포트폴리오 웹사이트가 성공적으로 로드되었습니다! 🚀');
});

