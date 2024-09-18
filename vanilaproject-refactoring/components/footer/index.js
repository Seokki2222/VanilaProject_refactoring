class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const cssFiles = [
            '../../css/footer.css',
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

        this.innerHTML = `
             <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h4>안내</h4>
                        <ul>
                            <li><a href="#">멤버가입</a></li>
                            <li><a href="#">매장찾기</a></li>
                            <li><a href="#">나이키 저널</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>고객센터</h4>
                        <ul>
                            <li><a href="#">주문배송조회</a></li>
                            <li><a href="#">반품 정책</a></li>
                            <li><a href="#">결제 방법</a></li>
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">문의하기</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>회사소개</h4>
                        <ul>
                            <li><a href="#">About Nike</a></li>
                            <li><a href="#">소식</a></li>
                            <li><a href="#">채용</a></li>
                            <li><a href="#">투자자</a></li>
                            <li><a href="#">지속가능성</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <ul>
                        <li><a>© 2024 Nike, Inc. All Rights Reserved.</a></li>
                        <li><a>이용약관</a></li>
                        <li><a style="font-weight: 700;">개인정보처리방침</a></li>
                        <li><a>위치정보이용약관</a></li>
                        <li><a>영상정보처리기기 운영 방침</a></li>
                    </ul>
                </div>

                <div style="height: 1px; background: #E5E5E5; margin-top: 72px;"></div>

                <div class="footer-description">
                    <p>(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호
                    </p>
                    <p>2011-서울강남-03461 | 등록번호 220-88-09068 <a>사업자 정보 확인</a></p>
                    <p>고객센터 전화 문의 <a>080-022-0182</a> FAX 02-6744-5880 | 이메일 <a>service@nike.co.kr</a> | 호스팅서비스사업자
                        (유)나이키코리아</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);