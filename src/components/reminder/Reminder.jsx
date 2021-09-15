import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Reminder.scss";
import "../order/Order.scss";

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

const Reminder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsModalOpen(false));
    return (
        <div className="reminder-block">
            <div className="container">
                <div className="reminder-wrapper">
                    <div className="reminder__content">
                        <div className="reminder__title">НАПОМИНАНИЕ</div>
                        <div className="reminder__text">Ищите быстро услугу, находите контакты магазинов, оценивайте услугу</div>
                    </div>       
                    <div className="btn" onClick={() => {setIsModalOpen(true)}}>Скачать приложение</div>
                    <CSSTransition
                        in={isModalOpen}
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
            </div>
        </div>
    );
}

export default Reminder;