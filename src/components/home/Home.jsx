import React, {useState, useRef, useEffect} from "react";
import Cart from "../cart/Cart"
import Reminder from "../reminder/Reminder";
import Question from "../question/Question";
import Order from "../order/Order";
import Download from "../order/Download";
import { CSSTransition } from "react-transition-group";
import "../../style/media.scss";

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }, [ref, handler]
    );
}

const FirstScreen = () => {
    const [isAdd, setIsAdd] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsAdd(false));
    return (
        <div className="s-first-screen">
            <div className="container">
                <div className="first-screen">
                    <div className="first-screen__title"><i><span>ОТКРОЙТЕ</span> для себя <span>НОВЫЙ</span> сервис</i></div>
                    <div className="first-screen__text">Мы, платформа для <span>поиска</span> и <span>выставления</span> автоуслуг </div>
                    <div className="first-screen__btns">
                        <div className="btn">Поиск услуг</div>
                        <div className="btn" onClick={() => {setIsAdd(true)}}>добавить услугу</div>
                    </div>
                </div>
            </div>
            <div className="car-block"></div>
            <CSSTransition
                in={isAdd}
                timeout={200}
                classNames="popup-order"
                unmountOnExit
            >
                <div className="popup-order" ref={ref}>
                    <Order />
                </div>
            </CSSTransition>
        </div>
    );
}

const Clues = () => {
    return (
        <div className="clue-wrapper">
            <div className="container">
                <div className="title">Ищите услугу <span>быстро</span> и <span>легко</span></div>
                <div className="clue-content">
                    <div className="clue-content__img"></div>
                    <div className="clue-content__img clue-content__img--2"></div>
                    <div className="clue-content__img clue-content__img--3"></div>
                </div>
            </div>
        </div>
    );
}

const AddingBlock = () => {
    return (
        <div className="adding-wrapper">
            <div className="container">
                <div className="adding-block">
                    <div className="title">Добавляйте <span>СВОИ</span> услуги</div>
                    <div className="adding-block__content">
                        <Order />
                        <Download />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Home = () => {
    return (
        <div className="home-wrapper">
            <FirstScreen />
            <Clues />
            <AddingBlock />
            <div className="home-cart">
                <div className="container">
                    <div className="home-cart-top">
                        <div className="title">Популярные услуги</div>
                        <a className="showmore-link" href="/catalogue"><div className="showmore">СМОТРЕТЬ ВСЕ</div></a>
                    </div>
                    <Cart />
                </div>
            </div>
            <Reminder />
            <Question />
        </div>
    );
};

export default Home;