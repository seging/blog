
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
                        <li>네오플러스: 2019.07 - 2020.05</li>
                        <li>ICB: 2021.01 - 2022.11</li>
                        <li>MDS Tech: 2023.12 - 2024.03</li>
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
                        <h3>MDS Tech(2022년 12월 ~ 2024년 3월)</h3>
                        <h3>파킹프렌즈 앱</h3>
                        <ul>
                            <li>MDS Tech의 파킹프렌즈 앱은 전임자가 오랫동안 부재한 상태로 방치되어 많은 고객 불만이 쌓여 있었습니다. 특히, 
                            가장 많은 불만을 받았던 부분은 메인 지도 화면이었습니다. 저는 사용자의 피드백을 반영하여 메인 화면을 대대적으로 리팩토링하였습니다. 
                            기존 UI는 크기가 작아 사용성에 불편을 주었고, 이로 인해 지속적인 CS 요청이 있었습니다. 이를 해결하기 위해 기획과 디자인을 새롭게 개선하였으며, 
                            사용자 테스트를 통해 UI 구성 요소를 재배치하고 크기를 확장했습니다. 또한 RxSwift를 사용하여 데이터 바인딩을 단순화하여 유지보수성과 성능을 모두 개선하였습니다. 
                            팩토리 패턴을 활용해 의존성을 분리함으로써 뷰와 뷰모델 간의 결합도를 낮추고, 코드의 재사용성과 테스트 용이성을 높였습니다. 이러한 개선 이후, 
                            지속적인 안정화 작업을 통해 쌓여 있던 CS를 0%까지 감소시키는 성과를 거둘 수 있었습니다.</li>
                        </ul>
                        <p><strong>사용 기술:</strong> Swift, RxSwift, Kotlin, RxKotlin</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/%ED%8C%8C%ED%82%B9%ED%94%84%EB%A0%8C%EC%A6%88/id1437488741">파킹프렌즈</a></p>
                        <div class="image-gallery">
                            <img src="/images/파킹프렌즈1.PNG" alt="MDS" onclick="openModal(this)">
                            <img src="/images/파킹프렌즈2.PNG" alt="MDS" onclick="openModal(this)">
                        </div>
                        <h3>파킹프렌즈 파트너 앱</h3>
                        <ul>
                            <li>이 프로젝트는 전임자가 중도 퇴사하며 제가 맡게 되었습니다. 팀 내에 React 경험이 있는 사람이 없어 어려운 상황이었지만, 
                            조기 종료된 다른 업무의 여유를 활용해 이 프로젝트를 맡기로 결정했습니다. React는 저에게도 처음이었기 때문에 독학으로 React를 학습하면서 요구사항을 개발하고, 
                            필요한 기능을 추가했습니다. 이후 앱을 성공적으로 배포하고, 유지보수까지 담당하며 프로젝트를 지속적으로 관리했습니다.</li>
                        </ul>
                        <p><strong>사용 기술:</strong> React, Swift</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/%ED%8C%8C%ED%82%B9%ED%94%84%EB%A0%8C%EC%A6%88-%ED%8C%8C%ED%8A%B8%EB%84%88/id1456976566">파킹프렌즈 파트너</a></p>
                        <div class="image-gallery">
                            <img src="/images/파킹프렌즈파트너1.PNG" alt="MDS" onclick="openModal(this)">
                            <img src="/images/파킹프렌즈파트너2.PNG" alt="MDS" onclick="openModal(this)">
                        </div>
                        <h3>ICB(2021년 1월 ~ 2022년 11월)</h3>
                        <h3>GOS 앱</h3>
                        <ul>
                            <li>입사했을 때, 인원이 적어 급한 개발 요청이 있을 때 대처하기 어려운 상황이 자주 발생했고, 
                            특히 결제와 관련된 중요한 작업에서는 인원 부족 시 큰 문제가 될 수 있었습니다. 
                            이러한 문제를 해결하기 위해 제가 맡은 첫 번째 과제는 GOS 앱 구조의 통일화와 모듈화였습니다.
                            iOS와 안드로이드 모두 동일한 구조를 유지하도록 Layer를 3단계로 나누어 MVP 아키텍처를 구축하고, 
                            로직, 클래스 이름, 변수명 등 세세한 부분까지 통일화하였습니다. 
                            이를 통해 플랫폼 간 일관성을 확보하고, 유지보수 효율성을 크게 향상시킬 수 있었습니다.</li>
                        </ul>
                        <p><strong>사용 기술:</strong> Objective-C, Swift, Kotlin, Java</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/gos/id1509217154">GOS</a></p>
                        <div class="image-gallery">
                            <img src="/images/GOS1.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="/images/GOS2.PNG" alt="ICB" onclick="openModal(this)">
                        </div>
                        <h3>Qrick 앱</h3>
                        <ul>
                            <li>Qrick 앱은 해외 결제사 또는 카카오페이 같은 결제 서비스를 오프라인에서 QR 코드나 바코드를 통해 결제할 수 있도록, 
                            Qrick 앱에 충전된 외화를 사용하는 결제 서비스입니다. 이 프로젝트의 작업 중 하나는 해외 앱과 결제 서비스를 연동할 때, 
                            해외 결제사가 승인을 완료할 때까지 앱에서 반복적으로 요청을 보내야 하는 로직을 구현하는 것이었습니다. 
                            이를 위해 폴링(polling) 기법을 사용하여 네트워크 요청을 반복적으로 진행하였고, 이로써 성공적으로 결제 서비스를 완성할 수 있었습니다.</li>
                        </ul>
                        <p><strong>사용 기술:</strong> Objective-C, Swift, Kotlin, Java</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/qrick/id1331822769">Qrick</a></p>
                        <div class="image-gallery">
                            <img src="/images/Qrick1.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="/images/Qrick2.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="/images/Qrick3.PNG" alt="ICB" onclick="openModal(this)">
                            <img src="/images/Qrick4.PNG" alt="ICB" onclick="openModal(this)">
                        </div>
                        <h3>네오플러스(2019년 7월 ~ 2020년 5월)</h3>
                        <h3>지아이티 - 글로벌 서비스 앱 개발</h3>
                        <ul>
                            <li>네오플러스의 글로벌 서비스 앱 개발 프로젝트에서는 멕시코, 러시아, 인도 등의 각국 지역에 맞는 서비스를 제공하기 위해 언어팩을 적용하고 화면을 현지화했습니다. 
                            차량 펌웨어와 연동해 다양한 기능을 구현하면서 현지화 작업을 성공적으로 완료하고, 테스트 단계에서도 신속하게 이슈를 해결해 프로젝트 일정을 앞당겼습니다.</li>
                        </ul>
                        <p><strong>사용 기술:</strong> Objective-C, Swift, Masonry, Firebase, Google Maps, FMDB</p>
                        <h3>사내인트라넷 개발</h3>
                        <ul>
                            <li>네오플러스에서는 사내 인트라넷 앱을 개발하는 프로젝트를 담당했습니다. 
                            기존에는 안드로이드 버전만 존재하던 사내 인트라넷 앱을 iOS 버전으로도 개발하기 위해 제가 주도적으로 프로젝트를 제안하고, 이를 수행했습니다. 
                            이를 통해 iOS 디바이스를 사용하는 직원들도 휴가 정보나 사내 연락처 조회 등 사내 업무를 더 편리하게 이용할 수 있게 되었으며, 
                            회사 내부 업무의 효율성을 높이는 데 기여했습니다.</li>
                        </ul>
                        <p><strong>사용 기술:</strong> Swift, SwiftyJSON, Alamofire, KeychainSwift, SnapKit, FSCalendar</p>
                        <div class="image-gallery">
                            <img src="/images/네오인트라넷-1.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                            <img src="/images/네오인트라넷-2.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                            <img src="/images/네오인트라넷-3.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                            <img src="/images/네오인트라넷-4.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                        </div>
                        
                    </div>
                    <div id="personalProjects" class="tabcontent">
                        <h3>We</h3>
                        <p>커플 D-day, 일정관리 앱. RxSwift와 MVVM 패턴을 활용하여 개발하였습니다.</p>
                        <p><strong>사용 기술:</strong> RxSwift, MVVM</p>
                        <div class="image-gallery"></div>
                        <h3>Nurse Timer</h3>
                        <p>동시에 여러개의 타이머를 등록할 수 있는 watchOS 앱. & 근무 일정 관리 및 타이머를 관리하는 iOS 앱.</p>
                        <p><strong>사용 기술:</strong> SwiftUI, TCA</p>
                        <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/nursetimer/id6477325168">Nurse Timer</a></p>
                        <div class="image-gallery">
                            <img src="/images/NurseTimer-아이폰1.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-아이폰2.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-아이폰3.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-아이폰4.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-아이폰5.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-아이폰6.PNG" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-애플워치1.jpg" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-애플워치2.jpg" alt="Nurse Timer" onclick="openModal(this)">
                            <img src="/images/NurseTimer-애플워치3.jpg" alt="Nurse Timer" onclick="openModal(this)">
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
                            <img src="/images/한이음1.PNG" alt="한이음" onclick="openModal(this)">
                            <img src="/images/한이음2.PNG" alt="한이음" onclick="openModal(this)">
                        </div>
                        <h3>Linxtelecom 외주 프로젝트</h3>
                        <p>기존 custom QR 코드 앱 유지보수 및 UI 개선 작업.</p>
                        <p><strong>기간:</strong> 2018.07 - 2018.10</p>
                        <p><strong>사용 기술:</strong> Objective-C</p>
                        <div class="image-gallery">
                            <img src="/images/퍼프스케너-1.jpg" alt="Linxtelecom" onclick="openModal(this)">
                            <img src="/images/퍼프스케너-2.jpg" alt="Linxtelecom" onclick="openModal(this)">
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
                    title: "FLab강의 첫번째 날",
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
                },// FLab강의 첫번째 날
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
                    <img src="/images/hashTable.png" alt="hashTable">

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
                   title:"FLab강의 두번째 날",
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
                            <img src="/images/큐의 종류와 특징.png" alt="큐의 종류와 특징">
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
                },// FLab강의 두번째 날
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
                    title:"RIBs란?(1/2)",
                    content:`
                        <h3>프로젝트를 하기에 앞서 RIBs아키텍처를 사용하기위한 사전공부를 위한 글을 작성합니다.</h3>
                        RIBs의 GIT에 나와있는 Readme를 읽어보면 처음에 RIBs의 개요가 나오는데 거기서 설명하는
                        RIB에 대한 설명을 먼저 보고싶어서 RIB의 구성요소부터 살펴보기로 했습니다.
                        
                        <dl>
                            <dt>RIB의 구성 요소</dt>
                            <dd>
                                    <img src="/images/RIB의 구조.png" alt="RIB의 구조">
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

                },// RIBs란?(1/2)
                {
                    id:"study11",
                    title:"RIBs란?(2/2)",
                    content:`
                        
                        <h3>RIBs의 정의</h3>
                        RIBs는 Uber의 크로스 플랫폼 아키텍처 <strong>프레임워크!</strong>
                        대규모 모바일 애플리케이션을 위해 설계되었습니다. Uber에서 아래와 같은 원칙을 따라서 설계했습니다.
                        <ul>
                            <strong>크로스 플랫폼 협업 장려</strong>
                            <li>iOS와 AOS각각의 RIBs프레임워크 로직이 대부분 유사합니다.(공동으로 설계된 아키텍처를 공유 가능.)</li>
                            <strong>전역 상태와 결정 최소화</strong>
                            <li><a href="#footnote1" id="note1">전역 상태<sup>[1]</sup></a>를 최소화하여 예측할 수 없는 동작을 방지합니다.</li>
                            <strong>테스트 가능성과 격리</strong>
                            <li>RIB 클래스는 명확한 책임을 가지고 있어야합니다. 독릭접으로 테스트 가능해야 하며, 상위 RIB의 로직은 하위 RIB의 로직과 분리 되어 있어야 합니다.</li>
                            <strong>개발자 생산성 도구</strong>
                            <li>RIBs는 코드 생성, 정적 분석,런타임 통합 등을 지원하는 IDE 도구를 제공합니다.
                                <ul>
                                    코드 생성(Code Generation)
                                    <li>RIBs 아키텍처를 적용한 프로젝트는 반복적이고 구조화된 패턴이 많이 사용됩니다. 이런 패턴을 쉽게 적용할 수 있도록, RIBs의 템플릿을 이용해 자동으로 코드를 생성하는 도구를 제공합니다.</li>
                                    <li>예를 들어, 새로운 RIB을 생성할 때, 필요한 클래스(Interactor, Router, Builder, Component 등)를 자동을오 생성해주는 템플릿이 있습니다.</li>
                                    정적 분석(Static Analysis)
                                    <li>RIBs는 Xcode의 <a href="#footnote2" id="note2">정적 분석<sup>[2]</sup></a> 기능과 통합되어, 코드에서 발생할 수 있는 문제(예:메모리 누수, 잘못된 의존성 주입 등)를 미리 식별하고 경고합니다.</li>
                                    런타임 통합(Runtime Integration)
                                    <li>런타임 시 메모리 누수, 성능 문제 등을 추적할 수 있는 도구와 통합됩니다.</li>
                                </ul>
                            </li>
                        </ul>
                        

                        <section>
                            <p id="footnote1">[1] 전역 상태 : 애플리케이션의 모든 부분에서 접근할 수 있는 상태(데이터)를 의미합니다.<a href="#note1">↑</a></p>
                            <p id="footnote2">[2] 정적 분석 : 코드를 실행하기 전 코드의 잠재적인 문제를 자동으로 검토하고, 버그, 메모리 누수, 잘못된 논리 등을 찾아내는 도구입니다.<a href="#note2">↑</a></p>
                        </section>
                    `

                },// RIBs란?(2/2)
                {
                    id:"study12",
                    title:"RIBs tutorial1(1/2)",
                    content:`
                        <h3>RIBs를 실제로 설치해보고 튜토리얼을 진행하기로 했습니다.</h3>

                        <pre><code>
                            pod 'RIBs', '~> 0.9'
                        </code></pre>
                        Readme에 명시되어있는 버전인 0.9버전으로 설치 했습니다.
                        튜토리얼은 총 5가지로 진행합니다.

                        튜토리얼을 진행하기에 앞서 RIBs의 Xcode Template를 설치했습니다.
                        <pre><code>
                        $/install-xcode-template.sh
                        </code></pre>

                        <dl>
                            <dt>첫 번째 RIB을 만들자</dt>
                            <dd>
                                <strong>RIB아키텍처와 관련 툴링을 사용하여 간단한 TicTacToe 게임을 빌드하게 됩니다.</strong>
                                첫 번째 튜토리얼의 목표는 RIB의 다양한 부분을 이해하고, RIB가 서로 어떻게 상호 작용하고 통신 하는지 이해하는 것입니다.

                                <strong>프로젝트 개요 및 초기 설정</strong>
                                <ul>
                                    <li>RIBs 튜토리얼에서 주어진 iOS 프로젝트는  두 개의 RIB(Routing, Interaction, Business logic)으로 구성되어 있습니다.</li>
                                    <li><strong>Root RIB의 역할</strong></li>
                                    <ul>
                                        <li>앱이 실행되면 AppDelegate에서 Root RIB을 빌드하고 애플리케이션의 제어를 Root RIB에 넘깁니다.</li>
                                        <pre><code class="language-swift">
// AppDelegate.swift
public var window: UIWindow?

public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
                    let window = UIWindow(frame: UIScreen.main.bounds)
                    self.window = window
                    // Root RIB의 Builder클래스를 활용하여 빌드합니다.
                    let launchRouter = RootBuilder(dependency: AppCopmonent()).build()
                    self.launchRouter = launchRouter
                    launchRouter.launch(from: window)

                    return true
}
                                        </code></pre>

                                        <li>Root RIB의 목적</li>
                                        <ul>
                                            <li>RIB 트리의 루트로서 역할을 합니다.</li>
                                            <li>필요할 때 자식 RIB에게 제어를 넘깁니다.</li>
                                        </ul>

                                        <strong>RootBuilder가 전체적으로 어떻게 구성되어있는지 살펴보겠습니다.</strong>
                                        <h3>1. RootDependency 프로토콜</h3>
                                        <pre><code class="language-swift">
// RootBuilder.swift
protocol RootDependency: Dependency {
    // TODO: Root RIB이 생성될 때 필요한 외부 의존성들을 이 프로토콜에 선언해야 합니다.
}
                                        </code></pre>
                                        <ul>
                                            <li><strong>역할</strong>: 프로토콜은 Root RIB가 필요로 하는 외부 의존성들을 정의합니다.</li>
                                            <li><strong>Dependency 프로토콜 상속</strong>: RIBs에서 모든 의존성은 Dependency라는 기본 프로토콜을 상속받습니다. 위 프로토콜은 RIB가 생성될 때 필요한 외부 리소스들을 정의합니다.</li>
                                        </ul>
                                        <h3>RootComponent 클래스</h3>
                                        <pre><code class="language-swift">
// RootBuilder.swift
final class RootComponent: Component<RootDependency> {
    // TODO: 이 클래스 내에서만 사용되는 의존성들이 있다면, 이곳에 선언될 수 있습니다.
}
                                        </code></pre>
                                        <ul>
                                            <li><strong>역할</strong>: Root RIB의 의존성 관리와 객체 생성을 담당합니다.</li>
                                            <li><strong>Component 클래스 상속</strong>: RootDependency를 통해 주입된 의존성들을 관리하고, RIB이 필요로 하는 내부 객체들을 생성하는 역할을 합니다.</li>
                                        </ul>
                                        <h3>RootBuildable 프로토콜</h3>
                                        <pre><code class="language-swift">
// RootBuilder.swift
protocol RootBuildable: Buildable {
    func build() -> LaunchRouting 
}
                                        </code></pre>
                                        <ul>
                                            <li><strong>역할</strong>: Root RIB을 빌드할 수 있는 기능을 정의하는 프로토콜입니다.</li>
                                            <li><strong>Buildable 프로토콜 상속</strong>: RIBs 아키텍처에서 모든 빌더는 Buildable 프로토콜을 상속 받아야 합니다.</li>
                                            <li><strong>build() 메서드</strong>: Root RIB의 라우팅 객체(LaunchRouting)를 반환합니다. LaunchRouting은 RIBs의 기본 라운팅 프로토콜로, RIB이 시작될 때 실행됩니다.</li>
                                        </ul>
                                        <h3>RootBuilder 클래스</h3>
                                        <pre><code class="language-swift">
// RootBuilder.swift
final class RootBuilder: Builder<RootDependency>, RootBuildable {
    override init(dependency: RootDependency) {
        super.init(dependency: dependency)
    }

    func build() -> LaunchRouting {
        let component = RootComponent(dependency: dependency)
        let viewController = RootViewController()
        let interactor = RootInteractor(presenter: viewController)

        let loggedOutBuilder = LoggedOutBuilder(dependency: component)

        return RootRouter(interactor: interactor,
                          viewController: viewController,
                          loggedOutBuilder: loggedOutBuilder)
    }
}
                                        </code></pre>
                                        <ul>
                                            <li><strong>역할</strong>: RootBuilder는 Root RIB을 실제로 빌드하는 역할을 합니다.</li>
                                            <li><strong>Builder 클래스 상속</strong>: Builder<RootDependency>를 상속하여, Root RIB이 필요로 하는 의존성을 주입받고 관리합니다.</li>
                                            <li>빌드 과정</li>
                                            <ul>
                                                <li><strong>1. RootComponent 생성</strong>: RootComponent는 RootDependency를 기반으로 초기화되며, 이후에 필요한 의존성들을 관리합니다.</li>
                                                <li><strong>2. ViewController 생성</strong>: RootViewController는 RIB의 뷰계층을 담당하는 객체입니다.</li>
                                                <li><strong>3. Interactor 생성</strong>: RootInteractor는 비즈니스 로직을 담당하며, RootViewController를 프리젠터로 받습니다.</li>
                                                <li><strong>4. LoggedOutBuilder 생성</strong>: LoggedOutBuilder는 LoggedOut RIB을 생성하는 빌더입니다. 여기서는 RootComponent를 의존성으로 받아 초기화됩니다.</li>
                                                <li><strong>5. RootRouter 생성</strong>: 마지막으로 RootRouter가 생성되며, 이는 RootInteractor, RootViewController, 그리고 LoggedOutBuilder를 사용해 라우팅을 관리합니다.</li> 
                                            </ul>
                                        </ul>
                                    </ul>
                                </ul>
                            </dd>
                        </dl>

                        <h5>다음페이지에서 계속...</h5>
                    `
                },// RIBs tutorial1(1/2)
                {
                    id:"study13",
                    title:"RIBs tutorial1(2/2)",
                    content:`
                        <h3>앞 페이지에서는 앱 시작 시점 불러오는 첫 번째 RIB인 Root RIB에대해서 분석 해보았습니다.</h3>

                        <dl>
                            <dt>두 번째 RIB을 만들자</dt>
                            <dd>
                                <strong>TicTacToe 앱의 두 번째 RIB은 LoggedOut RIB이며, 로그인 인터페이스를 포함하고 인증 관련 이벤트를 관리해야 합니다.</strong>

                                <strong>LoggedOut RIB 소개</strong>
                                <ul>
                                    <li><strong>LoggedOut RIB의 역할</strong></li>
                                    <ul>
                                        <li>로그인 인터페이스를 포함하고 인증 관련 이벤트를 관리합니다.</li>
                                        <li>Root RIB이 앱에 대한 제어를 AppDelegate로부터 받은 후, 즉시 LoggedOut RIB에게 제어를 넘겨 로그인 폼을 표시합니다.</li>
                                    </ul>
                                </ul>

                                <strong>LoggedOut RIB 준비</strong>
                                <ul>
                                    <li>LoggedOut 그룹을 열어보면, 코드 컴파일에 필요한 LoggedOut 소스가 비어있는 형태로 있는 DELETE_ME.swift파일이 있습니다. 이를 제거한 뒤 RIBs 템플릿으로 새로운 LoggedOut RIB을 생성합니다.</li>
                                </ul>
                            </dd>
                        </dl>

                        <br><br>

                        <h3>만들어진 RIB이 실행되는 단계를 정리 해보겠습니다.</h3>

                        <dl>
                            <dt>LoggedOut RIB이 실행되는 단계</dt>
                            <dd>
                                <ul>
                                    <li>만들어진 LoggedOut RIB은 Router가 finished loading 상태가 되었을때 호출되는 Router의 didLoad 메서드를 RootRouter 클래스의 override부분에서 실행하며 시작합니다.</li>
                                    <pre><code class="language-swift">
// RootRouter.swift

private let loggedOutBuilder: LoggedOutBuildable

private var loggedOut:ViewableRouting?

override func didLoad() {
    super.didLoad()

    let loggedOut = loggedOutBuilder.build(withListener: interactor)
    self.loggedOut = loggedOut
    attachChild(loggedOut) //상위 RIB과 연결
    viewController.present(viewController: loggedOut.viewControllable)
}
                                    </code></pre>
                                </ul>
                            </dd>
                        </dl>
                        


                    `

                },// RIBs tutorial1(2/2)
                {
                    id:"study14",
                    title:"FLab강의 세번째 날",
                    content:`
                        <section>
                            <h3>세번쨰 날도 과제에 대한 질문을 시작으로 수업을 시작했습니다.</h3>
                            <p>과제 내용은 아래 버튼으로 이동하여 내용을 볼 수 있습니다.</p>
                            <ul>
                                <li><button onclick="loadItemContent('study6')">Closure escaping은 언제 쓰는지</button></li>
                                <li><button onclick="loadItemContent('study8')">ARC 설명하기</button></li>
                                <li><button onclick="loadItemContent('study10')">RIBs 이해하기</button></li>
                            </ul>
                            

                            <h2>Closure escaping은 언제 쓰는지?</h2>
                            지난번 수업 후기에서 정의로 대답한다는 생각을 가지고 이번 과제에 임했음에도,,
                            선생님과 이야기하면서 저의 대답이 정의 보다는 예시로 밖에 보이지 않았습니다...ㅠ😂

                            그 답에대한 출처는 구글링이였는데 그건 정확한 정의가 될 수없다는 코멘트를 받고
                            https://docs.swift.org/swift-book/documentation/the-swift-programming-language/
                            에서 정의를 찾으라는 말씀을 듣고 저의 부족함도 느꼈습니다 쩝쩝,, 너무 대충 대충 공부했구나 싶네요..
                            구글링에 의존해서 남들이 쓴 블로그로만 정보를 찾은거같아요;😒 
                            
                            <dl>
                                <dt>Closure @escaping의 정의</dt>
                                <dd>
                                    Closure가 함수에 인수로 전달되지만 함수가 반환된 후에 클로저가 호출될 경우 @escaping을 붙여야합니다.
                                </dd>
                            </dl>

                            <h2>ARC 설명하기</h2>    
                            ARC또한 마찬가지 지난번 수업 후기에서 정의로 대답한다는 것을 전혀 지키지 못했는데
                            그동안 면접에서도 개발하면서도 제대로 알지 못하고 사용했던것같습니다, ㅋ;;
                            메모리 관리에서 가장 중요한 것은 메모리를 어떻게 해제 시켜주는가

                            <dl>
                                <dt>ARC가 무엇인가요?</dt>
                                <dd>
                                    ARC는 Swift의 메모리 관리 방식입니다.
                                    객체가 참조 될 경우 자동으로 참초 카운트를 1씩 증가시키며
                                    객체가 해제 될 경우 자동으로 참조 카운트를 1씩 감소시킵니다.
                                    객체는 nil이 할당 되거나 참조가 사라질경우 자동으로 감소시킵니다.
                                    또한, 객체가 스코프에서 벗어날 경우(ex:함수내에서 생성된 객체가 함수가 반환되고 사라진다.)
                                </dd>
                            </dl>

                            <h2>세 번째 수업 소감</h2>
                            이후로는 프로젝트를 어떤식으로 구상할지에대한 이야기를 나누며 수업을 마쳤습니다.
                            Swift를 처음부터 싹 훑으며 질의응답 방식으로 나누는 시간을 가졌는데,,
                            지금 껏 느낀점은 정말 부족한게 많구나 그리고 이제 어떻게 공부해야겠구나
                            이렇게 느꼈습니다. 수업을 진행할 수록 진도에 맞추는거에 대한 걱정 보다는
                            공부해야 할 것이 한참 남았다는 걱정이 드네요.. 일단 주어진 거라도 열심히 해서
                            FLab여정을 잘 따라가야 할 것 같습니다.😊😊
                        </section>
                    `
                },// FLab강의 세번째 날
                {
                    id:"stduy15",
                    title:"Weak, Unowned의 차이",
                    content:`
                        <h3>ARC의 메모리 해제에 대한 질문에대한 답변을 하면서 이어서나온 질문 입니다. </h3>
                        약한 참조(weak reference)와 무소유 참조(unowned reference)는 Swift에서 메모리 관리를 위해 사용하는 두 가지 참조 방식입니다. 이 둘은 ARC(Automatic Reference Counting)에서 순환 참조(메모리 누수)를 방지하기 위해 사용되지만, 사용 방법과 동작 방식에는 차이가 있습니다.

                        <strong>약한 참조 (weak)</strong>
                        <pre><code class="language-swift">
                        class Person {
    var dog: Dog?
}

class Dog {
    weak var owner: Person?
}

                        </code></pre>

                        <ul>
                            <li>약한 참조는 참조 대상 객체가 메모리에서 해제되면 자동으로 nil로 설정됩니다.</li>
                            <li>약한 참조는 항상 옵셔널 타입(Optional)으로 선언되어야 합니다. 왜냐하면 참조 대상이 해제될 경우 참조가 nil이 되기 때문입니다.</li>
                        </ul>

                        <strong>무소유 참조 (unowned)</strong>
                        <pre><code class="language-swift">
class Person {
    var creditCard: CreditCard?
}

class CreditCard {
    unowned let owner: Person
    init(owner: Person) {
        self.owner = owner
    }
}

                        </code></pre>

                        <ul>
                            <li>무소유 참조는 참조 대상 객체가 해제되더라도 nil로 설정되지 않습니다.</li>
                            <li>무소유 참조는 참조 대상 객체가 항상 유효하다고 보장될 때 사용됩니다. 만약 참조 대상 객체가 해제되었는데도 무소유 참조에 접근하면 런타임 오류가 발생합니다.</li>
                            <li>무소유 참조는 옵셔널이 아닌 non-optional 타입으로 선언됩니다.</li>
                        </ul>
                    `
                },// Weak, Unowned의 차이
                {
                    id:"study16",
                    title:"@escaping은 왜 명시적으로 써줘야하는가?",
                    content:`
                        <h3>@escaping의 정의에 대하여 질문에대한 답변을 하면서 이어서나온 질문 입니다.</h3>

                        <strong>Non-escaping 클로저 예시</strong>
                        <pre><code class="language-swift">
                        
func performNonEscapingClosure(closure: () -> Void) {
    print("Non-escaping 클로저 시작")
    closure()
    print("Non-escaping 클로저 끝")
}

performNonEscapingClosure {
    print("이 클로저는 함수 내부에서 바로 실행됩니다.")
}

                        </code></pre>

                        <ul>
                            <li>performNonEscapingClosure 함수는 non-escaping 클로저를 매개변수로 받습니다. 이 클로저는 함수 내에서 즉시 실행되며, 함수가 종료되면 메모리에서 제거됩니다.</li>
                            <li>이 클로저는 함수의 스택 프레임 내에서만 실행되기 때문에 @escaping 키워드가 필요 없습니다.</li>
                        </ul>

                        <strong>Escaping 클로저 예시</strong>
                        <pre><code class="language-swift">
                        
func performEscapingClosure(closure: @escaping () -> Void) {
    print("Escaping 클로저를 저장합니다.")
    DispatchQueue.global().asyncAfter(deadline: .now() + 1) {
        print("Escaping 클로저 실행")
        closure()
    }
    print("함수 종료, 클로저는 나중에 실행됩니다.")
}

performEscapingClosure {
    print("이 클로저는 비동기적으로 함수가 종료된 후 실행됩니다.")
}

                        </code></pre>

                        <ul>
                            <li>performEscapingClosure 함수는 @escaping 클로저를 매개변수로 받습니다. 이 클로저는 함수가 종료된 후, DispatchQueue를 통해 비동기적으로 실행됩니다.</li>
                            <li>이 경우 클로저는 힙에 저장되며, 함수의 스택 프레임이 제거된 이후에도 유지됩니다. 따라서 @escaping 키워드가 필요합니다.</li>
                        </ul>
                    `
                },// @escaping은 왜 명시적으로 써줘야하는가?
                {
                    id:"study17",
                    title:"AVFoundation 분석(1/5)",
                    content:`
                        <h3>AVFoundation이란?</h3>
                        <img src="/images/iOS의 AVFoundation 스택.png" alt="iOS의 AVFoundation 스택">
                        <p class="image-credit">
    이미지 출처: <a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AVFoundationPG/Articles/00_Introduction.html">developer.apple.com/library/archive/documentation</a>
                        <br>
                        이 이미지는 iOS의 <strong>AVFoundation</strong> 프레임워크 스택을 시각적으로 설명하는 다이어 그램입니다.<br>
                        각 레이어는 AVFoundation을 사용하여 오디오와 비디오 관련 기능을 처리하는 구조를 나타냅니다.<br>
                        각 레이어의 역할을 설명하면 다음과 같습니다.<br>

                        <dl>
                            <dt>상단 레이어</dt>
                            <dd>
                                <ul>
                                    <li><strong>AVKit</strong>: AVFoundation 위에 위치하며, 비디오 및 오디오를 쉽게 재생할 수 있는 고수준의 UI 구성 요소를 제공합니다.<br>AVPlayerViewController와 같은 AVKit의 클래스는 비디오 재생을 간단하게 구현할 수 있도록 도와줍니다.</li>
                                    <li><strong>UIKit</strong>: iOS 앱의 사용자 인터페이스를 관리하는 프레임워크입니다. AVFoundation과 함께 사용될 때, UIKit은 미디어를 표시할 인터페이스 요소들을 제공합니다.<br>예를 들어, UIView나 UIImageView를 통해 비디오나 이미지를 보여줄 수 있습니다.</li> 
                                </ul>
                            </dd>

                            <br>

                            <dt>중간 레이어</dt>
                            <dd>
                                <ul>
                                    <li><strong>AVFoundation</strong>: 이 레이어는 오디오와 비디오 작업을 위한 핵심적인 프레임워크로, 미디어 파일을 처리하고, 재생하고, 편집하는 다양한 기능을 제공합니다.<br>이 레이어는 아래의 Core Media, Core Audio, Core Animation과 직접 상호작용합니다.</li>
                                    <li><strong>Audio-only classes</strong>: 이 부분은 AVFoundation의 오디오 전용 클래스를 강조합니다.<br>AVFoundation은 오디오와 비디오를 모두 다루지만, 오디오에 특화된 클래스들이 별도로 존재합니다.</li>
                                </ul>
                            </dd>

                            <dt>하단 레이어</dt>
                            <dd>
                                <ul>
                                    <li><strong>Core Audio</strong>:  오디오의 저수준 처리를 담당하는 프레임워크입니다.<br>오디오 스트림의 캡처, 재생, 프로세싱 등을 매우 세밀하게 제어할 수 있습니다.<br> AVFoundation은 이러한 저수준의 오디오 처리를 기반으로 더 고수준의 오디오 기능을 제공합니다.</li>
                                    <li><strong>Core Media</strong>: 미디어 데이터의 처리, 동기화, 시간 관리 등의 기능을 제공합니다.<br>AVFoundation은 Core Media를 사용하여 미디어 파일을 정확하게 처리하고 동기화합니다.</li>
                                    <li><strong>Core Animation</strong>: UI 및 그래픽 애니메이션을 처리하는 프레임워크입니다.<br>AVFoundation은 미디어 콘텐츠를 애니메이션과 동기화하거나, 애니메이션 효과를 적용하는 데 Core Animation을 사용합니다.</li>
                                </ul>
                            </dd>
                        </dl>

                        Apple Developer AVFoundation 페이지에 나온 내용부터 다뤄 보겠습니다.<br>
                        AVFoundation은 Apple 플랫폼에서 <a href="#footnote1" id="note1">오디오비주얼 미디어<sup>[1]</sup></a>를 검사, 재생, 캡처 및 처리하는 작업을 아우르는 여러 주요 기술 영역을 결합한 프레임워크입니다.
                        
                        <h2>Common</h2>
                        <ul>
                            <strong>Media assets</strong>
                            <li>파일과 스트림에서 미디어 자산을 로드하여 속성, 트랙, 임베디드 메타데이터를 검사합니다.</li>
                            <strong>Media reading and writing</strong>
                            <li>비디오에서 이미지를 읽어오고, 다른 형식으로 내보내며, 미디어 데이터의 샘플 수준 읽기 및 쓰기를 수행합니다.</li>
                            <strong>Media types and utilities</strong>
                            <li>AVFoundation에서 지원하는 콘텐츠 유형과 파일 형식을 식별합니다.</li>
                            <strong>Video settings</strong>
                            <li>표준 키와 값 상수를 사용하여 비디오 처리 설정을 구성합니다.</li>
                            <strong>Audio settings</strong>
                            <li>표준 키와 값 상수를 사용하여 오디오 처리 설정을 구성합니다.</li>
                        </ul>

                        <h3>재생 (Playback)</h3>
                        <ul>
                            <strong>미디어 재생 (Media playback)</strong>
                            <li>미디어 에셋과 중간 콘텐츠의 재생을 관리하고, 해당 콘텐츠를 인터페이스에서 어떻게 표시하는지와는 독립적으로 처리합니다.</li>
    
                            <strong>오프라인 재생 및 저장 (Offline playback and storage)</strong>
                            <li>스트리밍된 콘텐츠를 디스크에 다운로드하여 오프라인 재생을 허용하고, 다운로드한 에셋을 자동으로 제거하는 정책을 정의합니다.</li>
    
                            <strong>스트리밍 및 AirPlay (Streaming and AirPlay)</strong>
                            <li>AirPlay를 사용해 무선으로 다른 장치에 콘텐츠를 스트리밍하며, FairPlay 보호된 에셋이 포함된 요청을 처리합니다.</li>
    
                            <strong>샘플 버퍼 재생 (Sample buffer playback)</strong>
                            <li>샘플 버퍼 스트림의 타이밍을 재생하고 동기화하는 사용자 정의 컨트롤러를 생성합니다.</li>
                        </ul>

                        <h3>캡처 (Capture)</h3>
                        <ul>
                            <strong>캡처 설정 (Capture setup)</strong>
                            <li>내장된 카메라와 마이크, 외부 캡처 장치를 구성하여 미디어를 캡처합니다.</li>
    
                            <strong>사진 캡처 (Photo capture)</strong>
                            <li>고품질의 정지 이미지, Live Photos, 그리고 사진 데이터를 캡처합니다.</li>
    
                            <strong>오디오 및 비디오 캡처 (Audio and video capture)</strong>
                            <li>오디오와 비디오를 미디어 파일에 직접 캡처하거나, 미디어 샘플 버퍼에 대한 직접 접근을 위해 미디어 스트림을 캡처합니다.</li>
    
                            <strong>추가 데이터 캡처 (Additional data capture)</strong>
                            <li>깊이 데이터와 메타데이터를 포함한 추가 데이터를 캡처하며, 여러 출력으로부터 캡처를 동기화합니다.</li>
                        </ul>

                        <h3>편집 (Editing)</h3>
                        <ul>
                            <strong>복합 에셋 (Composite assets)</strong>
                            <li>여러 에셋의 트랙 및 트랙 세그먼트를 결합하여 재생하거나 처리할 수 있는 복합 에셋을 만듭니다.</li>
    
                            <strong>QuickTime 동영상 (QuickTime movies)</strong>
                            <li>QuickTime 동영상 파일의 내용을 접근하고, 미디어 트랙의 샘플 수준 편집을 수행합니다.</li>
    
                            <strong>비디오 효과 (Video effects)</strong>
                            <li>표준 비디오 전환 효과를 정의하고, 레이어 애니메이션을 미디어 타이밍과 동기화하며, 사용자 정의 비디오 합성기를 만듭니다.</li>
    
                            <strong>오디오 믹싱 (Audio mixing)</strong>
                            <li>에셋의 지속 시간 동안 여러 오디오 트랙의 오디오 레벨을 믹싱하는 방법을 정의합니다.</li>
                        </ul>

                        <h3>오디오 (Audio)</h3>
                        <ul>
                            <strong>오디오 재생, 녹음, 처리 (Audio playback, recording, and processing)</strong>
                            <li>오디오를 재생, 녹음, 처리하고 앱의 시스템 오디오 동작을 구성합니다.</li>
    
                            <strong>음성 합성 (Speech synthesis)</strong>
                            <li>텍스트 문자열을 말하는 음성을 구성합니다.</li>
                        </ul>

                        <p>전부다 보고싶기도 하지만 분석은 저의 개발을 위해서 하는 것이기 때문에 아래의 iOS와 비디오 기능에 관련된 것만 분석해 보겠습니당ㅎㅎ</p>
                        <h3>iOS의 비디오 관련 기술</h3>

                        <h3>1. Media assets</h3>
                        <p>파일과 스트림에서 비디오 자산을 로드하여 속성, 트랙, 임베디드 메타데이터를 검사합니다.</p>

                        <h3>2. Media reading and writing</h3>
                        <p>비디오에서 이미지를 읽어오고, 다른 형식으로 내보내며, 미디어 데이터의 샘플 수준 읽기 및 쓰기를 수행합니다.</p>

                        <h3>3. Media types and utilities</h3>
                        <p>AVFoundation에서 지원하는 비디오 콘텐츠 유형과 파일 형식을 식별합니다.</p>

                        <h3>4. Video settings</h3>
                        <p>표준 키와 값 상수를 사용하여 비디오 처리 설정을 구성합니다.</p>

                        <h3>5. 미디어 재생 (Media Playback)</h3>
                        <p>AVFoundation은 비디오 미디어 에셋과 중간 콘텐츠의 재생을 관리하는 기능을 제공합니다. 이를 통해 비디오 콘텐츠를 인터페이스에 어떻게 표시하는지와 상관없이 독립적으로 처리할 수 있습니다.</p>

                        <h3>6. 오프라인 비디오 재생 및 저장 (Offline Video Playback and Storage)</h3>
                        <p>스트리밍된 비디오 콘텐츠를 디스크에 다운로드하여 오프라인 상태에서도 재생할 수 있으며, 다운로드한 에셋을 자동으로 제거하는 정책을 정의할 수 있습니다.</p>

                        <h3>7. 스트리밍 및 AirPlay (Streaming and AirPlay)</h3>
                        <p>AirPlay를 통해 무선으로 다른 장치에 비디오 콘텐츠를 스트리밍하고, FairPlay로 보호된 콘텐츠를 처리하는 기능을 제공합니다.</p>

                        <h3>8. 샘플 버퍼 재생 (Sample Buffer Playback)</h3>
                        <p>샘플 버퍼 스트림의 타이밍을 재생하고 동기화하는 사용자 정의 컨트롤러를 생성하여 실시간 비디오 스트리밍을 효과적으로 처리할 수 있습니다.</p>

                        <h3>9. 비디오 캡처 (Video Capture)</h3>
                        <ul>
                            <li><strong>캡처 설정 (Capture setup):</strong> 내장 카메라와 외부 캡처 장치를 구성하여 고품질의 비디오를 캡처할 수 있습니다.</li>
                            <li><strong>사진 및 비디오 캡처 (Photo and video capture):</strong> 고품질의 비디오 및 사진을 캡처하거나 실시간 미디어 샘플 버퍼에 접근하여 직접 처리할 수 있습니다.</li>
                            <li><strong>추가 데이터 캡처 (Additional data capture):</strong> 깊이 데이터와 메타데이터 등 추가 정보를 비디오와 함께 캡처하며, 여러 출력으로부터 데이터를 동기화합니다.</li>
                        </ul>

                        <h3>10. 비디오 편집 (Video Editing)</h3>
                        <ul>
                            <li><strong>복합 비디오 에셋 (Composite Video Assets):</strong> 여러 비디오 트랙과 세그먼트를 결합하여 하나의 복합 에셋으로 만들고, 이를 재생하거나 처리할 수 있습니다.</li>
                            <li><strong>비디오 효과 (Video Effects):</strong> 비디오 전환 효과를 정의하고, 레이어 애니메이션을 미디어 타이밍과 동기화하며, 사용자 정의 비디오 합성기를 통해 고급 비디오 효과를 구현합니다.</li>
                        </ul>

                        <section>
                            <p id="footnote1">[1] 오디오비주얼 미디어 : 소리(오디오)와 영상(비주얼)을 모두 포함하는 미디어 콘텐츠를 의미합니다. 쉽게 말해, 소리와 화면이 함께 있는 모든 종류의 콘텐츠를 오디오비주얼 미디어라고 부릅니다. <a href="#note1">↑</a></p>
                        </section>
                    `
                },// AVFoundation 분석)(1/5)
                {
                    id:"study18",
                    title:"FLab 강의 네번째 날",
                    content:`
                        <section>
                            <h3>네번쨰 날은 책 진도 내용에 대한 질문으로 시작했습니다.</h3>
                            
                            <h2>소스코드로짠 UI와 스토리보드로짠 UI 두 개의 장단점</h2>
                            제가 생각하는 잠점으로는 소스코드는 스토리보드보다 수정할 때 편했다는점
                            일일이 눌러서 찾아가지고 입력하는거보다는 코드가 편하기 때문에 그렇게 대답했습니다.

                            하지만 멘토님이 원하는 대답은 협업할 때를 생각하며 대답해달라고 말씀하셔서
                            
                            생각해보았을 때,, 
                            경험상으로는 스토리보드에 작업하면 풀받을 때 충돌이 간간히 발생했어서 말씀드렸는데
                            충돌이 정확히 왜 발생하는지를 알 수가없어서 설명을 드릴수가 없었습니다..😂😂
                            
                            그래서 찾아보았는데!

                            <dl>
                                <dt>스토리보드가 협업에 불리한 이유</dt>
                                <dd>
                                    <ul>
                                        <li>동시 작업으로 인한 변경 사항 충돌</li>
                                        한 개발자가 버튼의 위치를 변경하고 동시에 다른 개발자가 텍스트 필드를 추가하면, 이 두 변경 사항이 병합될 때 충돌이 발생할 수 있습니다.
                                        <li>자동 생성된 XML 코드의 복잡성</li>
                                        스토리보드는 Xcode에서 자동으로 생성되는 XML파일이며, 매우 방대한 양의 태그와 속성으로 구성되어 있어서 관리가 어렵고 작은 변경 사항도 다른 부분에 영향을 미칠 수 있습니다.
                                        <li>스토리보드의 단일 파일 구조</li>
                                        스토리보드는 일반적으로 하나의 파일로 관리됩니다. 이 때문에 이 파일 내의 작은 변경 사항이 모든 UI요소와 연결될 수 있습니다. 예를 들어, A가 A화면을 수정하고, B가 B화면을 수정하더라도, 두 화면이 동일한 스토리보드에 파일이 있으면 충돌이 발생할 수 있습니다.
                                        <li>재사용의 어려움</li>
                                        스토리보드의 특정 UI요소를 재사용하려면 매번 스토리보드에서 복사해 사용해야하는 불편함이 있습니다.    
                                    </ul>
                                </dd>
                            </dl>

                            다음으로 생각해 볼 문제는 소스코드로 할 때 불리한 점은 무엇일까,,
                            고민해 보았을 때 아무래도 iOS를 초반에 접했을 때는 스토리보드로 보통 접하게 되니
                            코드로 그리는 방법을 모르면 구성자체에 어려움이 있을 것 같고
                            간단한 화면을 만들 때도 스토리보드보다 조금더 시간이 걸릴 수 있겠구나 싶습니다.

                            하나더 생각 난 것은 비개발자들에게 개발단계에서 보여줄 때 스토리보드로하면 좀더 용이할 듯 싶은데
                            소스코드로는 어려움이 있을 것 같네요,..😊😊

                            다음 질문으로는 오토 레이아웃을 사용할 때
                            UI는 최소 몇개의 오토 레이아웃을 필요로 하는지에 대한 질문 이였습니다.

                            먼저 경험상으로 이야기 했을 때에는 두 가지만 있어도 되는 것들과
                            4가지가 필요한 것들이 있었습니다.

                            경험으로는 알고 있었지만,, 왜그런지 생각은 한번도 안해본점..
                            없는용어 써가며 대답 했습니다만.. (좀 고쳐야 할 부분,,)
                            뷰안에 사이즈가 정해져있는 object가있는 뷰는 두 가지만 있으면 된다고 말씀드렸는데
                            object는 애매하죠 많이,, ㅠㅠ 앞으로 고쳐나가야 할 듯해요,, 개발용어를 정확하게 씁시다 제발 나자신,,

                            <strong>size가 정해져있는 uicontent가 내부에 있는 뷰는 최소 두 가지의 오토 레이아웃 제약이 필요합니다.</strong>
                            위처럼 사이즈가 정해져있는 것을 애플문서(많이 보자 애플문서!!)에 용어로 <strong>intrinsic content size</strong>라고 나와있습니다.
                            멘토님도 한번 찾아보라고 말씀도 하셨구 추후에 관련 글을 작성 해야겠네요. ㅎㅎ 

                            다음으로는 뷰에서 뷰로 데이터를 넘길 때 어떤 방식으로는? 에대한 질문을 주셨습니다.

                            <dl>
                                <dt>화면들끼리 데이터를 전달하는 방법들은 뭐가 있을까요?</dt>
                                <dd>
                                    <li>세구에 방식이 있습니다.</li>
                                    <li>Delegate 패턴이 있습니다.</li>
                                    <li>NotificationCenter를 이용하는 방법이 있습니다.</li>
                                </dd>
                            </dl>

                            대답한 방식 중 Delegate 패턴을 설명하며 피드백을 많이 받았는데..
                            분명 개발하면서 자주 썻던 개념인데도 말로 설명하려하니
                            용어에서 걸리고 딜리게이터 딜리게이트도 햇깔리고 멘붕이 왔습니다 ㅋ,,ㅠ

                            제대로 설명하기위한 페이지를 따로 만들 예정입니다 쩝쩝,,

                            <h2>네 번째 수업 소감</h2>
                            마지막으로 프로젝트 구조를 보고 앞으로 책을 읽을 때도 내가 그냥 아는거야
                            키워드 아는 거야라고 넘기지 말고 누군가에게 설명할 거라는 세팅을 하고
                            내용을 읽자는 피드백을 받으며 블로그를 쓸 때도 마찬가지로 그렇게 써야 가독성이
                            좋을 것이라,, ㅠ 정말 부족함을 절실히 느끼네요 매번 이번 Delegate 패턴과 intrinsic content size
                            페이지는 피드백 주신것을 생각하며 작성해 봐야겠어요! 다음 수업 때는 더 발전한 제가 되어있길 바라며
                            공부하러 가보겠습니다..🥲  
                        </section>
                    `
                },// FLab 강의 네번째 날
                {
                    id:"study19",
                    title:"",
                    content:`
                        <h3></h3>
                    `
                },// AVFoundation 분석)(2/5)
                {
                    id:"study20",
                    title:"iOS File System에 대하여",
                    content:`
                        <section>
                            <h3>프로젝트 진행 중 File System을 이용한 작업 중 어떤 방식이 좋을지에대한 문서를 작성하게 되었다.</h3>
                            <p>iOS에서는 파일을 저장할 수 있는 여러 파일 시스템 위치들이 있으며, 각장소마다 접근권한, 데이터의 영속성, 보안수준 등 다양한 차이점과 장단점이 존재한다.</p>
                            <p>iOS의 파일 시스템은 앱의 샌드박스 내에서 안전하게 동작하며, 앱 외부에 있는 다른 영역에 접근하는 것이 제한되어 있다.</p>
                            <h2>iOS에서 작업가능한 방식으로는 다음과 같다.</h2>
                            <dl>
                                <dt>Documents Directory( 문서 디렉토리 )</dt>
                                <ul>
                                    <li><strong>설명</strong>: 사용자가 생성한 파일이나 앱의 중요한 데이터를 영구적으로 저장하는 위치.
                                    사용자가 iCloud 백업을 할 때 자동으로 백업이 되는 방식.</li>
                                    <li><strong>장점</strong>:
                                        <br>
                                        <ul>
                                            <li>사용자가 iTunes 또는 Finder를 통해 파일을 직접 볼 수 있다.</li>
                                            <li>iCloud에 자동으로 백업되므로 데이터의 안정성이 높다.</li>
                                            <li>데이터가 앱 삭제 전까지 유지됨.</li>
                                        </ul>
                                    </li>
                                    <li><strong>단점</strong>:
                                        <br>
                                        <ul>
                                            <li>사용자에게 노출될 가능성이 있으므로 보안이 중요한 파일은 암호화가 필요하다.</li>
                                            <li>대용량 데이터를 저장할 경우, iCloud 백업이 길어진다.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <pre><code class="language-swift">
    // 1. Documents Directory - 영구적인 사용자 데이터 저장
    func saveToDocumentsDirectory(filename: String, content: String) {
        if let documentsDir = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first {
            let fileURL = documentsDir.appendingPathComponent(filename)
            do {
                try content.write(to: fileURL, atomically: true, encoding: .utf8)
                print("Saved to Documents Directory: \(fileURL.path)")
            } catch {
                print("Failed to save to Documents Directory: \(error)")
            }
        }
    }

    func readFromDocumentsDirectory(filename: String) -> String? {
        if let documentsDir = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first {
            let fileURL = documentsDir.appendingPathComponent(filename)
            do {
                let content = try String(contentsOf: fileURL, encoding: .utf8)
                return content
            } catch {
                print("Failed to read from Documents Directory: \(error)")
            }
        }
        return nil
    }
                                </code></pre>
                            </dl>

                            <dl>
                                <dt>Library Directory( 라이브러리 디렉토리 )</dt>
                                <ul>
                                    <li><strong>설명</strong>: 앱이 실행될 때 참조하는 설정파일이나 캐시 파일 등을 저장하는 공간. 이 디렉토리도 iCloud 백업에 포함 될 수 있지만,
                                     하위 디렉토리마다 다르게 동작할 수 있다. 그리고 두 가지 주요 하위 디렉토리가 있다.</li>
                                    <strong>a.Library/Preferences</strong>
                                    <li><strong>설명</strong>: NSUserDefaults를 통해 저장되는 사용자 설정 정보가 이곳에 저장되며, iCloud 백업이 된다.</li>
                                    <li><strong>장점</strong>: 앱의 상태와 설정 정보를 저장하는 데 유용하며, 기본적인 상태를 자동으로 관리해준다.
                                     여기서 자동 관리는 시스템이 NSUserDefaults의 데이터를 자동으로 저장하고, 앱이 종료되거나 다시 시작할 때도 유지된다는 점이다.
                                    </li>
                                    <li><strong>단점</strong>: 이곳은 설정 파일에만 적합하며, 대용량 데이터를 저장하는 데는 부적합하다.(용량 제한이 얼마일까?)</li>

                                    <strong>b.Library/Caches</strong>
                                    <li><strong>설명</strong>: 
                                        <br>
                                        <ul>
                                            <li>캐시 데이터를 저장하는 곳으로, iCloud 백업에 포함되지 않고 필요시 시스템에서 제거될 수 있다.</li>
                                            <li>캐시 데이터는 앱이 종료되더라도 남아 있을 수 있으며, 앱이 다시 실행될 때 재사용 될 수 있다.</li>
                                            <li>앱이 오랫동안 사용되지 않거나 디스크 공간이 부족한 경우에만 시스템이 이 데이터를 제거한다.</li>
                                        </ul> 
                                    </li>
                                    <li><strong>장점</strong>: 캐시 데이터를 효율적으로 관리할 수 있으며, 불필요한 데이터는 시스템에 의해 자동으로 제거될 수 있어(디스크 공간이 가득차면 시스템에 의해 삭제된다.)
                                     메모리 관리를 잘 할 수 있다.</li>
                                    <li><strong>단점</strong>: 시스템에 의해 언제든 삭제될 수 있으므로, 중요한 데이터를 저장하는데는 적합하지 않음.</li>
                                </ul>
                                <pre><code class="language-swift">
    // 2. Library/Preferences - 설정 정보 저장
    func saveToUserDefaults(key: String, value: String) {
        UserDefaults.standard.set(value, forKey: key)
        print("Saved to UserDefaults: \(key)")
    }

    func readFromUserDefaults(key: String) -> String? {
        return UserDefaults.standard.string(forKey: key)
    }

    // 3. Library/Caches - 캐시 데이터 저장
    func saveToCachesDirectory(filename: String, content: String) {
        if let cachesDir = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first {
            let fileURL = cachesDir.appendingPathComponent(filename)
            do {
                try content.write(to: fileURL, atomically: true, encoding: .utf8)
                print("Saved to Caches Directory: \(fileURL.path)")
            } catch {
                print("Failed to save to Caches Directory: \(error)")
            }
        }
    }

    func readFromCachesDirectory(filename: String) -> String? {
        if let cachesDir = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first {
            let fileURL = cachesDir.appendingPathComponent(filename)
            do {
                let content = try String(contentsOf: fileURL, encoding: .utf8)
                return content
            } catch {
                print("Failed to read from Caches Directory: \(error)")
            }
        }
        return nil
    }
                                </code></pre>
                            </dl>

                            <dl>
                                <dt>tmp Directory( 임시 디렉토리 )</dt>
                                <ul>
                                    <li><strong>설명</strong>:
                                        <br>
                                        <ul>
                                            <li>임시 파일을 저장하는 곳으로, 앱 실행 중에만 필요한 데이터를 저장하거나 네트워크 통신 중 잠깐 필요한 데이터를 저장하는데 사용.</li>
                                            <li>앱이 백그라운드에서 종료될 때 또는 시스템이 디스크 공간이 부족할 때 자동으로 삭제된다.</li>
                                            <li>앱을 다시 실행하면 tmp에 저장된 데이터는 사라지므로, 영속성이 보장되지 않는다.</li>
                                        </ul> 
                                    </li>
                                    <li><strong>장점</strong>: 일시적으로 필요한 데이터를 저장하기에 적합하며, 자동으로 관리되어 개발자가 명시적으로 데이터를 삭제하지 않아도 됨.</li>
                                    <li><strong>단점</strong>: 시스템에 의해 언제든 삭제될 수 있어(시스템은 디스크 공간이 부족할 때 tmp 데이터를 가장 먼저 삭제.) 데이터의 영속성이 보장되지 않는다.</li>
                                </ul>
                                <pre><code class="language-swift">
    // 4. tmp Directory - 임시 파일 저장
    func saveToTemporaryDirectory(filename: String, content: String) {
        let tempDir = FileManager.default.temporaryDirectory
        let fileURL = tempDir.appendingPathComponent(filename)
        do {
            try content.write(to: fileURL, atomically: true, encoding: .utf8)
            print("Saved to Temporary Directory: \(fileURL.path)")
        } catch {
            print("Failed to save to Temporary Directory: \(error)")
        }
    }

    func readFromTemporaryDirectory(filename: String) -> String? {
        let tempDir = FileManager.default.temporaryDirectory
        let fileURL = tempDir.appendingPathComponent(filename)
        do {
            let content = try String(contentsOf: fileURL, encoding: .utf8)
            return content
        } catch {
            print("Failed to read from Temporary Directory: \(error)")
        }
        return nil
    }
                                </code></pre>
                            </dl>

                            <dl>
                                <dt>App Group Container( 앱 그룹 컨테이너 )</dt>
                                <ul>
                                    <li><strong>설명</strong>: 동일한 앱 번들 또는 확장 프로그램에서 공유할 수 있는 데이터를 저장하는 공간.</li>
                                    <li><strong>장점</strong>:
                                        <br>
                                        <ul> 
                                            <li>동일한 앱 번들 내의 다른 앱이나 위젯과 데이터를 쉽게 공유할 수 있다.</li>
                                            <li>앱 간 데이터 동기화 및 통합이 용이하다.</li>
                                        </ul>
                                    </li>
                                    <li><strong>단점</strong>: 앱 그룹을 설정하는 것이 다소 복잡할 수 있으며, 권한 설정도 고려해야함.</li>
                                </ul>
                                <pre><code class="language-swift">
    // 5. App Group Container - 앱 그룹 컨테이너에 저장
    func saveToAppGroupContainer(filename: String, content: String, groupName: String) {
        if let containerURL = FileManager.default.containerURL(forSecurityApplicationGroupIdentifier: groupName) {
            let fileURL = containerURL.appendingPathComponent(filename)
            do {
                try content.write(to: fileURL, atomically: true, encoding: .utf8)
                print("Saved to App Group Container: \(fileURL.path)")
            } catch {
                print("Failed to save to App Group Container: \(error)")
            }
        }
    }

    func readFromAppGroupContainer(filename: String, groupName: String) -> String? {
        if let containerURL = FileManager.default.containerURL(forSecurityApplicationGroupIdentifier: groupName) {
            let fileURL = containerURL.appendingPathComponent(filename)
            do {
                let content = try String(contentsOf: fileURL, encoding: .utf8)
                return content
            } catch {
                print("Failed to read from App Group Container: \(error)")
            }
        }
        return nil
    }
                                </code></pre>
                            </dl>

                            <dl>
                                <dt>iCloud Drive</dt>
                                <ul>
                                    <li><strong>설명</strong>: iCloud를 통해 데이터를 다른 디바이스와 동기화하거나 클라우드에 저장할 수 있는 저장소.</li>
                                    <li><strong>장점</strong>:
                                        <br>
                                        <ul> 
                                            <li>데이터를 여러 기기에서 동기화할 수 있다.</li>
                                            <li>사용자가 접근하여 데이터를 직접 관리할 수 있다.</li>
                                        </ul>
                                    </li>
                                    <li><strong>단점</strong>: 
                                        <br>
                                        <ul> 
                                            <li>사용자의 iCloud 공간을 차지할 수 있으며, 대용량 데이터를 저장할 경우 문제가 될 수 있다.</li>
                                            <li>사용자가 iCloud 백업을 끌 경우, 데이터가 백업되지 않는다.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <pre><code class="language-swift">
    // 6. iCloud Drive - iCloud에 파일 저장
    func saveToICloudDrive(filename: String, content: String) {
        if let iCloudURL = FileManager.default.url(forUbiquityContainerIdentifier: nil)?.appendingPathComponent("Documents") {
            let fileURL = iCloudURL.appendingPathComponent(filename)
            do {
                try content.write(to: fileURL, atomically: true, encoding: .utf8)
                print("Saved to iCloud Drive: \(fileURL.path)")
            } catch {
                print("Failed to save to iCloud Drive: \(error)")
            }
        } else {
            print("iCloud is not enabled.")
        }
    }

    func readFromICloudDrive(filename: String) -> String? {
        if let iCloudURL = FileManager.default.url(forUbiquityContainerIdentifier: nil)?.appendingPathComponent("Documents") {
            let fileURL = iCloudURL.appendingPathComponent(filename)
            do {
                let content = try String(contentsOf: fileURL, encoding: .utf8)
                return content
            } catch {
                print("Failed to read from iCloud Drive: \(error)")
            }
        } else {
            print("iCloud is not enabled.")
        }
        return nil
    }
                                </code></pre>
                            </dl>

                            <dl>
                                <dt>KeyChain(키체인)</dt>
                                <ul>
                                    <li><strong>설명</strong>: 암호화된 저장소로, 사용자가 인증 정보(예: 비밀번호, 토큰 등)를 안전하게 저장하는 데 사용된다.</li>
                                    <li><strong>장점</strong>:
                                        <br>
                                        <ul> 
                                            <li>높은 보안성을 제공하며, 민감한 정보를 안전하게 저장할 수 있다.</li>
                                            <li>iCloud Keychain을 사용하면 여러 기기 간에 인증 정보가 동기화가 가능하다.</li>
                                        </ul>
                                    </li>
                                    <li><strong>단점</strong>: 파일 시스템처럼 자유롭게 데이터를 저장할 수 없다. 민감한 인증 정보 외의 데이터를 저장하는데 부적합 하다.</li>
                                </ul>
                                <pre><code class="language-swift">
    import Security
    
    // Keychain에 값 저장
    func saveToKeychain(key: String, value: String) -> Bool {
        let data = value.data(using: .utf8)!
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecValueData as String: data
        ]
        
        // 기존 값이 있다면 업데이트
        SecItemDelete(query as CFDictionary)
        
        let status = SecItemAdd(query as CFDictionary, nil)
        return status == errSecSuccess
    }

    // Keychain에서 값 읽기
    func readFromKeychain(key: String) -> String? {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecReturnData as String: kCFBooleanTrue!,
            kSecMatchLimit as String: kSecMatchLimitOne
        ]
        
        var dataTypeRef: AnyObject? = nil
        let status = SecItemCopyMatching(query as CFDictionary, &dataTypeRef)
        
        if status == errSecSuccess, let data = dataTypeRef as? Data {
            return String(data: data, encoding: .utf8)
        }
        return nil
    }

    // Keychain에서 값 삭제
    func deleteFromKeychain(key: String) -> Bool {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key
        ]
        let status = SecItemDelete(query as CFDictionary)
        return status == errSecSuccess
    }
                                </code></pre>
                            </dl>

                            <dl>
                                <dt>On-Demand Resources(ODR)</dt>
                                <ul>
                                    <li><strong>설명</strong>: 앱의 리소스를 사용자에게 즉시 제공할 필요가 있을 때만 다운로드되는 방식으로, 앱 스토에서 제공하는 특별한 저장소이다.
                                     게임이나 대용량 앱에서 주로 사용된다.</li>
                                    <li><strong>장점</strong>:
                                        <br>
                                        <ul> 
                                            <li>앱 설치 시 전체 리소스를 다운로드하지 않고 필요할 때만 로드하므로 앱의 설치 용량을 줄일 수 있다.</li>
                                            <li>사용자 경험을 최적화할 수 있다.</li>
                                        </ul>
                                    </li>
                                    <li><strong>단점</strong>: 네트워크 연결이 필요하며, 자주 사용되는 파일은 캐시되지만, 시스템에 의해 제거될 수 있다.</li>
                                </ul>
                                <pre><code class="language-swift">
    var resourceRequest: NSBundleResourceRequest?

    // ODR 리소스 요청 및 사용
    func loadOnDemandResource(tags: Set<String>, completion: @escaping (Bool) -> Void) {
        resourceRequest = NSBundleResourceRequest(tags: tags)
        resourceRequest?.beginAccessingResources { error in
            if let error = error {
                print("Failed to load ODR resource: \(error)")
                completion(false)
                return
            }
            print("Successfully loaded ODR resource.")
            completion(true)
        }
    }

    // ODR 리소스 해제
    func endAccessingResources() {
        resourceRequest?.endAccessingResources()
        resourceRequest = nil
        print("ODR resource released.")
    }
                                </code></pre>
                            </dl>
                            
                            
                        </section>
                    ` 
                }
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
    <img src="/images/개발자 커리어의 악순환.png" alt="개발자 커리어의 악순환">
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

    <img src="/images/왼쪽보단 오른쪽을 봐야한다.png" alt="왼쪽보단 오른쪽을 봐야한다">
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
                },
                {
                    id:"seminar2",
                    title:"F-Lab 이력서 부터 면접까지/테크 리쿠르터 ",
                    content:`
                        <section>
 <header>
    <h1>이력서 작성 방법 및 직장 선택 팁</h1>
</header>

<section>
    <h2>이력서를 어떻게 잘 써서 합격할 수 있을까?</h2>
    <p>이력서를 작성할 때 중요한 것은 내가 어떤 사람인지, 어떤 회사에 맞는지 잘 생각하고 작성하는 것입니다. 단순히 나열식으로 이력서를 작성하는 것이 아니라, 내가 원하는 환경과 우선순위를 생각해야 합니다.</p>

    <h3>1. 나에게 맞는 회사를 선택하는 방법</h3>
    <ul>
        <li>워라벨, 정년 보장, 기업 호감도 등 내가 중요하게 생각하는 가치를 중심으로 선택하세요.</li>
        <li>연봉만으로 회사를 고르는 것보다는 내가 그 회사에서 성장할 수 있는지, 회사의 산업과 업무를 이해하고 있는지를 생각하세요.</li>
        <li>구글과 같은 대기업도 퇴사는 결국 일어납니다. 중요한 것은 나에게 맞는 회사가 무엇인지 찾는 것입니다.</li>
    </ul>

    <h3>2. 회사 선택의 우선순위를 정하는 방법</h3>
    <ul>
        <li>워라벨</li>
        <li>복지</li>
        <li>기여도: 스타트업에서는 기여할 기회가 많고, 대기업에서는 그 기회가 적을 수 있습니다. 자신의 성향에 맞는 선택이 중요합니다.</li>
        <li>고용 안정성</li>
    </ul>
    <p>이 외에도 여러 가지 요소를 고려해, '절대 포기할 수 없는 것'을 먼저 정하고 나서 회사를 선택하세요.</p>

    <h3>3. 이력서를 어떻게 작성할 것인가?</h3>
    <ul>
        <li>이력서는 키워드 중심으로 간결하게 작성하세요. 내가 한 일을 구체적으로 나열하기보다는 중요한 성과와 기술을 강조해야 합니다.</li>
        <li>링크드인 관리도 중요합니다. 구직을 할 때는 링크드인을 업데이트하고 잘 관리하는 것이 유리합니다.</li>
        <li>이력서는 학력, 경력, 프로젝트 등으로 나누어 한눈에 알아보기 쉽게 구성하세요.</li>
        <li>자신의 경험을 키워드로 정리하고, 면접에서 설명할 수 있도록 준비하세요.</li>
        <li>오탈자는 무조건 확인하고, 회사 이름을 복붙하는 실수를 하지 않도록 주의하세요.</li>
    </ul>

    <h3>4. 이력서 작성의 구체적인 예시</h3>
    <ul>
        <li>문제가 발생했을 때 원인을 분석하고 해결한 사례를 간결하게 적으세요.</li>
        <li>예를 들어, '신규 로그인 문제 발생, 원인 분석 후 해결'과 같이 서술형 대신 키워드 중심으로 작성하세요.</li>
    </ul>
</section>
</section>
<section>

</section>

                        
                    `
                },
                {
                    id:"seminar3",
                    title:"KWDC 2024",
                    content:`
                        <section>
                            <h2>KWDC에서의 세션 후기</h2>
                            
                            <h3></h3>
                        </section>
                    ` 
                }
            ]
        }, // 세미나
        {
            id:"Struggle",
            title:"삽질 일지",
            items:[
                {
                    id:"Struggle1",
                    title:"RIBs Template가 보이지 않는 문제",
                    content:`
                        spm을 로컬에 적용하며 드디어 개발준비를 끝마친 후에 기획을 어느정도 마무리한 뒤
                        RIBs를 설치하며 설치한 Template를 이용해 개발을 다시 시작하려 했습니다.

                        기존에 spm을 적용하기 전에는 설치된 Template가 잘 보이고 사용해서 첫 화면 띄우고 기분좋게 깃에 올려둔 상태였는데..

                        아니 이게 무슨일인지 spm을 로컬에 적용하고서 spm내부에 New File로 Template를 사용하려는데 보이질 않는거에요!!!캬아아악😡🤬

                        GPT자식도 모르고,, 열심히 구글링 해서 갓 스택오버플로의 천재님이,, 공유해준

                        <pre><code>
                        <key>SupportsSwiftPackage</key>
                        <true/>
                        </code></pre>
                        
                        이 키값을 사용할 Templates의 TemplateInfo.plist에 추가한뒤 true값을 주면
                        spm에서 사용 가능한 Template이 되는 값이더라구요..

                        문서를 찾아보려했으나..
                        한방에 안나와서 바로 포기..

                        새벽까지 삽질은 너무 힘들었네요...🥲

                        요즘 글쓸때마다 쩜만 늘어나는느낌........

                        화이팅 합시다잉 흑흑
                    `
                }
            ]
        },// 삽질 일지
    ]
};

/** 소스코드 
 * <p>Swift에서 변수와 상수를 사용하는 방법은 매우 간단합니다. 다음은 변수와 상수를 선언하는 예제입니다:</p>
                        <pre><code class="language-swift">let constant = 10\nvar variable = 20</code></pre> */

let lastCategoryId = null;

window.addEventListener('load', function() {
    // 현재 URL의 경로를 확인
    const path = window.location.pathname;
    
    // path에 따라 적절한 카테고리나 아이템 로드
    if (path !== '/') {
        const parts = path.split('/').filter(Boolean); // 빈 값 제거
        
        if (parts.length === 1) {
            // 카테고리만 있을 때
            const categoryId = parts[0];
            loadContent(categoryId);
        } else if (parts.length === 2) {
            // 카테고리와 아이템 모두 있을 때
            const categoryId = parts[0];
            const itemId = parts[1];
            loadItemContent(itemId);
        }
    } else {
        // 기본 페이지 로드
        loadContent('portfolio'); // 기본적으로 포트폴리오를 로드
    }
});

function loadItemContent(itemId) {
    const item = data.categories.flatMap(cat => cat.items).find(it => it.id === itemId);
    
    if (item) {
        const contentSection = document.getElementById('content-section');
        contentSection.innerHTML = item.content;

        const category = data.categories.find(cat => cat.items.some(it => it.id === itemId));
        if (category) {
            document.title = `이승기의 블로그 - ${category.title} > ${item.title}`;
            const newUrl = `/${category.id}/${item.id}`;
            history.replaceState(null, null, newUrl);
        } else {
            document.title = `이승기의 블로그 - ${item.title}`;
            const newUrl = `/${item.id}`;
            history.replaceState(null, null, newUrl);
        }

        document.getElementById('currentSection').innerText = item.title;

        if (item.id === 'portfolio') {
            setTimeout(() => {
                document.getElementById("defaultOpen").click();
            }, 0);
        }

        Prism.highlightAll();

        if (category && category.items.length > 1) {
            document.getElementById('backBtn').style.display = 'block';
        } else {
            document.getElementById('backBtn').style.display = 'none';
        }
    }
}



function loadContent(id, page = 1) {
    lastCategoryId = id;

    const contentSection = document.getElementById('content-section');
    let category = data.categories.find(cat => cat.id === id);

    if (category) {
        window.history.pushState({}, '', `${id}`);

        if (category.items.length === 1) {
            loadItemContent(category.items[0].id);
            document.getElementById('backBtn').style.display = 'none';
        } else {
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