"use strict";
{
    // dom
    // js에서 제공되는 모든 dom api를 그대로 사용할 수 잇다.
    // 타입 정의 파일을 제공해준다 'lib.dom.d.ts'
    // HTMLElement < 다양한 속성과 메소드를 이 인터페이스에 포함하고잇음
    // <a id="mylink" href="https:google.com">google</a>
    // 두 메서드의 반환값이 다름
    const link1 = document.getElementById("mylink");
    const link2 = document.querySelector("#mylink");
    // if(link1 instanceof HTMLAnchorElement){
    //   link1.href = ""
    // }
    link1.href = "https://google.com";
    // if(link2){
    //   link2.href = ''
    // }
    link2.href = " ";
    // 매개변수로 html 태그 이름을 전달할 수 있다 그래서 그 요소를 찾아서 일치하는 타입이 있을겨웅 반환 아닐경우 일반적인 html element 를 보여줌
    // document.createElement()
    // 만약 일치하는 태그 이름이 발견될경우 거기에 상응하는 반환값을 지정을 해준다
    const img = document.createElement("img");
    img.src = "";
    const anchor = document.createElement("a");
    anchor.href = "";
    // 직접 태그 이름을 전달하게 되면 상응하는 타입을 반환해줌
    const div = document.querySelector("div");
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.click();
    });
    // event
    // <div id="myDiv"></div>
    const myDiv = document.getElementById("myDiv");
    myDiv === null || myDiv === void 0 ? void 0 : myDiv.addEventListener("click", (e) => {
        // mouse event
        if (e instanceof MouseEvent) {
            //로직 구현
            const x = e.clientX;
            const y = e.clientY;
        }
        // keyboard event
        if (e instanceof KeyboardEvent) {
            console.log(e.code);
        }
    });
}
