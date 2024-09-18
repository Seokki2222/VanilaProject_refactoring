class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const cssFiles = [
            '../../css/header.css',
            '../../css/layout.css',
            '../../css/reset.css',
            '../../css/common.css',
            'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
        ];

        cssFiles.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        });

        let header = `
           <header class="nav-header">
        <ul class="nav-header-list container">
            <li><a href="../../pages/findStore/index.html">매장찾기</a></li>                        
            <li><a href="../../pages/customerService/index.html">고객센터</a></li>            
            <li><a href="../../pages/signup/index.html">가입하기</a></li>            
            <li><a href="../../pages/signin/index.html">로그인</a></li>
        </ul>
   </header>`;

        this.innerHTML = `
   
   <div>
    <nav class="nav">
        <img src="../../assets/logo.svg"/>

        <ul class="nav-menu">
            <li><a href="../../pages/products/index.html">New & Featured</a></li>
            <li><a>Men</a></li>
            <li><a>Women</a></li>
            <li><a>Kids</a></li>
            <li><a>Sale</a></li>
        </ul>

        <div class="nav-item">
            <div class="search-bar">
                <img src="../../assets/search.svg"/>
                <input placeholder="검색"/>
            </div>

            <img src="../../assets/heart.svg"/>
            <img src="../../assets/shop.svg"/>
        </div>
   </nav>

   <nav class="nav-mobile">
        <img src="../../assets/logo.svg"/>

        <div class="nav-mobile-item">
            <img src="../../assets/search.svg"/>
            <img src="../../assets/people.svg"/>
            <img src="../../assets/shop2.svg"/>
            <img class="menu-button" src="../../assets/menu.svg"/>
        </div>
   </nav>

   <div class="sidebar-wrapper">
    <div class="sidebar">    
        <div style="width: 100%; display: flex; justify-content: flex-end;">
            <img class="close-button" src="../../assets/closeButton.svg"/>
        </div>     

        <div class="sidebar-button-wrapper">
            <button class="filled-button">
                <span>가입하기</span>
            </button>
            <button class="border-button">
                로그인
            </button>
        </div>

        <ul class="sidebar-menu">
            <li><a>New & Featured <img src="../../assets/rightArrow.svg"/></a></li>
            <li><a>Men <img src="../../assets/rightArrow.svg"/></a></li>
            <li><a>Women <img src="../../assets/rightArrow.svg"/></a></li>
            <li><a>Kids <img src="../../assets/rightArrow.svg"/></a></li>
            <li><a>Sale <img src="../../assets/rightArrow.svg"/></a></li>
        </ul>

        <ul class="sidebar-sub-menu">
            <li><a><img src="../../assets/help.svg"/>매장찾기</a></li>
            <li><a><img src="../../assets/shop.svg"/>장바구니</a></li>
            <li><a><img src="../../assets/order.svg"/>주문</a></li>
            <li><a><img src="../../assets/store.svg"/>매장 찾기</a></li>
        </ul>
   </div>
   </div>
   
   </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const mediaQuery = window.matchMedia("(max-width: 430px)");
        
        if (mediaQuery.matches) { 
            const menuBtn = document.querySelector('.menu-button');
            const closeBtn = document.querySelector('.close-button');
            const sideWrapper = document.querySelector('.sidebar-wrapper');
            const sideBar = document.querySelector('.sidebar');
    
            menuBtn.addEventListener('click', function () {
                sideWrapper.classList.add('active');
                sideBar.classList.add('active');
            });
    
            closeBtn.addEventListener('click', function () {
                sideBar.classList.remove('active');
                sideWrapper.classList.remove('active');
            });

            let lastScrollTop = 0;
            const navbar = document.querySelector(".nav-mobile");

            window.addEventListener('scroll', function () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
                if (scrollTop > lastScrollTop) {
                    // 아래로 스크롤할 때 네비게이션 바 숨김
                    navbar.style.top = "-60px"; // 네비게이션 바의 높이만큼 값을 설정
                } else {
                    // 위로 스크롤할 때 네비게이션 바 보이게 함
                    navbar.style.top = "0";
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // iOS에서 음수 방지
            });
        } else {             
        let lastScrollTop = 0;
        const navbar = document.querySelector(".nav");
        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // 아래로 스크롤할 때 네비게이션 바 숨김
                navbar.style.top = "-60px"; // 네비게이션 바의 높이만큼 값을 설정
            } else {
                // 위로 스크롤할 때 네비게이션 바 보이게 함
                navbar.style.top = "0";
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // iOS에서 음수 방지
        });
        }

       

       
    }
}

customElements.define('custom-header', Header);