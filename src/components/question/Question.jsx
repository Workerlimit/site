import React, { useState, useEffect, useRef } from "react";
import {CSSTransition} from "react-transition-group";
import "./Question.scss";

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

const Question = () => {
    const [isPhone, setIsPhone] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsPhone(false));

    return (
        <div className="question-block">
            <div className="container">
                <div className="question">
                    <div className="question__content">
                        <div className="title">Остались вопросы?</div>
                        <div className="question__text">Если вас что-то заинтересовало,<br/> сообщите нам об этом оставив свою почту или позвоните. Будем на связи 😎</div>
                        <div className="question__btns">
                            <div className="btn">оставить почту</div>
                            <div className="btn" onclick={() => {setIsPhone(true)}}>Позвонить</div>
                        </div>
                    </div>
                    <div className="question__icon"></div>
                    <CSSTransition
                        in={isPhone}
                        timeout={200}
                        classNames="phone-popup"
                        unmountOnExit
                    >
                        <div classname="phone-popup" ref={ref}>
                            <div className="popup-content">+7 (777) 777 77 77</div>
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
}

export default Question;