const vDom = {
    tag : 'p',//Tag Name
    props:{},//Attribute
    children:[//자식이 있다면 객체로 추가
        {
            tag : 'h1',//Tag Name
            props:{},//Attribute
            children:[
                "리액트 만들기"
            ]
        },{
            tag : 'ul',
            props:{},
            children : [
                {
                    tag : 'li',
                    props : {},
                    children : ['첫 번째 아이템']
                },
                {
                    tag : 'li',
                    props : {},
                    children : ['두 번째 아이템']
                },
                {
                    tag : 'li',
                    props : {},
                    children : ['세 번째 아이템']
                }
            ]
        }
    ]//자식 요소
};

function createDom(node){
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);//Dom 생성을 위해 DOM API 사용
    node.children
        .map(createDom)
        .forEach(element.appendChild.bind(element))
    return element;
}

document.querySelector('#root')
    .appendChild(createDom(vDom));
