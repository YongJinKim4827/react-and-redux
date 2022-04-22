/** @jsx createElement*/
import { render, createElement, Component } from "./react"; 

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
                    props : {
                        style : "color : red"
                    },
                    children : ['첫 번째 아이템']
                },
                {
                    tag : 'li',
                    props : {
                        style : "color : blue"
                    },
                    children : ['두 번째 아이템']
                },
                {
                    tag : 'li',
                    props : {
                        style : "color : green"
                    },
                    children : ['세 번째 아이템']
                }
            ]
        }
    ]//자식 요소
};

const vDom2 = createElement("p", {}, 
    createElement("h1", {}, "React 만들기"),
    createElement("ul", {}, 
    createElement("li", {style : "color : red"}, "첫 번째 아이템"),
    createElement("li", {style : "color : blue"}, "두 번째 아이템"),
    createElement("li", {style : "color : green"}, "세 번째 아이템")));
/*
 ****************************************
 * 클래스 컴포넌트
 ****************************************
 */
class Title extends Component{
    render(){//Class 컴포넌트는 render()이 강제 사항임
        return <h1>{this.props.children}</h1>;
    }
}


/*
 ****************************************
 * 함수 컴포넌트
 ****************************************
 */
// const Title = (props) =>{
//     return <h1>{props.children}</h1>
// }
const Item = (props) => {
    return <li style={`color : ${props.color}`}>{props.children}</li>
}
//@babel/preset-react는 vDom3같은 JSX구문을 vDom2처럼 변경을 해준다.
const App = () => 
    <p>
        <Title>React 클래스 컴포넌트 만들기</Title>
            <ul>
                <Item color="red">첫 번째 아이템</Item>
                <Item color="blue">두 번째 아이템</Item>
                <Item color="green">세 번째 아이템</Item>
            </ul>
    </p>
    
render(<App/>, document.querySelector('#root'));
// document.querySelector('#root')
//     .appendChild(createDom(vDom));
