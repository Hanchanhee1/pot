// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 언어 토글 및 i18n
    const translations = {
        ko: {
            'nav.name': '한찬희',
            'nav.home': '홈',
            'nav.about': '소개',
            'nav.projects': '프로젝트',
            'nav.skills': '기술 스택',
            'nav.career': '경력',
            'nav.contact': '연락처',
            'hero.greeting': '안녕하세요!',
            'hero.titlePrefix': '끊임없이 배우고 성장하는 개발자',
            'hero.name': '한찬희',
            'hero.titleSuffix': '입니다.',
            'hero.subtitle': 'Spring 기반 웹 개발을 학습하며 기초를 탄탄히 다졌고, 최근에는 AI 기술과 클라우드를 공부하고 있습니다.<br>교육 과정과 프로젝트를 통해 실무에 필요한 기술들을 익혔으며, 빠르게 배우고 적용하는 것을 즐깁니다.<br>문제를 해결하고 더 나은 코드를 작성하기 위해 끊임없이 학습하고 성장하는 개발자가 되고 싶습니다.',
            'hero.cta': '포트폴리오 보기',
            'about.title': '자기소개',
            'about.p1': '<strong style="color: #667eea;">Spring Boot</strong>로 RESTful API를 설계하고,<br><strong style="color: #667eea;">데이터베이스</strong>를 모델링하며,<br><strong style="color: #667eea;">AI 기술</strong>을 웹 서비스에 통합합니다.<br><strong style="color: #667eea;">클라우드 인프라</strong>를 활용한 배포와 운영 경험도 갖추고 있습니다.',
            'about.p2': '<strong>16개월간의 교육 과정</strong>과 <strong>4개의 프로젝트</strong>를 통해 웹 개발의 기초를 탄탄히 다졌습니다.<br>JSL인재개발원에서 Spring 기반 웹 개발을, 스마트인재개발원에서 AI 기술 연동을 학습했으며,<br><strong>NAVER Cloud Platform Certified Professional 자격증</strong>을 취득하여,<br>클라우드 인프라에 대한 이해를 넓혔습니다.<br>일본 IT 기업에서의 해외 근무 경험도 있습니다.',
            'about.p3': '<strong>3번의 팀장 경험</strong>을 통해 프로젝트를 이끌고, 팀원들과 소통하며,<br>협업의 가치를 배웠습니다. 2회 수상은 단순한 결과가 아닌,<br>팀과 함께 만들어낸 성과라고 생각합니다.',
            'about.p4': '이제는 <strong style="color: #667eea;">실제 사용자의 문제를 해결하는 의미 있는 서비스</strong>를 만들고 싶습니다.<br>배우고, 성장하고, 기여하는 개발자가 되겠습니다.',
            'about.stats.projects': '팀 프로젝트 경험',
            'about.stats.awards': '수상',
            'about.stats.overseas': '해외 근무 경험',
            'about.stats.projectsUnit': '건',
            'about.stats.awardsUnit': '회',
            'about.stats.overseasUnit': '회',
            'tags.fastLearning': '#빠른_학습',
            'tags.teamwork': '#팀워크',
            'tags.problemSolving': '#문제_해결',
            'tags.growthMindset': '#성장_지향',
            'tags.communication': '#소통',
            'skills.title': '기술 스택',
            'portfolio.title': '프로젝트',
            'portfolio.subtitle': '※ 이미지 클릭 시 <strong>상세 내용(PPT)</strong>을 확인하실 수 있습니다.',
            'common.tech': '주요 기술',
            'badge.gold': '🏆 최우수상',
            'badge.silver': '🥈 우수상',
            'proj1.title': '취업 지원 플랫폼<br><span class="project-subtitle">청취</span>',
            'proj1.desc': '취업 준비생을 위한 AI 기반 플랫폼입니다.<br> 실시간 AI 음성 면접 연습,<br>취업 상담 챗봇 서비스 · 이력서 첨삭,<br>자격증 및 공모전 일정 관리를 지원합니다.',
            'proj2.title': 'AI추천 웹쇼핑몰<br><span class="project-subtitle">AIMAE(아이메이)</span>',
            'proj2.desc': '텍스트와 이미지를 동시에 활용하는<br> 멀티모달 AI 쇼핑 플랫폼입니다.<br> 사용자가 원하는 물건을 업로드하면,<br>AI가 유사한 상품을 여러개 추천해주고,<br> 비교해주는 서비스입니다.',
            'proj3.title': '카페 주문 웹사이트 <span class="project-subtitle">POPPYRED(파피레드)</span>',
            'proj3.desc': '뉴트로(New + Retro) 컨셉의<br> 감성 카페 웹 플랫폼입니다.<br> 온라인 메뉴 확인 및 주문, 픽업 시간 예약,<br> 고객 리뷰 게시판 등 카페 운영에 필요한<br> 모든 기능을 갖춘 통합 관리 시스템입니다.',
            'proj4.title': '한국의 맛집 소개<br><span class="project-subtitle">타베타비(タベタビ)</span>',
            'proj4.desc': '일본인 관광객을 위한<br> 한국 맛집 소개 및 예약 플랫폼입니다.<br> 전체 UI를 일본어로 제공하며,<n> 지역별 맛집 검색, 예약, 리뷰 기능을<br>제공하는 종합 서비스입니다.',
            'career.title': '경력 및 수상',
            'career.legend.education': '교육 과정',
            'career.legend.career': '경력',
            'career.legend.certificate': '자격증',
            'career.legend.award': '프로젝트 수상',
            'career.item.aiCourse.title': '스마트인재개발원 클라우드 기반 AI 서비스 엔지니어 과정 - 수료',
            'career.item.aiCourse.period': '2025.05 ~ 2025.12 (6개월)',
            'career.item.aiCourse.desc': '<strong>학습 :</strong> Python ML/DL, 시각지능 모델링, 네이버 클라우드<br><strong>프로젝트 :</strong> 뽀삐데이트 (팀장) / AIMAE (팀장) / 청취 (팀장) 3건 완료',
            'career.item.chungchwi.title': '🥈 청취 프로젝트 우수상',
            'career.item.chungchwi.period': '2025.12',
            'career.item.chungchwi.org': '스마트인재개발원 최종 프로젝트 평가 (5팀 중 2등)',
            'career.item.chungchwi.desc': 'AI 음성 면접 시스템과 취업 상담 챗봇을 통합한 올인원 플랫폼 개발.<br>CLOVA Speech API 및 HyperCLOVA X 연동, Docker와 CI/CD 파이프라인 구축.',
            'career.item.ncp.title': 'NAVER Cloud Platform Certified Professional 취득',
            'career.item.ncp.period': '2025.11',
            'career.item.ncp.org': '네이버 클라우드 (NAVER Cloud)',
            'career.item.aimae.title': '🏆 AIMAE 프로젝트 최우수상',
            'career.item.aimae.period': '2025.08',
            'career.item.aimae.org': '스마트인재개발원 AI 프로젝트 평가 (5팀 중 1등)',
            'career.item.aimae.desc': '4명 팀장으로 AI 이미지 검색 기술을 쇼핑몰에 접목.<br>백엔드 API 설계 및 AI 모델 연동, 결제 시스템 구현 주도.',
            'career.item.devfox.title': '株式会社DEVFOX 시스템개발부 [일본 도쿄]',
            'career.item.devfox.period': '2024.07 ~ 2025.03 (내정 및 근무)',
            'career.item.devfox.role': '백엔드 개발자 · 해외 근무 경험',
            'career.item.devfox.desc': '내정 기간 동안 사전 학습 과제를 수행하며 실무 준비.<br>근무 기간 중 단위 테스트 사양서 작성, 증거 자료 수집, 버그 수정 업무 담당.',
            'career.item.ip.title': '정보처리산업기사 취득',
            'career.item.ip.period': '2024.07',
            'career.item.ip.org': '한국산업인력공단',
            'career.item.tabetabi.title': '🏆 타베타비 프로젝트 최우수상',
            'career.item.tabetabi.period': '2024.03',
            'career.item.tabetabi.org': 'JSL인재개발원 최종 프로젝트 평가 (4팀 중 1등)',
            'career.item.tabetabi.desc': '첫 팀장 경험으로 프로젝트 완성도와 팀워크 인정받음.<br>요구사항 분석부터 기능 구현까지 전 과정을 주도하며 최우수상 수상.',
            'career.item.poppy.title': '🥈 POPPYRED 프로젝트 우수상',
            'career.item.poppy.period': '2024.01',
            'career.item.poppy.org': 'JSL인재개발원 중간 프로젝트 평가 (4팀 중 2등)',
            'career.item.poppy.desc': '팀원으로 참여하여 게시판 기능 및 파일 업로드 시스템 구현.<br>Spring MVC 패턴과 MyBatis를 활용한 효율적인 데이터 처리.',
            'career.item.webCourse.title': 'JSL인재개발원 Cloud 연계 웹 개발자 과정 - 수료',
            'career.item.webCourse.period': '2023.09 ~ 2024.07 (10개월)',
            'career.item.webCourse.desc': '<strong>학습 :</strong> Java, Spring Framework, MyBatis, OracleDB, JavaScript<br><strong>프로젝트 :</strong> 타베타비 (팀장) / 파피레드 (팀원) 2건 완료',
            'contact.title': '연락처',
            'contact.email': '이메일',
            'contact.phone': '연락처',
            'contact.inquiry': '프로젝트 문의',
            'contact.help': '협업이나 채용 관련 문의는 이메일로 연락 부탁드립니다.',
            'contact.cta': '이메일 보내기'
        },
        ja: {
            'nav.name': 'ハンチャンヒ',
            'nav.home': 'ホーム',
            'nav.about': '紹介',
            'nav.projects': 'プロジェクト',
            'nav.skills': '技術スタック',
            'nav.career': '経歴',
            'nav.contact': '連絡先',
            'hero.greeting': 'こんにちは！',
            'hero.titlePrefix': '学び続けて成長する開発者',
            'hero.name': 'ハンチャンヒ',
            'hero.titleSuffix': 'です。',
            'hero.subtitle': 'Springを基盤としたWeb開発を学び基礎を固め、最近はAI技術とクラウドを勉強しています。<br>教育課程とプロジェクトを通じて実務に必要な技術を身につけ、素早く学んで適用することを得意とします。<br>課題を解決し、より良いコードを書くために継続的に学習し成長する開発者を目指しています。',
            'hero.cta': 'ポートフォリオを見る',
            'about.title': '自己紹介',
            'about.p1': '<strong style="color: #667eea;">Spring Boot</strong>でRESTful APIを設計し、<br><strong style="color: #667eea;">データベース</strong>をモデリングし、<br><strong style="color: #667eea;">AI技術</strong>をWebサービスに統合します。<br><strong style="color: #667eea;">クラウドインフラ</strong>を活用したデプロイ・運用経験もあります。',
            'about.p2': '<strong>16ヶ月の教育課程</strong>と<strong>4つのプロジェクト</strong>を通じてWeb開発の基礎を固めました。<br>JSL人材開発院でSpringベースのWeb開発を、スマート人材開発院でAI技術連携を学び、<br><strong>NAVER Cloud Platform Certified Professional</strong>資格を取得して、<br>クラウドインフラへの理解を深めました。<br>日本のIT企業での海外勤務経験もあります。',
            'about.p3': '<strong>3回のチームリーダー経験</strong>を通じてプロジェクトを率い、メンバーとコミュニケーションし、<br>協業の価値を学びました。2回の受賞は単なる結果ではなく、<br>チームで成し遂げた成果だと考えています。',
            'about.p4': '今後は<strong style="color: #667eea;">実ユーザーの課題を解決する意味のあるサービス</strong>を作りたいです。<br>学び、成長し、貢献する開発者になります。',
            'about.stats.projects': 'チームプロジェクト経験',
            'about.stats.awards': '受賞',
            'about.stats.overseas': '海外勤務経験',
            'about.stats.projectsUnit': '件',
            'about.stats.awardsUnit': '回',
            'about.stats.overseasUnit': '回',
            'tags.fastLearning': '#速習',
            'tags.teamwork': '#チームワーク',
            'tags.problemSolving': '#課題解決',
            'tags.growthMindset': '#成長志向',
            'tags.communication': '#コミュニケーション',
            'skills.title': '技術スタック',
            'portfolio.title': 'プロジェクト',
            'portfolio.subtitle': '※ 画像をクリックすると<strong>詳細（PPT）</strong>をご確認いただけます。',
            'common.tech': '主要技術',
            'badge.gold': '🏆 最優秀賞',
            'badge.silver': '🥈 優秀賞',
            'proj1.title': '就職支援プラットフォーム<br><span class="project-subtitle">청취</span>',
            'proj1.desc': '就活生のためのAIベースのプラットフォームです。<br>リアルタイムAI音声面接練習、<br>就職相談チャットボット・履歴書添削、<br>資格・コンテストのスケジュール管理を提供します。',
            'proj2.title': 'AIレコメンドECサイト<br><span class="project-subtitle">AIMAE（アイメイ）</span>',
            'proj2.desc': 'テキストと画像を同時に活用する<br>マルチモーダルAIショッピングプラットフォームです。<br>ユーザーが探したい商品をアップロードすると、<br>AIが類似商品を複数推薦し、<br>比較できるサービスです。',
            'proj3.title': 'カフェ注文サイト <span class="project-subtitle">POPPYRED（パピレッド）</span>',
            'proj3.desc': 'ニュートロ（New + Retro）コンセプトの<br>感性カフェWebプラットフォームです。<br>オンラインメニュー確認・注文、ピックアップ時間予約、<br>レビュー掲示板など運営に必要な機能を備えた<br>統合管理システムです。',
            'proj4.title': '韓国のグルメ紹介<br><span class="project-subtitle">タベタビ（タベタビ）</span>',
            'proj4.desc': '日本人観光客向けの<br>韓国グルメ紹介・予約プラットフォームです。<br>UI全体を日本語で提供し、<br>地域別のグルメ検索、予約、レビュー機能を<br>提供する総合サービスです。',
            'career.title': '経歴・受賞',
            'career.legend.education': '教育課程',
            'career.legend.career': '経歴',
            'career.legend.certificate': '資格',
            'career.legend.award': 'プロジェクト受賞',
            'career.item.aiCourse.title': 'スマート人材開発院 クラウド基盤AIサービスエンジニア課程 - 修了',
            'career.item.aiCourse.period': '2025.05 ~ 2025.12（6ヶ月）',
            'career.item.aiCourse.desc': '<strong>学習：</strong> Python ML/DL、視覚知能モデリング、NAVERクラウド<br><strong>プロジェクト：</strong> ポピーデート（リーダー）/ AIMAE（リーダー）/ 청취（リーダー） 計3件',
            'career.item.chungchwi.title': '🥈 청취 プロジェクト 優秀賞',
            'career.item.chungchwi.period': '2025.12',
            'career.item.chungchwi.org': 'スマート人材開発院 最終プロジェクト評価（5チーム中2位）',
            'career.item.chungchwi.desc': 'AI音声面接システムと就職相談チャットボットを統合したオールインワンプラットフォームを開発。<br>CLOVA Speech APIおよびHyperCLOVA Xを連携、DockerとCI/CDパイプラインを構築。',
            'career.item.ncp.title': 'NAVER Cloud Platform Certified Professional 取得',
            'career.item.ncp.period': '2025.11',
            'career.item.ncp.org': 'NAVERクラウド',
            'career.item.aimae.title': '🏆 AIMAE プロジェクト 最優秀賞',
            'career.item.aimae.period': '2025.08',
            'career.item.aimae.org': 'スマート人材開発院 AIプロジェクト評価（5チーム中1位）',
            'career.item.aimae.desc': '4名のリーダーとしてAI画像検索技術をECに適用。<br>バックエンドAPI設計とAIモデル連携、決済システムの実装を主導。',
            'career.item.devfox.title': '株式会社DEVFOX システム開発部［東京］',
            'career.item.devfox.period': '2024.07 ~ 2025.03（内定・勤務）',
            'career.item.devfox.role': 'バックエンド開発者・海外勤務経験',
            'career.item.devfox.desc': '内定期間は事前学習課題に取り組み実務準備。<br>勤務期間は単体テスト仕様書の作成、エビデンス収集、バグ修正を担当。',
            'career.item.ip.title': '情報処理産業技術者 取得',
            'career.item.ip.period': '2024.07',
            'career.item.ip.org': '韓国産業人力公団',
            'career.item.tabetabi.title': '🏆 タベタビ プロジェクト 最優秀賞',
            'career.item.tabetabi.period': '2024.03',
            'career.item.tabetabi.org': 'JSL人材開発院 最終プロジェクト評価（4チーム中1位）',
            'career.item.tabetabi.desc': '初のリーダー経験として、プロジェクトの完成度とチームワークが高く評価。<br>要件分析から機能実装まで全工程を主導し最優秀賞を受賞。',
            'career.item.poppy.title': '🥈 POPPYRED プロジェクト 優秀賞',
            'career.item.poppy.period': '2024.01',
            'career.item.poppy.org': 'JSL人材開発院 中間プロジェクト評価（4チーム中2位）',
            'career.item.poppy.desc': 'メンバーとして参加し掲示板機能とファイルアップロードを実装。<br>Spring MVCとMyBatisを活用し効率的にデータ処理を実施。',
            'career.item.webCourse.title': 'JSL人材開発院 クラウド連携Web開発者課程 - 修了',
            'career.item.webCourse.period': '2023.09 ~ 2024.07（10ヶ月）',
            'career.item.webCourse.desc': '<strong>学習：</strong> Java、Spring Framework、MyBatis、OracleDB、JavaScript<br><strong>プロジェクト：</strong> タベタビ（リーダー）/ パピレッド（メンバー） 計2件',
            'contact.title': '連絡先',
            'contact.email': 'メール',
            'contact.phone': '電話',
            'contact.inquiry': 'プロジェクトお問い合わせ',
            'contact.help': '協業や採用に関するお問い合わせはメールでご連絡ください。',
            'contact.cta': 'メールを送る'
        }
    };

    const applyTranslations = (lang) => {
        const textNodes = document.querySelectorAll('[data-i18n]');
        textNodes.forEach(node => {
            const key = node.getAttribute('data-i18n');
            const val = translations[lang][key];
            if (val !== undefined) node.textContent = val;
        });
        const htmlNodes = document.querySelectorAll('[data-i18n-html]');
        htmlNodes.forEach(node => {
            const key = node.getAttribute('data-i18n-html');
            const val = translations[lang][key];
            if (val !== undefined) node.innerHTML = val;
        });
        document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : 'ko');
        localStorage.setItem('lang', lang);
    };

    const savedLang = localStorage.getItem('lang') || 'ko';
    applyTranslations(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });
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
    const fadeElements = document.querySelectorAll('.portfolio-item, .skill-item, .contact-item, .education-item, .award-item, .career-item');
    
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
            const originalText = stat.textContent;
            const target = parseInt(originalText);
            const suffix = originalText.replace(target, ''); // "건", "회" 등 추출
            const increment = target / 50;
            let current = 0;
            
            const updateStat = () => {
                if (current < target) {
                    current += increment;
                    stat.innerHTML = Math.ceil(current) + '<span class="stat-unit">' + suffix + '</span>';
                    requestAnimationFrame(updateStat);
                } else {
                    stat.innerHTML = target + '<span class="stat-unit">' + suffix + '</span>';
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
    
    // 스킬 캐러셀 기능
    let currentSlide = 0;
    const slides = document.querySelectorAll('.skills-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    
    // 슬라이드 변경 함수
    function showSlide(n) {
        // 모든 슬라이드 숨기기
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 현재 슬라이드 인덱스 계산
        currentSlide = (n + totalSlides) % totalSlides;
        
        // 현재 슬라이드 표시
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // 다음/이전 슬라이드 함수
    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }
    
    // 특정 슬라이드로 이동
    function goToSlide(n) {
        showSlide(n - 1);
    }
    
    // 자동 슬라이드 (선택사항)
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, 5000); // 5초마다 자동 슬라이드
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // 캐러셀 컨테이너에 마우스 올렸을 때 자동 슬라이드 정지
    const carouselContainer = document.querySelector('.skills-carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // 터치 스와이프 지원
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleCarouselSwipe();
        });
    }
    
    function handleCarouselSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 왼쪽으로 스와이프 - 다음 슬라이드
                changeSlide(1);
            } else {
                // 오른쪽으로 스와이프 - 이전 슬라이드
                changeSlide(-1);
            }
        }
    }
    
    // 키보드 네비게이션 지원
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    });
    
    // 초기 슬라이드 표시 및 자동 슬라이드 시작
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
    }
    
    // 전역 함수로 등록 (HTML에서 onclick으로 사용)
    window.changeSlide = changeSlide;
    window.currentSlide = goToSlide;
    
    // 수상 사진 모달 기능
    function openModal(imageSrc, title) {
        const modal = document.getElementById('awardModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
    
    function closeModal() {
        const modal = document.getElementById('awardModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 스크롤 복원
    }
    
    // 모달 외부 클릭 시 닫기
    window.onclick = function(event) {
        const modal = document.getElementById('awardModal');
        if (event.target === modal) {
            closeModal();
        }
    }
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // 전역 함수로 등록
    window.openModal = openModal;
    window.closeModal = closeModal;
    
    console.log('포트폴리오 웹사이트가 성공적으로 로드되었습니다! 🚀');
});

