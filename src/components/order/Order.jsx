import React from "react";
import "./Order.scss";

const Order = () => {
    return (
        <div className="order-wrapper">
            <div className="order">
                <div className="text order__text">Оставьте свои данные,<br/> и мы в скором времени свяжемся с вами</div>
                <input className="input order__input" placeholder="Ваше имя"></input>
                <input className="input order__input" placeholder="Номер мобильного телефона"></input>
                <input className="input order__input" placeholder="Ваша почта"></input>
                <div className="btn">Отправить</div>
                <div className="add-text">Заранее благодарим за терпение! <br/>Спасибо!</div>
            </div>
        </div>
    );
}

export default Order;