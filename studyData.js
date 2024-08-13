export const studyData = {
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
};
