import React, {useState} from "react";
import Question from "../question/Question";
import Reminder from "../reminder/Reminder";
import "./Support.scss";

const Answers = () => {
    const data = [
        {
            id: 1,
            question: "Как мне добавить объявление ?",
            answer: "В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram."
        },
        {
            id: 2,
            question: "Как мне добавить объявление ?",
            answer: "В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram."
        },
        {
            id: 3,
            question: "Как мне добавить объявление ?",
            answer: "В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram."
        },
        {
            id: 4,
            question: "Как мне добавить объявление ?",
            answer: "В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram."
        },
        {
            id: 5,
            question: "Как мне добавить объявление ?",
            answer: "В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram."
        },
    ];
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="answers-block">
            <div className="container">
                <div className="title">Часто задаваемые вопросы</div>
                <div className="answers-block__content">
                    
                    {data.map((item) => {
                        return (
                            <div className="answers-block__item">
                                <div className="answers-block__item-top" onClick={() => setIsActive(!isActive)}>
                                    <div className="answers-block__item-question">{ item.question }</div>
                                    <div className={`answers-block__item-btn ${isActive ? "active" : ""}`}></div>
                                </div>
                                <div className={`answers-block__item-answer ${isActive ? "show" : ""}`}>{ item.answer }</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const Support = () => {
    return (
        <div className="support-wrapper">
            <Question />
            <Answers />
            <Reminder />
        </div>
    );
}

export default Support;