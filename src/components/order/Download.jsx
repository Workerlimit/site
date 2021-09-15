import React, { useState, useRef, useEffect } from "react";
import {CSSTransition} from "react-transition-group";
import "./Order.scss";

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


const Download = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsOpen(false));

    return (
        <div className="download-form">
            <div className="download-form__img"></div>
            <div className="download-form__content">
                <div className="download-form__title">ИЛИ ...</div>
                <div className="text download-form__text">скачайте приложение для быстрого добавления услуг</div>
                <div className="btn" onClick={() => {setIsOpen(true)}}>Скачать</div>
                <div className="add-text">Спасибо что вы с нами!</div>
            </div>
            <CSSTransition
                in={isOpen}
                timeout={200}
                classNames="popup"
                unmountOnExit
            >
                <div className="popup-download" ref={ref}>
                    <div className="error"></div>
                    <div className="content">
                        <div className="content__title">Ссылка временно не работает ...</div>
                        <div className="content__text">Будьте первыми кто узнает о готовности приложения - оставив свою почту ниже!</div>
                        <input className="input" placeholder="Ваша почта" type="email"></input>
                        <div className="btn">Отправить</div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Download;