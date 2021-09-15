import React from "react";
import Carousel, { consts } from 'react-elastic-carousel';
import "./Cart.scss";
import cart from "../../images/cart/cart-1.jpg";
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const Cart = () => {
    const carts = [
        {
            id: 1,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 2.5,
            cost: 1000
        },
        {
            id: 2,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 3,
            cost: 1000
        },
        {
            id: 3,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 1,
            cost: 1000
        },
        {
            id: 4,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 5,
            cost: 1000
        },
        {
            id: 5,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 3,
            cost: 1000
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
    const breakpoints = [
        { width: 320, itemsToShow: 1, pagination: false },
        { width: 500, itemsToShow: 2 },
        { width: 800, itemsToShow: 3 },
        { width: 1020, itemsToShow: 4 },
        { width: 1000, itemsToShow: 4},
      ]
    return (
        <div className="cart-wrapper">
            <div className="container">
                <Carousel
                    pagination={true}
                    breakPoints={breakpoints}
                    itemsToShow={4}
                    renderArrow={({ type, onClick }) => {
                        const pointer = type === consts.PREV ? '🡠' : '🡢'
                        return <button onClick={onClick} className="slider-btn">
                            {pointer}
                        </button>
                    }}
                >
                    {carts.map((item) => {
                        console.log(item.img)
                        return (
                            <div className="cart-item">
                                <div className="cart-item__img">
                                    <img src={ item.img }></img>
                                </div>
                                <div className="cart-item__content">
                                    <div className="cart-item__service-name">{ item.serviceName }</div>
                                    <div className="cart-item__title">{item.title}</div>
                                    <div className="cart-item__rating">
                                        <div className={classes.root}>
                                            <Rating
                                                name="half-rating"
                                                defaultValue={item.rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                        </div>
                                        ( { item.rating } / 5 )
                                    </div>
                                    <div className="cart-item__cost">{ item.cost } ₸</div>
                                    <a style={{ textdecoration: 'none' }} href={`/catalogue:${item.id}`}>
                                        <div className="cart-item__btn">
                                            Подробнее
                                            <div className="cart-item__btn-icon"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default Cart;