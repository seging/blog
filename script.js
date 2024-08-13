
const data = {
    categories: [
        {
            id: "portfolio",
            title: "포트폴리오",
            items: [
                {
                    id: "portfolio",
                    title: "포트폴리오",
                    content: `
                <h2>포트폴리오</h2>
                <p>안녕하세요, 저는 iOS 애플리케이션 개발자 이승기입니다. 다양한 프로젝트에 참여했습니다.</p>
                <section>
                    <h2>경력</h2>
                    <ul>
                        <li>네오플러스: 2019.07 - 2020.06</li>
                        <li>B2 (프리랜서): 2020.09 - 2020.11</li>
                        <li>ICB: 2021.01 - 2022.10</li>
                        <li>MDS: 2023.12 - 2024.02</li>
                    </ul>
                </section>
                <section>
                    <h2>프로젝트</h2>
                    <div class="tab">
                        <button class="tablinks" onclick="openTab(event, 'companyProjects')" id="defaultOpen">회사에서 한 프로젝트</button>
                        <button class="tablinks" onclick="openTab(event, 'personalProjects')">개인 프로젝트</button>
                        <button class="tablinks" onclick="openTab(event, 'externalActivities')">대외활동</button>
                    </div>
                    <div id="companyProjects" class="tabcontent">
                        <h3>네오플러스</h3>
                        <h3>사내인트라넷 개발</h3>
                        <p>휴가정보 및 사내 연락처 조회 가능. RESTful API를 이용한 서버 API 통신 개발.</p>
                        <p><strong>사용 기술:</strong> Swift, SwiftyJSON, Alamofire, KeychainSwift, SnapKit, FSCalendar</p>
                        <div class="image-gallery">
                            <img src="images/네오인트라넷-1.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                            <img src="images/네오인트라넷-2.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                            <img src="images/네오인트라넷-3.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                            <img src="images/네오인트라넷-4.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                        </div>
                        <h3>지아이티 - 글로벌 서비스 앱 개발</h3>
                        <p>멕시코, 러시아, 인도 서비스 앱 개발, 언어팩 적용 및 화면 변경, 유지보수 작업.</p>
                        <p><strong>사용 기술:</strong> Objective-C, Swift, Masonry, Firebase, Google Maps, FMDB</p>
                        <h3>ICB</h3>
                        <h3>GOS 앱</h3>
                        <p>소스 리팩토링, 기능 추가 및 개선, 소스 이슈대응 등을 포함한 유지보수 작업.</p>
                        <p><strong>사용 기술:</strong> Objective-C, Swift</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/gos/id1509217154">GOS</a></p>
                        <div class="image-gallery">
                            <img src="images/GOS1.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="images/GOS2.PNG" alt="ICB" onclick="openModal(this)">
                        </div>
                        <h3>Qrick 앱</h3>
                        <p>소스 리팩토링, 기능 추가 및 개선, 소스 이슈대응 등을 포함한 유지보수 작업.</p>
                        <p><strong>사용 기술:</strong> Objective-C, Swift</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/qrick/id1331822769">Qrick</a></p>
                        <div class="image-gallery">
                            <img src="images/Qrick1.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="images/Qrick2.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="images/Qrick3.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="images/Qrick4.PNG" alt="ICB" onclick="openModal(this)">
                        </div>
                        <h3>MDS</h3>
                        <h3>파킹프렌즈 앱</h3>
                        <p>소스 리팩토링, 유지보수, 이슈 대응, 기능 추가 및 개선 작업을 진행했습니다. 라이브러리 마이그레이션 작업도 포함되었습니다.</p>
                        <p><strong>사용 기술:</strong> Swift, RxSwift</p>
                        <p><strong>기간:</strong> 2023.01 ~ 2024.02</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/%ED%8C%8C%ED%82%B9%ED%94%84%EB%A0%8C%EC%A6%88/id1437488741">파킹프렌즈</a></p>
                        <div class="image-gallery">
                            <img src="images/파킹프렌즈1.PNG" alt="MDS" onclick="openModal(this)">
                            <img src="images/파킹프렌즈2.PNG" alt="MDS" onclick="openModal(this)">
                        </div>
                        <h3>파킹프렌즈 파트너 앱</h3>
                        <p>소스 리팩토링, 유지보수, 이슈 대응, 기능 추가 및 개선 작업을 진행했습니다.</p>
                        <p><strong>사용 기술:</strong> React, Swift</p>
                        <p><strong>기간:</strong> 2021.06 ~ 2024.02</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/%ED%8C%8C%ED%82%B9%ED%94%84%EB%A0%8C%EC%A6%88-%ED%8C%8C%ED%8A%B8%EB%84%88/id1456976566">파킹프렌즈 파트너</a></p>
                        <div class="image-gallery">
                            <img src="images/파킹프렌즈파트너1.PNG" alt="MDS" onclick="openModal(this)">
                            <img src="images/파킹프렌즈파트너2.PNG" alt="MDS" onclick="openModal(this)">
                        </div>
                        <h3>B2 - 강아샘통 앱</h3>
                        <p>앱 소스 리팩토링 및 기능 개선 작업을 진행.</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/%EA%B0%95%EC%95%84%EC%83%98%ED%86%B5/id1295938279">강아샘통</a></p>
                        <div class="image-gallery"></div>
                    </div>
                    <div id="personalProjects" class="tabcontent">
                        <h3>We</h3>
                        <p>커플 D-day, 일정관리 앱. RxSwift와 MVVM 패턴을 활용하여 개발하였습니다.</p>
                        <p><strong>사용 기술:</strong> RxSwift, MVVM</p>
                        <div class="image-gallery"></div>
                        <h3>Nurse Timer</h3>
                        <p>동시에 여러개의 타이머를 등록할 수 있는 watchOS 앱. & 근무 일정 관리 및 타이머를 관리하는 iOS 앱.</p>
                        <p><strong>사용 기술:</strong> SwiftUI, MVVM</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/nursetimer/id6477325168">Nurse Timer</a></p>
                        <div class="image-gallery">
                            <img src="images/NurseTimer-아이폰1.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-아이폰2.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-아이폰3.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-아이폰4.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-아이폰5.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-아이폰6.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-애플워치1.jpg" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-애플워치2.jpg" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="images/NurseTimer-애플워치3.jpg" alt="Nurse Timer" onclick="openModal(this)">
                        </div>
                    </div>
                    <div id="externalActivities" class="tabcontent">
                        <h3>협업하는 프론티어</h3>
                        <p>지역 내 문제를 해결하기 위한 아이디어 및 개발 공모전</p>
                        <p>휴대폰 어플(iOS,AOS)과 아두이노 블루투스를 이용하여 연동 차량 번호판 글자를 인식하여 주차장 자리를 예약하는 플랫폼 개발</p>
                        <p><strong>기간:</strong> 2018.03</p>
                        <p><strong>사용기술:</strong> Swfit,Java,Core Bluetooth</p>
                        <h3>한이음 공모전 참여</h3>
                        <p>AWS 클라우드 서비스를 이용하여 제품 개발.</p>
                        <p><strong>기간:</strong> 2018.03 - 2018.12</p>
                        <p><strong>사용 기술:</strong> AWS EC2, S3, Polly, SDK, DynamoDB, Swift, Alamofire</p>
                        <p><strong>시연 영상 링크:</strong> <a href="https://www.youtube.com/watch?v=cranY6sji4g">시연 영상 보기</a></p>
                        <div class="image-gallery">
                            <img src="images/한이음1.PNG" alt="한이음" onclick="openModal(this)">
                            <img src="images/한이음2.PNG" alt="한이음" onclick="openModal(this)">
                        </div>
                        <h3>Linxtelecom 외주 프로젝트</h3>
                        <p>기존 custom QR 코드 앱 유지보수 및 UI 개선 작업.</p>
                        <p><strong>기간:</strong> 2018.07 - 2018.10</p>
                        <p><strong>사용 기술:</strong> Objective-C</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://itunes.apple.com/kr/app/pufscanner/id1084263211?mt=8">Pufscanner</a></p>
                        <div class="image-gallery">
                            <img src="images/퍼프스케너-1.jpg" alt="Linxtelecom" onclick="openModal(this)">
                            <img src="images/퍼프스케너-2.jpg" alt="Linxtelecom" onclick="openModal(this)">
                        </div>
                        <h3>정보처리기사 취득</h3>
                        <p><strong>기간:</strong> 2018.08</p>
                        <p><strong>발급처:</strong> 한국산업인력공단</p>
                        <h3>스마트윈도우</h3>
                        <p>아두이노와 iOS앱을 활용한 자동창문. iOS 앱과 아두이노 연동 개발을 진행하였습니다.</p>
                        <p><strong>기간:</strong> 2020.12</p>
                        <p><strong>사용 기술:</strong> Swift, Core Bluetooth</p>
                        <p><strong>시연 영상:</strong> <a href="video/smartwindowapp.mp4" target="_blank">시연 영상 보기</a></p>
                    </div>
                </section>
            `
                }
            ]
        },
        {
            id: "bookRead",
            title: "독서 기록",
            items: [
                {
                    id: "bookRead1",
                    title: "독서력 향상",
                    content: `
                        <section>
                            <h2>책 읽는 것도 연습이 필요합니다</h2>
                            <h3>책을 효과적으로 읽기 위해서는 몇 가지 중요한 방법을 알아야 합니다:</h3>
                                <ul>
                                    <li>독서 근육 강화: 눈과 머리의 시너지</li>
                                    <li>메모하고 요약하는 능력</li>
                                    <li>읽은 책의 내용을 기억하는 능력</li>
                                </ul>

                            <h3>이런 내용들은 당연하게 들릴 수 있지만, 이를 훈련할 수 있는 방법도 있습니다:</h3>
                                <ul>
                                    <li>한 페이지를 읽는 데 목표 시간을 설정하고, 스톱워치를 사용해 1페이지에 1분을 목표로 연습</li>
                                    <li>한 줄을 읽을 때 벗어나지 않고 처음부터 끝까지 이동하는 연습</li>
                                    <li>뜻을 파악하기 위해 연습하되, 이해가 안 되더라도 다음 줄로 넘어가는 연습</li>
                                </ul>
                        </section>

                    `
                }
            ]
        },
        {
            id: "study",
            title: "공부 기록",
            items: [
                {
                    id: "study1",
                    title: "공부 기록 시작의 배경",
                    content: `
                        <h2>취업 준비</h2>
                        <p>근 3개월간 취업 준비를 하며 다양한 회사에 이력서를 제출하며 안좋은 결과를 받았습니다.</p>
                        <p>제가 얼마나 게을럿는지를 몸소 느끼며 기초부터 다시 탄탄하게 준비를 해야 겠다는 필요성을 느꼇습니다.</p>
                        <p>그리하여 블로그에 공부 기록을 하기로 했습니다.</p>
                        <p>기록과 함께 탄력을 얻기 위하여 F-lab에 등록하여 여정을 시작하게 되었습니다.</p> 
                    `
                },
                {
                    id: "study2",
                    title: "첫번째 날 Swift란",
                    content: `
                        <section>
                            <h2>Swift를 애플이 왜 만들었을까?</h2>
                            <p>Swift 언어는 여러 이유로 개발되었습니다:</p>
                                <ul>
                                    <li>개발자 유입을 증가시키기 위해: 현대적인 언어를 선호하는 새로운 개발자들이 Swift에 매력을 느낄 것입니다.</li>
                                    <li>진입장벽이 낮고 성능이 뛰어나다는 애플의 발표가 있었습니다. 그러나 언어가 발전함에 따라 점점 기능이 늘어나면서 진입장벽이 높아지고 있습니다.</li>
                                </ul>

                            <h2>함수형 프로그래밍이란 무엇일까?</h2>
                            <p>함수형 프로그래밍은 함수 자체를 객체처럼 사용할 수 있는 프로그래밍 패러다임을 말합니다.</p>

                            <h2>딕셔너리와 배열의 차이점은 무엇일까?</h2>
                                <ul>
                                    <li><strong>배열:</strong> 인덱스와 값으로 구성됩니다.</li>
                                    <li><strong>딕셔너리:</strong> 키와 값으로 구성됩니다.</li>
                                </ul>
                            <p>딕셔너리는 해시 알고리즘을 사용하여 성능이 더 좋고, 배열은 순서가 있지만 딕셔너리는 순서가 없습니다.</p>
                            <p>탐색, 추가, 제거 시 복잡도(Big O notation)가 다릅니다.</p>

                            <h2>첫 수업 소감</h2>
                            <p>첫 수업을 듣고 책을 읽을 때 깊이 생각하고 정리하는 습관을 들여야겠다는 필요성을 느꼈습니다. 다음 수업에서는 더욱 유려하게 진행될 수 있도록 준비해가고 싶습니다. 😊</p>
</section>

                        
                    `
                }

            ]
        }
    ]
};

/** 소스코드 
 * <p>Swift에서 변수와 상수를 사용하는 방법은 매우 간단합니다. 다음은 변수와 상수를 선언하는 예제입니다:</p>
                        <pre><code class="language-swift">let constant = 10\nvar variable = 20</code></pre> */

let lastCategoryId = null;

function loadItemContent(itemId) {
    const item = data.categories.flatMap(cat => cat.items).find(it => it.id === itemId);
    if (item) {
        const contentSection = document.getElementById('content-section');
        contentSection.innerHTML = item.content;

        // 카테고리와 타이틀을 구분자로 결합
        const category = data.categories.find(cat => cat.items.some(it => it.id === itemId));
        if (category) {
            document.title = `이승기의 블로그 - ${category.title} > ${item.title}`;
        } else {
            document.title = `이승기의 블로그 - ${item.title}`;
        }

        document.getElementById('currentSection').innerText = item.title;

        // 탭 초기화
        if (item.id === 'portfolio') {
            setTimeout(() => {
                document.getElementById("defaultOpen").click();
            }, 0);
        }

        // Prism.js 코드 하이라이트 적용
        Prism.highlightAll();

        // 뒤로가기 버튼 활성화
        if (category && category.items.length > 1) {
            document.getElementById('backBtn').style.display = 'block';
        } else {
            document.getElementById('backBtn').style.display = 'none';
        }
    }
}



function loadContent(id, page = 1) {
    lastCategoryId = id;  // 마지막 카테고리 ID 저장

    const contentSection = document.getElementById('content-section');
    let category = data.categories.find(cat => cat.id === id);

    if (category) {
        if (category.items.length === 1) {
            // 하위 아이템이 1개일 경우 바로 로드하고 뒤로가기 버튼을 숨김
            loadItemContent(category.items[0].id);
            document.getElementById('backBtn').style.display = 'none';
        } else {
            // 하위 아이템이 여러 개일 경우 페이징 처리
            const itemsPerPage = 10;
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const itemsToShow = category.items.slice(startIndex, endIndex);

            let content = `<h2>${category.title}</h2><ul>`;
            itemsToShow.forEach(item => {
                content += `<li><a href="javascript:void(0)" onclick="loadItemContent('${item.id}')">${item.title}</a></li>`;
            });
            content += `</ul>`;

            const totalPages = Math.ceil(category.items.length / itemsPerPage);
            if (totalPages > 1) {
                content += '<div class="pagination">';
                for (let i = 1; i <= totalPages; i++) {
                    content += `<a href="javascript:void(0)" onclick="loadContent('${category.id}', ${i})">${i}</a> `;
                }
                content += '</div>';
            }

            contentSection.innerHTML = content;
            document.title = `이승기의 블로그 - ${category.title}`;
            document.getElementById('currentSection').innerText = category.title;

            // 뒤로가기 버튼 숨기기
            document.getElementById('backBtn').style.display = 'none';
        }
    }
}

function goBackToCategory() {
    if (lastCategoryId) {
        loadContent(lastCategoryId);  // 마지막 카테고리 리스트로 돌아가기
    }
}



function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}

function loadMenu() {
    const menuContent = document.getElementById('menu-content');
    let html = '';
    data.categories.forEach(category => {
        if (category.items.length === 1) {
            html += `<a href="javascript:void(0)" onclick="loadItemContent('${category.items[0].id}')">${category.title}</a>`;
        } else {
            html += `<a href="javascript:void(0)" onclick="loadContent('${category.id}', 1)">${category.title}</a>`;
        }
    });
    menuContent.innerHTML = html;
}



function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
        document.body.classList.remove("open");
    } else {
        menu.style.left = "0";
        document.body.classList.add("open");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menuBtn").onclick = toggleMenu;
    loadMenu();
    loadContent('portfolio'); // 기본적으로 포트폴리오를 로드
});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}