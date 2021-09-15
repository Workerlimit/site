import React from "react";
import piston from "../../icons/piston.svg";
import battery from "../../icons/battery.svg";
import wheel from "../../icons/wheel.svg";
import checklist from "../../icons/checklist.svg";
import oil from "../../icons/oil.svg";
import remote from "../../icons/remote.svg";
import brake from "../../icons/brake.svg";
import steering from "../../icons/steering.svg";
import tire from "../../icons/tire.svg";
import transmission from "../../icons/transmission.svg";
import fans from "../../icons/fans.svg";
import speedometer from "../../icons/speedometer.svg";
import "./Catalogue.scss";
import "../cart/Cart.scss";

const CatalogueList = () => {
    const list = [
        {
            id: 1,
            icon: piston,
            name: "Эвакуатор",
        },
        {
            id: 2,
            icon: battery,
            name: "Аккумулятор",
        },
        {
            id: 3,
            icon: wheel,
            name: "Шиномонтаж",
        },
        {
            id: 4,
            icon: checklist,
            name: "Техосмотр",
        },
        {
            id: 5,
            icon: oil,
            name: "Замена масла",
        },
        {
            id: 6,
            icon: remote,
            name: "Сигнализация",
        },
        {
            id: 7,
            icon: brake,
            name: "Тормоза",
        },
        {
            id: 8,
            icon: steering,
            name: "Рулевая",
        },
        {
            id: 9,
            icon: tire,
            name: "СТО",
        },
        {
            id: 10,
            icon: transmission,
            name: "Коробка",
        },
        {
            id: 11,
            icon: fans,
            name: "Кондиционер",
        },
        {
            id: 12,
            icon: speedometer,
            name: "Борд компьютер"
        }
    ]
    return (
        <div className="catalogue-list">
            <div className="container">
                <div className="catalogue-title">Категории</div>
                <div className="catalogue-list__content">
                    {list.map((item) => {
                        return (
                            <div className="catalogue-list__item">
                                <img className="catalogue-list__content-icon" src={item.icon}></img>
                                <div className="catalogue-list__content-text">{item.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CatalogueList;