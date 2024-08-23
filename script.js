
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
        },// 포토폴리오
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
        },// 독서 기록
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
                },// 공부 기록 시작의 배경
                {
                    id: "study2",
                    title: "FLab강의 첫번째 날(1/2)",
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
                },// FLab강의 첫번째 날(1/2)
                {
                    id: "study3",
                    title: "멀티쓰레드 환경에서 동시에 여러 쓰레드가 동일한 자원에 접근할 때란",
                    content: `
                        <section>
                            <h2> 여러 쓰레드가 동일한 자원에 접근할 때란 </h2>
                            <p>경쟁 상태(Race Condition)라 부릅니다.</p>
                            
                            <h2>경쟁 상태란?</h2>
                            <p>경쟁 상태는 두 개 이상의 쓰레드가 동일한 데이터를 동시에 수정하려고 할 때 발생합니다. 이로 인해 예상치 못한 결과나 데이터의 무결성 문제를 일으킬 수 있습니다. 예를 들어, 두쓰레드가 동시에 같은 변수를 수정하려고 할 때, 하나의 쓰레드가 변경한 값이 다른 쓰레드에 의해 덮어씌워질 수 있습니다.</p> 
                            
                            <h2>경쟁 상태의 사례</h2>
                            <h3>은행 계좌 잔액 수정:</h3>
                            <p>두 명의 사용자가 동시에 동일한 은행 계좌에서 돈을 출금하는 상황</p>
                                <ul>
                                    <li>1)쓰레드 1이 잔액을 확인하고 출금을 시작합니다.</li> 
                                    <li>2)쓰레드 2도 잔액을 확인하고 출금을 시작합니다.</li>
                                    <li>3)쓰레드 1이 출금을 완료하고 잔액을 갱신합니다.</li>
                                    <li>4)쓰레드 2가 이미 오래된 잔액을 바탕으로 출금을 완료하고, 잔액을 다시 갱신합니다.</li>
                                </ul>
                            <h2>Swift 경쟁 상태 예제</h2>
                            <p>아래 예제는 Swift에서 경쟁 상태를 설명하기 위한 은행 계좌 출금 코드입니다:</p>
    
                            <pre><code class="language-swift">
            import Foundation

            class BankAccount {
                private var balance: Int = 1000
            // 잔액 조회
            func getBalance() -> Int {
                return balance
            }
            // 출금 메서드
            func withdraw(amount: Int) {
            let currentBalance = getBalance()
            // 출금 중간에 다른 쓰레드가 잔액을 변경하는 경쟁 상태를 시뮬레이션하기 위해 딜레이를 줍니다.
            Thread.sleep(forTimeInterval: Double.random(in: 0.1...0.5))
        
            if currentBalance >= amount {
                balance = currentBalance - amount
                print("성공적으로 \(amount)원 출금, 남은 잔액: \(balance)원")
            } else {
                print("잔액 부족으로 \(amount)원 출금 실패, 현재 잔액: \(balance)원")
            }
        }
    }

    let account = BankAccount()
    // 두 개의 쓰레드를 생성하여 동시에 출금 시도
    let queue = DispatchQueue(label: "bank.queue", attributes: .concurrent)

    queue.async {
        account.withdraw(amount: 700)
    }

    queue.async {
    account.withdraw(amount: 700)
}

Thread.sleep(forTimeInterval: 2)
                            </code></pre>
                            <p><strong>이 코드의 설명:</strong></p>
                            <p><strong>BankAccount</strong> 클래스는 은행 계좌를 나타내며, 초기 잔액은 1000원으로 설정되어 있습니다.</p>
                            <p><strong>withdraw</strong> 메서드는 주어진 금액을 계좌에서 출금합니다.</p>
                            <p>두 개의 쓰레드가 동시에 <strong>withdraw(amount: 700)</strong>을 호출하여 700원을 출금하려고 시도합니다.</p>
                            <p>쓰레드 1이 잔액을 확인하고 출금을 시작할 때, 쓰레드 2도 동시에 같은 금액을 출금하려고 하면 경쟁 상태가 발생할 수 있습니다.</p>
                            <p>만약 두 쓰레드가 동시에 출금을 완료하면, 실제로 잔액이 충분하지 않음에도 불구하고 두 번의 출금이 모두 성공할 수 있습니다.</p>

                        </section>
                    `
                },// 멀티쓰레드 환경에서 동시에 여러 쓰레드가 동일한 자원에 접근할 때란
                {
                    id:"study4",
                    title:"Swift의 변수, 상수 이해하기",
                    content:`
                    <h3>let과 var의 차이점</h3>
                    <p>1.var와 let을 나누는 기준은 무엇인가?</p>
                    <ul>
                        <li>변수가 가르키는 값을 바꾸는게(mutation) 가능한가 가능하지 않은가가 기준</li>
                    </ul>
                    <p>2.struct와 class가 mutation을 나누는 기준은 무엇인가?</p>
                    <ul>
                        <li>Struct에서 mutation이 발생하는 범위는 해당 인스턴스 내에 국한되며, 다른 복사본이나 원본은 영향을 받지 않습니다.</li>
                        <li>Class에서는 mutation이 발생할 때 그 변경 사항이 해당 인스턴스를 참조하는 모든 곳에 적용됩니다.</li>
                    </ul>
                    <p>3.값 타입과 참조타입이라는 것이 영향을 미치는가?</p>
                    <ul>
                        <li>값 타입과 참조타입이 상수일 경우 두가지 다 초기화가 불가능합니다.</li>
                        <li>값 타입의 경우 상수일 경우 인스턴스 값을 변경 할 수 없습니다.</li>
                        <li>Struct 인스턴스의 속성을 변경하면 실제로는 그 인스턴스의 복사본이 변경됩니다. 이는 Struct가 복사본을 통해 전달되기 때문입니다</li>
                        <li>Class 인스턴스의 속성을 변경하면, 그 인스턴스의 모든 참조자가 변경된 상태를 공유하게 됩니다. 이는 Class가 참조로 전달되기 때문입니다.</li>
                    </ul>
                    <p>4.객체의 속성을 바꿀때 class와 struct에서는 각각 어떤 일이 일어나는가??</p>
                    <ul>
                        <li>값 타입의 경우 인스턴스를 변경하거나 새롭운 참조값을 할당하면 새로운 변수값을 만들게 됩니다.</li>
                        <li>참조 타입의 경우 인스턴스를 변경하면 해당 참조를 가진 변수들의 인스턴스도 같이 변경됩니다.</li>
                    </ul>
    
                    <pre><code class="language-swift">
struct S1 {
       var name: String
}

class C1 {
    var name: String = ""
}
//1. 객체가 변수인 경우
var s1:S1 = S1(name: "test2")
var s2:S1 = s1
s1 = S1(name: "test2")
s1.name = "test1" // struct가 변수일 때는 프로퍼티 값을 변경할 수 있다.

print(s1.name)
print(s2.name) // S1구조체의 원본만 수정된다.(구조체는 값타입이기 때문에 복사본으로 넘겨준다.)

var c1:C1 = C1()
var c2:C1 = c1
c1 = C1()
c1.name = "test"

print(c1.name)
print(c2.name) // C1클래스의 원본과 할당받은 c2변수도 같이 수정된다.(클래스는 참조타입이기 떄문에 참조로 전달되며 동일한 인스턴스를 공유힌다.)
//1. 객체가 상수인 경우
let s3:S1 = S1(name: "")
//s3 = S1(name: "") // 변경불가능 오류 발생 : Cannot assign to value: 's3' is a 'let' constant
//s2.name = "test" // 변경불가능 오류 발생 : Cannot assign to property: 's2' is a 'let' constant

print(s3.name)

let c3:C1 = C1()
//c3 = C1() // 할당 오류 발생: Cannot assign to value: 'c3' is a 'let' constant
c3.name = "test" // class는 상수라도 변경이 가능

print(c3.name)
</code></pre>
<table>
  <thead>
    <tr>
      <th>객체 종류</th>
      <th>선언 방식</th>
      <th>객체의 속성을 바꿀 수 있는가?</th>
      <th>변수가 가르키는 인스턴스를 바꿀 수 있는가?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>struct</td>
      <td>var</td>
      <td>예</td>
      <td>예</td>
    </tr>
    <tr>
      <td>class</td>
      <td>var</td>
      <td>예</td>
      <td>예</td>
    </tr>
    <tr>
      <td>struct</td>
      <td>let</td>
      <td>아니요</td>
      <td>아니요</td>
    </tr>
    <tr>
      <td>class</td>
      <td>let</td>
      <td>예</td>
      <td>아니요</td>
    </tr>
  </tbody>
</table>
`
                },// Swift의 변수, 상수 이해하기
                {
                    id:"study5",
                    title:"HashTable 구현",
                    content:`
                    <section>
                    <h3>HashTable이란?</h3>
                    <ul>
                        <li>키를 값에 매핑할 수 있는 구조인,<a href="#footnote1" id="note1">연관 배열<sup>[1]</sup></a> 추가에 사용되는 자료 구조 이다.</li>
                        <li><a href="#footnote2" id="note2">해시 함수<sup>[2]</sup></a>를 사용하여 색인(index)을 버킷(bucket)이나 슬롯(slot)의 배열로 계산한다.</li>
                    </ul>
                    <img src="images/hashTable.png" alt="hashTable">

                    <h3>구현에 필요한 것은?</h3>
                    <ul>
                        <li>hashable프로토콜을 준수하는 키 저장</li>
                        <li>저장 된 키에 고유한 배열의 인덱스</li>
                        <li>배열의 해당 인덱스에 값 저장,조회,삭제,수정</li>
                        <li>인덱스값이 중복될 경우 대처(해시 충돌)</li>
                    </ul>
                    
                        <pre><code class="language-swift">
struct HashTable<Key:Hashable,Value> {
    
    var bucket:[(key,Value?)?] 
    var tableSize:Int

    init(size: Int = 11) { // 초깃값을 줄 때 소수로 주어야 해시 충돌을 줄이는 데 도움이 됩니다.
        self.tableSize = size
        self.bucket = Array(repeating: nil, count: tableSize)
    }

    // 해시 인덱스를 계산하는 함수
    func hashIndex(k:Key) -> Int {
        return abs(k.hashValue) % bucket.count
    }

    mutating func insert(k:Key, v:Value) {
        var index = hashIndex(k: k)

        // 충돌이 발생할 경우 다음 빈 슬롯을 찾습니다.
        while bucket[index] != nil {
            index = (index + 1) % bucket.count
        }

        bucket[index] = (k,v)
        
    }

    mutating func value(k: Key) -> Value? {
        var index = hashIndex(k: k)
        
        while let entry = bucket[index] {
            if entry.0 == k {
                return entry.1
            }
            index = (index + 1) % bucket.count
        }

        return bucket[index]
    }

    mutating func remove(k: Key) {
        var index = hashIndex(k: k)

        while let entry = bucket[index] {
            if entry.0 == k {
                bucket[index] = nil
            }
            index = (index + 1) % bucket.count
        } 
    }
}
                    </code><pre>
                    
                    <h3>원하는 성능이 안나와서 보강이 필요할 듯하다,,</h3>
                        
                    
                    </section>

                     <section>
<p id="footnote1">[1] 연관 배열 : 키 하나와 값 하나가 연관되어 있으며 키를 통해 연관되는 값을 얻을 수 있다. map,dictionary 이라고 부른다. <a href="#note1">↑</a></p>
<p id="footnote2">[2] 해시 함수 : 해시 알고리즘이라고도 부른다. 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다. 해시 함수에 의해 얻어지는 값은 해시 값, 해시 코드, 해시 체크섬 또는 간단하게 해시라고 한다. 그 용도 중 하나는 해시 테이블이라는 자료구조에 사용되며, 매우 빠른 데이터 검색을 위한 컴퓨터 소프트웨어에 널리 사용된다  <a href="#note2">↑</a></p>
</section>   
                    `
                },// HashTable 구현
                {
                   id:"study6",
                   title:"FLab강의 두번째 날(2/2)",
                   content:`
                        <section>
                            <h3>3가지 과제를 시작으로 수업을 시작했습니다.</h3>
                            <p>과제 내용은 아래 버튼으로 이동하여 내용을 볼 수 있습니다.</p>
                            <ul>
                                <li><button onclick="loadItemContent('study3')">멀티쓰레드 환경에서 동시에 여러 쓰레드가 동일한 자원에 접근할 때란</button></li>
                                <li><button onclick="loadItemContent('study4')">Swift의 변수, 상수 이해하기</button></li>
                                <li><button onclick="loadItemContent('study5')">HashTable 구현</button></li>
                            </ul>
                            

                            <h2>어떻게 경쟁상태를 방지할 수 있을까요?</h2>
                            <img src="images/큐의 종류와 특징.png" alt="큐의 종류와 특징">
                            <ul>
                                <li>nsLock을 사용해서 하나의 쓰레드만 접근하도록 합니다.</li>
                                <li>@synchronized를 사용해서 하나의 쓰레드만 접근하도록 합니다.</li>
                                <li>xcode의 Edit Scheme -> Run에서 Thread Sanitizer를 활성화 하면 빌드 시 경쟁 상태가 발생하는 코드를 찾아서 방지할 수 있도록 해줍니다.</li>
                                <li>operationQueue.maxConcurrentOperationCount를 1로 제한하여 직렬 큐로 설정하여 방지합니다.</li>
                                <li>DispatchSemaphore를 사용해서 하나의 쓰레드만 접근하도록 합니다.</li>
                                <li>DispatchQueue의 기본(SerialQueue)의 Sync로 실행 시켜 하나의 쓰레드만 접근하도록 합니다.</li>
                                <li>DispatchQueue async의 인자중 flags:DispatchWorkItemFlags = []의 Flag중 barrier 변수를 넣어주면 변수를 할당받은 스레드에 다른 스레드가 접근 하지 않습니다.</li> 
                            </ul>

                            <h2>스위프트에서 자료구조는 무엇이 있을까요?</h2>    
                            <p>Class, Struct, Enum이 있습니다.</p>

                            <h2>클로저와 함수의 차이는 무엇인가요?</h2>
                            <p>면접에서 많이 들었던 질문,, 항상 틀린 대답을 해온 것 같습니다.</p>
                            <p>정답은 클로저는 이름이 없는 익명함수이고 함수는 이름이 있다는 것,, 개념적으로는 같은 존재 였습니다.</p>

                            <h2>@escaping은 언제 붙여야할까요?</h2>
                            <ul>
                                <li>비동기 작업이 완료된 후 클로저를 호출할 경우, 함수가 종료된 후에도 클로저를 호출해야 합니다. 이경우 @escaping이 필요합니다.</li>
                                <li>함수 내부에서 클로저를 프로퍼티에 저장해야 할 때도 @escaping이 필요합니다.</li>
                                <li>클래스의 인스턴스에 클로저를 저장할 때도 @escaping을 사용해야합니다.</li>
                            </ul>

                            <h2>두 번째 수업 소감</h2>
                            <p>수업 중 기술 질문에 대한 답변으로, 이론적인 개념을 하나의 예시 설명했더니, 강사님께서 지적해주셨습니다.</p>
                            <p>기술 질문에 대한 답변은 <strong>정의</strong>로 대답해야 한다는 것, 당연한 사실이지만 이렇게 직접 듣고 나니 더 와닿았습니다.</p>
                            <p>앞으로는 질문에 대한 답변을 정의를 중심으로 명확하게 하도록 노력하겠습니다! 😊</p>
                        </section>
                   ` 
                },// FLab강의 두번째 날(2/2)
                {
                    id:"study7",
                    title:"ARC란?",
                    content:`
                        <h3>두번째 수업 중 ARC에대한 질문에 대한 답을 하며 A밖에 모른다는 코멘트를 받았습니다.😂😂</h3>
                        <p>부족한점을 명확하게 찾기 위해서 A.R.C 세가지로 나눠서 정리해 보았습니다</p>

                        <dl>
                            <dt><strong>A: Automatic (자동)</strong></dt>
                            <dd>자동: Automatic은 ARC가 객체의 메모리 할당과 해제를 자동으로 수행한다는 것을 의미합니다.</dd>

                            <dt><strong>R: Reference (참조)</strong></dt>
                            <dd>참조: Reference는 객체에 대한 참조를 의미합니다. ARC는 참조를 추적해서 객체가 언제 메모리에서 해제될지 결정합니다.</dd>

                            <dt><strong>C: Counting (카운팅)</strong></dt>
                            <dd>카운팅: Counting은 참조 횟수를 세는 과정을 말합니다. ARC는 각 객체에 대해 몇 개의 참조가 존재하는지 추적합니다.</dd>
                        </dl>
                        <h3>카운터가 쌓이는 과정(참조 횟수 증가)</h3>
                        <pre><code class="language-swift">
class Person {
    let name: String
    
    init(name: String) {
        self.name = name
        print("\(name) is being initialized")
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

// 참조 횟수가 0에서 1로 증가
var john: Person? = Person(name: "John Appleseed")
// 참조 횟수가 1에서 2로 증가
var anotherReference = john

                        </code></pre>
                        <ul>
                            <li>Person 클래스의 인스턴스가 생성될 때 john변수가 할당 받으며 참조 카운터가 1증가합니다.</li>
                            <li>anotherReference변수가 john을 가리키도록 할당되면, 같은 Person 인스턴스에 대한 참조 카운터가 2로 증가합니다.</li>
                        </ul>

                        <h3>카운터가 사라지는 과정(참조 횟수 감소)</h3>
                        <pre><code class="language-swift">
                        // 참조 횟수가 2에서 1로 감소
anotherReference = nil
// 참조 횟수가 1에서 0으로 감소, 이 시점에서 객체가 메모리에서 해제됨
john = nil
                        </code></pre>
                        <ul>
                            <li>anotherReference 변수가 nil을 할당 받으면 Person 인스턴스에 대한 참조 카운터가 2에서 1로 감소합니다.</li>
                            <li>john변수도 nil을 할당 받으면 Person 인스턴스에 대한 참조 카운터가 0이 됩니다. 이순간 ARC에서 Person인스턴스를 메모리에서 해제하고 deinit메서드를 호출합니다.</li>
                        </ul>

                        <h2>ARC 전체 요약:</h2>
                        <p>ARC는 자동으로 참조횟수를 카운팅하여 객체의 메모리관리(할당 및 해제)를 수행하는 시스템입니다.</p>

                        <h2>약한 참조와 강한 참조</h2>
                        <p>ARC는 강한 참조(strong reference)와 약한 참조(weak reference)를 사용해 메모리를 관리합니다:</p>
                        <ul>
                            <li><strong>강한 참조(Strong Reference):</strong> 기본적으로 모든 참조는 강한 참조입니다. 객체가 강한 참조를 가지면 참조 횟수가 증가하여 메모리에서 해제되지 않습니다. 두 객체가 서로를 강하게 참조하면 순환 참조(circular reference)가 발생할 수 있습니다.</li>
                            <li><strong>약한 참조(Weak Reference):</strong> 약한 참조는 참조 횟수를 증가시키지 않습니다. 객체가 더 이상 필요하지 않으면 자동으로 메모리에서 해제되며, 이때 약한 참조는 nil로 설정됩니다. 이는 순환 참조를 방지하는 데 유용합니다.</li>
                            <li><strong>미소유 참조(Unowned Reference):</strong> 약한 참조와 비슷하지만, 참조 대상이 항상 존재할 것이라고 가정할 때 사용됩니다. 대상이 해제되면 nil이 되지 않고, 접근 시 런타임 오류가 발생할 수 있습니다.</li>
                        </ul>
                        <h3>순환 참조 예시 및 해결 방법</h3>
                        <p>다음은 두 클래스 간의 순환 참조를 보여주는 예시입니다:</p>

                        <pre><code class="language-swift">
class Person {
    let name: String
    var apartment: Apartment?
    
    init(name: String) {
        self.name = name
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

class Apartment {
    let unit: String
    var tenant: Person? // 강한 참조로 인해 순환 참조 발생
    
    init(unit: String) {
        self.unit = unit
    }
    
    deinit {
        print("Apartment \(unit) is being deinitialized")
    }
}

var john: Person? = Person(name: "John Appleseed")
var unit4A: Apartment? = Apartment(unit: "4A")

john?.apartment = unit4A
unit4A?.tenant = john
                        </code></pre>

                        <p>위 코드에서는 Person과 Apartment 객체가 서로를 강하게 참조하고 있습니다. 이로 인해 둘 다 참조 횟수가 0이 되지 않아 메모리에서 해제되지 않습니다.</p>

                        <h4>해결 방법:</h4>
                        <p>이 문제를 해결하기 위해 약한 참조를 사용하여 순환 참조를 방지할 수 있습니다:</p>

                        <pre><code class="language-swift">
class Apartment {
    let unit: String
    weak var tenant: Person? // 약한 참조로 변경하여 순환 참조 해결
    
    init(unit: String) {
        self.unit = unit
    }
}
                        </code></pre>

                        <p>이제 Apartment 클래스의 tenant 프로퍼티가 약한 참조로 설정되었으므로, Person 인스턴스가 메모리에서 해제될 때 Apartment 인스턴스도 메모리에서 정상적으로 해제됩니다. 이로써 순환 참조 문제를 해결할 수 있습니다.</p>

                    `
                },// ARC란???
                {
                    id:"study8",
                    title:"ARC와 GC의 차이는??",
                    content:`
                        <h3>ARC에대한 이해를 위해 GC와의 차이점을 공부하기로 했습니다!</h3>
                        <p>기존에 알던 차이점으로는 컴파일타임과 런타임에 정적과 동적인 메모리 관리방식이 차이점으로 알고있는 정도였지만 생각보다 세세하게 알 수 있었습니다.</p>

                        <dl>
                            <dt>메모리 관리 방식</dt>
                            <dd>
                                <strong>ARC (Automatic Reference Counting):</strong> 
                                ARC는 컴파일러가 코드에서 객체의 참조 횟수를 추적하여, 참조 횟수가 0이 되면 객체를 메모리에서 자동으로 해제하는 방식입니다. 
                                Swift와 Objective-C에서 사용되며, 참조 횟수가 변할 때마다 메모리 관리가 이루어집니다. 
                                객체를 참조하는 변수가 있을 때 참조 카운터가 증가하고, 참조가 해제되면 카운터가 감소합니다. 
                                참조 카운터가 0이 되면 객체는 메모리에서 해제됩니다. ARC는 실시간으로 작동하여 객체의 메모리를 관리합니다.

                                <br><br>

                                <strong>GC (Garbage Collection):</strong> 
                                GC는 런타임에 주기적으로 실행되는 메모리 관리 방식입니다. 
                                Java, C# 등에서 사용되며, 프로그램이 실행되는 동안 가비지 컬렉터가 주기적으로 더 이상 사용되지 않는 객체를 탐색하여 메모리에서 해제합니다. 
                                GC는 참조 그래프를 사용하여 접근할 수 없는 객체들을 찾아 메모리에서 제거하는 반면, 해제 시점은 예측할 수 없습니다. 
                                이 방식은 메모리 누수를 방지하는 데 효과적이지만, 가비지 컬렉션이 실행될 때 일시적인 성능 저하가 발생할 수 있습니다.

                                <br><br>

                                <strong>차이점:</strong> 
                                ARC는 참조 횟수에 따라 객체를 즉시 해제하는 반면, GC는 주기적으로 불필요한 객체를 정리합니다. 
                                ARC는 실시간으로 작동해 메모리 해제 시점이 명확하지만, 순환 참조 문제가 발생할 수 있습니다. 
                                반면 GC는 이러한 문제를 자동으로 해결하지만, 가비지 컬렉션이 실행되는 동안 성능 저하가 발생할 수 있습니다.
                            </dd>
                        </dl>
                        
                        <br><br>

                        <dl>
                            <dt>성능과 효율성</dt>
                            <dd>
                                <strong>ARC (Automatic Reference Counting):</strong>
                                참조 횟수가 0이 되는 즉시 객체를 해제합니다. 메모리 누수가 적습니다.
                                하지만, 순환 참조 문제가 발생할 수 있어, 이를 방지하기 위해 개발자가 약한 참조나 미소유 참조를 사용해야합니다.

                                <br><br>
                                
                                <strong>GC (Garbage Collection):</strong>
                                메모리 정리 작업을 주기적으로 실행합니다. 실행되는동안 성능 저하가 발생할 수 있습니다.
                                메모리 관리가 완전히 자동화되어 개발자가 메모리 누수 문제를 직접 처리할 필요가 없습니다.
                                객체를 즉시 해제하지 않기 때문에, 메모리 사용량이 불필요하게 증가할 수 있습니다.
                            </dd>
                        </dl>

                        <br><br>

                        <dl>
                            <dt>메모리 누수와 순환 참조</dt>
                            <dd>
                                <strong>ARC (Automatic Reference Counting):</strong>
                                순환 참조가 발생하면 참조 횟수가 0이 되지 않아 객체가 메모리에서 해제되지 않는 문제가 발생합니다.

                                <br><br>

                                <strong>GC (Garbage Collection):</strong>
                                참조 그래프를 기반으로 객체 간의 참조를 분석하여, 더 이상 접근할 수 없는 객체를 해제합니다.
                                순환 참조가 있어도, 접근할 수 없는 객체로 간주되면 자동으로 메모리에서 해제됩니다. 
                            </dd>
                        </dl>

                        <br><br>



                    `
                },// ARC와 GC의 차이는??
                {
                    id:"study9",
                    title:"Optional의 구조란?",
                    content:`
                        <h3>수업 중 Optional의 구조는 어떻게 구성되어있는가에 대한 질문을 받고 그에대한 글을 작성하게 되었습니다.</h3>
                        <p>정의 : 옵셔널(Optional)은 값을 감싸거나 값이 없는 상태를 나타내는 타입입니다.</p>

                        <pre><code class="language-swift">
@frozen
enum Optional<Wrapped> where Wrapped : ~Copyable {
    // Swift 5.1 이후 도입된 변경 사항: @frozen 및 ~Copyable 제약 조건 추가
    case none
    case some(Wrapped)
}

// Swift 5.1 이전의 전통적인 Optional 구현 방식
enum Optional<Wrapped> {
    case none
    case some(Wrapped)
}

                        </code></pre>

                        <dl>
                            <dt>Optional</dt>
                            <dd>Enum으로 두 가지 경우를 가진 열거형입니다. Optional.none과 Optional.some(Wrapped)로 이루어져 있습니다.</dd>

                            <dt>@frozen</dt>
                            <dd>Swift 5.1에서 도입되었으며, enum이나 struct가 고정(frozen)되었음을 나타내는 어노테이션입니다. 이 어노테이션은 해당 타입의 구현이 이후 변경되지 않음을 의미합니다.</dd>

                            <dt>Copyable</dt>
                            <dd>Swift의 새로운 프로토콜로, 값을 복사할 수 있는 타입을 나타냅니다. 위 소스코드의 ~Copyable은 Wrapped 타입이 복사 가능하지 않음을 의미합니다.</dd>
                        </dl>

                        
                    `                    
                },// Optional의 구조란?
                {
                    id:"study10",
                    title:"RIBs란?(1/)",
                    content:`
                        <h3>프로젝트를 하기에 앞서 RIBs아키텍처를 사용하기위한 사전공부를 위한 글을 작성합니다.</h3>
                        RIBs의 GIT에 나와있는 Readme를 읽어보면 처음에 RIBs의 개요가 나오는데 거기서 설명하는
                        RIB에 대한 설명을 먼저 보고싶어서 RIB의 구성요소부터 살펴보기로 했습니다.
                        
                        <dl>
                            <dt>RIB의 구성 요소</dt>
                            <dd>
                                    <img src="images/RIB의 구조.png" alt="RIB의 구조">
                                    <p class="image-credit">
    이미지 출처: <a href="https://github.com/uber/ribs/raw/assets/documentation">uber/RIBs</a>
</p>
                                    <strong>Interactor</strong>
                                    <li>역할: 비즈니스 로직을 포함합니다. 여기서 Rx 구독을 수행하며, 상태 변경, 데이터 저장 위치를 결정합니다. 또한 하위 RIB으로(상속아님 RIBs끼리의 상하관계가있음) 첨부할지 결정합니다.</li>
                                    <li>의존성: Router에 의존하여 자식 RIB을 추가하거나 제거할 수 있으며, 필요에따라 Presenter나 View와 상호작용하여 UI를 업데이트합니다. 또한, Component를 통해 의존성을 주입받아 사용할 수 있습니다.</li>
                                    <strong>Router</strong>
                                    <li>역할: Interactor의 상태나 이벤트를 감지하고, 그결과에 따라 하위 RIB을 첨부하거나 분리합니다.</li>
                                    <li>의존성: Interactor와 상호작용하여 비즈니스 로직의 결과에 따라 자식 RIB을 동적으로 추가 또는 제거합니다. 또한, Builder에서 생성된 다른 구성 요소와도 협력합니다.</li>
                                    <strong>Builder</strong>
                                    <li>역할: RIB의 구성 요소 클래스와 자식 RIB의 빌더를 인스턴스화하는 역할을 합니다.</li>
                                    <li>의존성: Component에 의존하여 필요한 의존성을 주입받고, 이를 기반으로 RIB의 구성 요소들을 생성합니다.</li>
                                    <strong>Presenter - Optional</strong>
                                    <li>역할: 비즈니스 모델을 뷰 모델로 번역하고 그 반대로 번역하는 역할을 합니다.</li>
                                    <li>의존성: Interactor와 상호작용하여 데이터를 받아 뷰에 전달하지만, 뷰와의 직접적인 상호작용을 피할 수 있습니다.</li>
                                    <strong>View(Controller) - Optional</strong>
                                    <li>역할: UI작업을 합니다.</li>
                                    <li>의존성: Interactor 또는 Presentor에서 전달된 데이터를 기반으로 UI를 업데이트 합니다.</li>
                                    <strong>Component</strong>
                                    <li>역할: RIB의 의존성을 관리합니다. 빌더가 RIB을 구성하는 다른 유닛을 인스턴스화하는 것을 도우며, 외부 의존성에 접근하고, RIB 자체가 생성한 의존성을 관리하며, 다른 RIB가 이들에게 접근하는 것을 제어합니다.</li>
                                    <li>의존성: Builder와 상호작용하여 다른 구성 요소에 의존성을 주입합니다. 이를 통해 RIB간의 의존성을 관리하고, 필요한 경우 상위 RIB의 의존성을 하위 RIB에 전달할 수 있습니다.</li>
                                </ul>
                            </dd>
                        </dl>

                        <h4>구성 요소 간의 상호 의존성</h4>
                        <p>RIBs 아키텍처에서 각 구성 요소들은 서로 밀접하게 상호작용하며 애플리케이션의 상태와 동작을 관리합니다. 다음은 주요 구성 요소들 간의 상호 의존성에 대한 설명입니다.</p>

                        <h5>Interactor와 Router</h5>
                        <p>인터랙터는 라우터에 의존하여 비즈니스 로직의 결과에 따라 자식 RIB를 동적으로 관리합니다. 라우터는 인터랙터의 지시에 따라 자식 RIB를 추가하거나 제거하며, 상위 및 하위 RIB 간의 관계를 유지합니다.</p>

                        <h5>Presenter와 View (Optional)</h5>
                        <p>프리젠터는 비즈니스 로직의 결과를 뷰에 전달하기 위해 사용됩니다. 하지만 프리젠터가 항상 필요한 것은 아니며, 간단한 RIB의 경우 인터랙터가 직접 뷰와 상호작용할 수 있습니다. 이러한 경우, 프리젠터는 생략될 수 있습니다.</p>

                        <h5>Builder와 Component</h5>
                        <p>빌더는 컴포넌트를 통해 의존성을 주입받아 RIB의 구성 요소들을 인스턴스화합니다. 컴포넌트는 RIB의 전체 의존성 관리를 담당하며, 빌더가 이를 활용하여 인터랙터, 라우터, 프리젠터, 뷰를 생성합니다.</p>

                        <h5>Component와 RIBs 간의 의존성 관리</h5>
                        <p>컴포넌트는 의존성을 관리하는 핵심 역할을 하며, 이를 통해 RIB 간의 결합도를 줄이고 모듈화를 촉진합니다. 상위 RIB의 의존성을 하위 RIB에 전달함으로써, 각 RIB는 독립적으로 동작할 수 있습니다.</p>

                        <h4>결론</h4>
                        <p>이 다이어그램은 Uber의 RIBs 아키텍처에서 구성 요소들이 어떻게 상호작용하며, 각각의 역할을 수행하는지를 시각적으로 설명합니다. 특히, 의존성 관리와 구성 요소 간의 분리된 역할이 RIBs의 핵심 개념이며, 이는 큰 규모의 애플리케이션에서 복잡한 상태 관리를 단순화하고 테스트 가능성을 높이는 데 중요한 역할을 합니다.</p>
                    `

                },// RIBs란?
                {
                    id:"study10",
                    title:"RIBs란?(2/)",
                    content:`
                        
                        <h3>RIBs의 정의</h3>
                        RIBs는 Uber의 크로스 플랫폼 아키텍처 <strong>프레임워크!</strong>
                        대규모 모바일 애플리케이션을 위해 설계되었습니다. Uber에서 아래와 같은 원칙을 따라서 설계했습니다.
                        <ul>
                            <li><strong>크로스 플랫폼 협업 장려:</strong> iOS와 AOS각각의 RIBs프레임워크 로직이 대부분 유사합니다.(공동으로 설계된 아키텍처를 공유 가능.)</li>
                            <li><strong>전역 상태와 결정 최소화:</strong> </li>
                        </ul>
                    `

                }// RIBs란?
            ]
        },// 공부 기록
        {
            id:"seminar",
            title:"세미나",
            items:[
                {
                    id:"seminar1",
                    title:"F-Lab 취업/이직 세미나",
                    content:`
                        <section>
 
    <h3>평가 기준</h3>
    <ul>
        <li>평소에 얼마나 잘 했는가? (잔디를 깔거나, 블로그를 열심히 썼다거나)</li>
        <li>자신이 한 일에 대한 논리가 얼마나 깊은가? (사고력)</li>
        <li>삶에 대한 태도는 어떠한가? (마인드셋)</li>
        <li>협업할 때 이상적인 모습을 알고 있는가? 그대로 실천하는가?</li>
    </ul>

    <h3>핵심 메시지</h3>
    <img src="images/개발자 커리어의 악순환.png" alt="개발자 커리어의 악순환">
    <p><strong>"장기적"</strong>으로 보고 <strong>"꾸준히"</strong> 하자. 개발자 커리어의 악순환에서 나오는 이미지, 딱 현재의 나를 나타내는 이미지다.</p>
    <p>조바심을 먼저 버리자. 이겨야 할 것은 바로 나 자신이다.</p>
    <p>반년 안에 네카라쿠배 못 간다. 유행하는 기술들 쓴다고 못 간다. 지금 같은 경우는 면접관들도 깐깐하게 본다. 회사에서도 요구하는 게 높아졌다. 하지만 장기적으로 꾸준하게 한 사람이 흔하지 않다.</p>
    

    <h3>회사에서 원하는 인재상</h3>
    <ul>
        <li>더 많은, 더 희소한, 더 어려운, 더 중요한 일을 한다 == 가격(연봉)이 높다</li>
        <li>이력서를 쓰지 말고 제안서를 쓴다는 느낌으로 쓰자</li>
        <li>나는 판매하는 제품으로서 얼마나 매력이 있는가를 어필하자</li>
        <li>일정에 맞는 속도를 내면서도 정확한 프로그램을 제공할 수 있는가?</li>
        <li>지금 작성한 프로그램의 구조가 미래의 비즈니스 확장에 지장을 주지 않는가?</li>
        <li>동료들과 어울리는데 문제가 없는가?</li>
        <li>나와 함께하는 동료들의 경험을 향상시켜줄 수 있는가?</li>
        <li>지금은 조금 부족하더라도 금방 배워서 성장할 수 있는 자세와 성실함이 있는가?</li>
    </ul>

    <h3>면접의 비유</h3>
    <p>면접은 마치 소개팅과 같다. 서로 엮어가는 것이 중요하다.</p>

    <h3>이력서 작성 팁</h3>
    <ul>
        <li>에초에 쓸거리가 없게 일했으면 쓸 게 없다.</li>
        <li>흘러가는 대로 살아왔거나 하는 게 나쁘진 않지만, 그럴 경우 쓸 것이 없을 수 있다.</li>
        <li>자신의 강점을 잘 찾아내지 못할 때가 있는데, 그것을 찾는 방법부터 알아야 한다.</li>
        <li>지금 당장 역량이 부족하더라도 장기적으로 커리어를 보면서 쓰자.</li>
        <li>이직하고 나서 생각하자는 것은 실패할 가능성이 매우 높다.</li>
        <li>5년 후 네카라쿠배를 갈 마음으로 계획을 세워보자.</li>
        <li>입시를 하지 말고 진정으로 좋은 개발자가 되자.</li>
    </ul>

    <h3>꾸준함의 중요성</h3>
    <p>지금부터라도 고민하며 만들자. 물증을 만들어라.</p>
    <ul>
        <li>오늘부터 TIL 레포지를 만들어서 하루에 한 번이라도 쓰자.</li>
        <li>잔디는 성실함의 증거이다. 잔디가 좋은 개발자를 판단하는 척도는 아니지만, 없는 것보단 낫다.</li>
        <li>Pull request, 브랜치 관리, 블로그 등도 물증이 될 수 있으니 할 수 있으면 다 하자.</li>
    </ul>

    <h3>잘하는 사람이 되고 싶다면</h3>
    <ul>
        <li>블로그 상위 글에 정말 잘한 것 같은 것을 5개 정도 올려놓자.</li>
        <li>커뮤니케이션이 좋다는 것을 보여주기 위해서는 ReadMe를 잘 쓰고, 정리를 잘하는 모습을 쌓아놔야 한다.</li>
    </ul>

    <h3>맞춤형 이력서 작성</h3>
    <ul>
        <li>개발 환경, 제품 등을 보고 (나군) 지원하는 사람은 좋게 보지 않는다.</li>
        <li>홈페이지에 팀 문화를 보고 그 문화와 이력서를 엮어서 쓰면 좋다.</li>
        <li>몰입이 유행인가? 토스와 당근 팀 문화에는 몰입을 강조했다.</li>
        <li>회사에서 떨어져도 지원을 많이 하자. 면접에 많이 갈수록 배우는 게 많다.</li>
        
    </ul>

    <img src="images/왼쪽보단 오른쪽을 봐야한다.png" alt="왼쪽보단 오른쪽을 봐야한다">
    <p>회사에 맞춰 이력서를 쓰려면 <a href="#footnote1" id="note1">JD<sup>[1]</sup></a>를 보라.</p>

    <h3>면접에서의 대화 예시</h3>
    <ul>
        <li>우리 팀의 핵심 목표는 무엇이었나요?</li>
        <li>우리 회사의 특징은 무엇이었나요?</li>
        <li>그때는 못했어도 지금 다시 한다면 어떻게 할 것 같으신가요?</li>
        <li>회사에선 하지 못했지만 외부에서는 무엇을 했었나요?</li>
    </ul>
    <p>자비를 들여 F-Lab과같은 플랫폼에 등록하여 공부하고 있다는 것을 성장에 욕심이 있고 열정이 있다는 식으로 어필하는 것도 좋은 방법.</p>
    <p>(예를 들어 파킹프렌즈에서 cs업무를 최대한 쳐내기 위해서 기술적인 개선보다는 이슈를 없애는 것에 집중을 했고
                        구조가 올바르지 않았기 때문에 여유가 될 때 구조를 리팩토링 하였고
                        라이브러리 만료일이 있는데 마이그레이션이 안돼서 전체적으로 마이그레이션 작업을 진행했습니다.) </p>

    <h3>중요한 태도</h3>
    <p>남 탓, 회사 탓 하지 않기. 남 탓보다는 내 탓을 하자. (네이비씰 승리의 기술 << 추천)</p>

    
    
</section>
<section>
<p id="footnote1">[1] JD (Job Description): 채용 공고에서 제공하는 직무 설명입니다. <a href="#note1">↑</a></p>
</section>

                        
                    `
                }
            ]
        } // 세미나
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