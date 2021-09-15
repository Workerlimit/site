import React, {useState, useEffect, useRef} from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import cart from "../../images/cart/cart-1.jpg";
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import "./CataloguePage.scss";
import { CSSTransition } from "react-transition-group";
import piston from "../../icons/piston.svg";
import battery from "../../icons/battery.svg";
import wheel from "../../icons/wheel.svg";
import checklist from "../../icons/checklist.svg";
import Cart from "../cart/Cart";

const CataloguePage = () => {
    const cartContent = {
        id: 1,
        img: cart,
        imgDesc: "Product",
        serviceName: "AST Service",
        title: "Услуги эвакуатора",
        rating: 2.5,
        cost: 1000
    };
    const images = [
        {
            id: 1,
            img: cart
        },
        {
            id: 2,
            img: cart
        },
        {
            id: 3,
            img: cart
        },
    ]
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
    ];
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& > * + *': {
            marginTop: theme.spacing(1),
          },
        },
    }));
    const classes = useStyles();
    const [isPhone, setIsPhone] = useState(false);
    const [isLike, setIsLike] = useState(false);
    
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
    const ref = useRef();
    useOnClickOutside(ref, () => setIsPhone(false));
    return (
        <div className="page-wrapper">
            <div className="container">
                <div className="page-top">
                    <div className="goback-btn"></div>
                    <div className="page-navigation">
                        Главная / Каталог услуг / Эвакуаторы
                    </div>
                    <div className="page-content">
                        <div className="page-slider">
                            <img className="page-slider-img" src={cart}></img>
                            {/* <Carousel
                                pagination={true}
                                verticalMode
                                itemsToShow={3}
                            >
                                {images.map((item) => {
                                    return (
                                        <img src={item.img}></img>
                                    );
                                })}
                            </Carousel> */}
                            <div className="page-content-slider">
                                <div className="page-content-slider-btn">🡠</div>
                                <div className="page-content-slider-content">
                                    <img className="page-content-slider-img" src={cart}></img>
                                    <img className="page-content-slider-img" src={cart}></img>
                                    <img className="page-content-slider-img" src={cart}></img>
                                </div>
                                <div className="page-content-slider-btn arrow-down">🡠</div>
                            </div>
                        </div>
                        <div className="page-text">
                            <div className="cart-item__content">
                                <div className="cart-item__service-name">{ cartContent.serviceName }</div>
                                    <div className="cart-item__title">{cartContent.title}</div>
                                    <div className="cart-item__rating">
                                        <div className={classes.root}>
                                            <Rating
                                                name="half-rating"
                                                defaultValue={cartContent.rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                        </div>
                                        ( { cartContent.rating } / 5 )
                                    </div>
                                <div className="cart-item__cost">{cartContent.cost} ₸</div>
                            </div>
                            <div className="cart-item__additional-btns">
                                <div className="cart-item__additional-items item-1" onclick={() => setIsPhone(true)}>
                                    <div className="cart-item__additional-items-icon"></div>
                                    <div className="cart-item__additional-items-text"></div>
                                </div>
                                <div className="cart-item__additional-items item-2">
                                    <div className="cart-item__additional-items-icon"></div>
                                    <div className="cart-item__additional-items-text"></div>
                                </div>
                                <div className="cart-item__additional-items item-3" onclick={() => setIsLike(true)}>
                                    <div className="cart-item__additional-items-icon" ></div>
                                    <div className="cart-item__additional-items-text"></div>
                                </div>
                            </div>
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
                            <CSSTransition
                                in={isLike}
                                timeout={200}
                                className="like-popup"
                                unmountOnExit
                            >
                                <div className="like-popup">
                                    <Rating
                                        name="half-rating"
                                        precision={0.5}
                                    />
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
                <div className="page-body">
                    <div className="page-body-content">
                        <div className="catalogue-list">
                            <div className="container">
                                <div className="catalogue-title">Все услуги данного магазина</div>
                                    <div className="catalogue-list__content">
                                        {list.map((item) => {
                                            return (
                                                <div className="catalogue-list__item">
                                                    <img className="catalogue-list__content-icon" src={item.icon}></img>
                                                    <div className="catalogue-list__content-text">{item.name}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="home-cart">
                        <div className="container page-container">
                            <div className="home-cart-top">
                                <div className="cart-title">Другие сервисы</div>
                                <a className="showmore-link" href="/catalogue"><div className="showmore">СМОТРЕТЬ ВСЕ</div></a>
                            </div>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CataloguePage;