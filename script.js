
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
            id: "study",
            title: "공부 기록",
            items: [
                {
                    id: "study1",
                    title: "Swift 기초",
                    content: `
                        <h2>Swift 기초</h2>
                        <p>Swift의 기초 문법과 활용 방법을 정리한 내용입니다.</p>
                        <h3>변수와 상수</h3>
                        <p>Swift에서 변수와 상수를 사용하는 방법은 매우 간단합니다. 다음은 변수와 상수를 선언하는 예제입니다:</p>
                        <pre><code class="language-swift">let constant = 10\nvar variable = 20</code></pre>
                    ` 
                },
                {
                    id: "study2",
                    title: "RxSwift 활용",
                    content: `
                        <h2>RxSwift 활용</h2>
                        <p>RxSwift를 활용한 리액티브 프로그래밍 기법에 대한 내용입니다.</p>
                        <h3>Observable과 Observer</h3>
                        <p>RxSwift의 기본 개념인 Observable과 Observer에 대해 알아보겠습니다. 다음은 간단한 Observable 예제입니다:</p>
                        <pre><code class="language-swift">let observable = Observable.just(1)\nobservable.subscribe { event in\n  print(event)\n}</code></pre>
                    `
                },
                {
                    id: "study3",
                    title: "SwiftUI 기초",
                    content: `
                        <h2>SwiftUI 기초</h2>
                        <p>SwiftUI를 이용한 UI 구성 방법을 설명합니다.</p>
                        <h3>뷰와 레이아웃</h3>
                        <p>SwiftUI에서 뷰와 레이아웃을 구성하는 방법을 살펴보겠습니다. 다음은 간단한 SwiftUI 뷰 예제입니다:</p>
                        <pre><code class="language-swift">struct ContentView: View {\n  var body: some View {\n    Text("Hello, World!")\n  }\n}</code></pre>
                    `
                }
            ]
        }
    ]
};

function loadItemContent(itemId) {
    const item = data.categories.flatMap(cat => cat.items).find(it => it.id === itemId);
    if (item) {
        const contentSection = document.getElementById('content-section');
        contentSection.innerHTML = item.content;
        document.title = `이승기의 블로그 - ${item.title}`;
        document.getElementById('currentSection').innerText = item.title;

        // 탭 초기화
        if (item.id === 'portfolio') {
            setTimeout(() => {
                document.getElementById("defaultOpen").click();
            }, 0);
        }
        // Prism.js 코드 하이라이트 적용
        Prism.highlightAll();
    }
}


function loadContent(id, page = 1) {
    const contentSection = document.getElementById('content-section');
    let category = data.categories.find(cat => cat.id === id);

    if (category) {
        if (category.items.length === 1) {
            // 하위 아이템이 1개일 경우 바로 로드
            loadItemContent(category.items[0].id);
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
        }
    } else {
        const item = data.categories.flatMap(cat => cat.items).find(it => it.id === id);
        if (item) {
            contentSection.innerHTML = item.content;
            document.title = `이승기의 블로그 - ${item.title}`;
            document.getElementById('currentSection').innerText = item.title;

            // 탭 초기화
            if (item.id === 'portfolio') {
                setTimeout(() => {
                    document.getElementById("defaultOpen").click();
                }, 0);
            }
            // Prism.js 코드 하이라이트 적용
            Prism.highlightAll();
        }
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

document.addEventListener("DOMContentLoaded", function() {
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