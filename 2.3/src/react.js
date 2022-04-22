export function createDom(node){
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);//Dom 생성을 위해 DOM API 사용
    
    //Key와 Value를 쌍으로 배열로 넘겨줌
    Object.entries(node.props)
    .forEach(([name, value]) => element.setAttribute(name,value))
    node.children
        .map(createDom)
        .forEach(element.appendChild.bind(element))
    return element;
}

export function render(vDom, container){
    container.appendChild(createDom(vDom));
}

// export const render = (function(){
//     let prveDom = null;
//     if(prevDom === null){
//         prevDom = vDom;
//     }

//     container.appendChild(createDom(vDom));
// })();


function makeProps(props, children){
    return {
        ...props,
        children : children.length === 1 ? children[0] : children
    }
}

export function createElement(tag, props, ...children){
    props = props || {};
    if(typeof tag === "function"){//클래스든 함수형이든 대문자가 들어오면 함수로 알아봄
        //실제 React에서는 함수형 컴포넌트인지 클래스 컴포넌트인지 심볼을 만들어서 확인함
        if(tag.prototype instanceof Component){//Component를 상속받았는지 확인
            const instance = new tag(makeProps(props, children));
            return instance.render();
        }else{
            if(children.length > 0){
                return tag(makeProps(props, children));
            }else{
                return tag(props);//JSX를 return
            }
        }
    }else{
        return {tag, props, children}//Virtual Dom읜 Input Data 역할
    }
}

export class Component{
    constructor(props){
        this.props = props;
    }
}