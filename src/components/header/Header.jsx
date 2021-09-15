import React, {useState, useEffect, useRef} from "react";
import { NavLink, BrowserRouter, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import "react-select/dist/react-select.css";
import createFilterOptions from "react-select-fast-filter-options";
import Select from "react-select";
import searchApp from "./reducers";
import { createStore } from "redux";
import { slide as Menu } from 'react-burger-menu';
import cart from "../../images/cart/cart-1.jpg";
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

const Header = () => {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsSearchClicked(false));
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1020px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };
   
    const options = Array.from(new Array(100), (_, id) => ({
        label: `Item ${id}`,
        value: id
      }));
      
      
    
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
        }
    ];
    const filterOptions = createFilterOptions({
        carts
      });
    return (
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a className="logo-link" href="/"><div className="logo"></div></a>
                    {/* // <div className={`burger_btn ${isOpen ? "open" : ""}`} onClick={() => { setOpen(!isOpen); }}>
                        <div className="burger"></div>
                    </div> */}
                    {/* <CSSTransition
                        in={isOpen}
                        timeout={400}
                        unmountOnExit
                        className="hidden_nav"
                    >
                        <div className="hidden-nav">
                            <div className="hidden-nav-menu">
                                <div className="hidden-nav-menu-top">
                                    <div className="close"></div>
                                    <a className="logo-link" href="/"><div className="logo"></div></a>
                                </div>
                                <p className="hidden-menu">Меню</p>
                                <div className={`menu ${isSearchClicked ? "hide" : ""}`}>
                                    <NavLink
                                        exact to="/"
                                        className="menu__item"
                                        activeClassName="menu__item--active"
                                    >
                                        Главная
                                    </NavLink>
                                    <NavLink
                                        to='/catalogue'
                                        className="menu__item"
                                        activeClassName="menu__item--active"
                                    >
                                        Каталог услуг
                                    </NavLink>
                                    <NavLink
                                        to='/help'
                                        className="menu__item"
                                        activeClassName="menu__item--active"
                                    >
                                        Помощь
                                    </NavLink>
                                </div>
                                <div className="btn">у меня свой сервис</div>
                            </div>
                        </div>
                    </CSSTransition> */}
                    {/* <Menu>
                        <a className="logo-link" href="/"><div className="logo"></div></a>
                        <div className="menu__item-title">Меню</div>
                        <NavLink
                            exact to="/"
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to='/catalogue'
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Каталог услуг
                        </NavLink>
                        <NavLink
                            to='/help'
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Помощь
                        </NavLink>
                    </Menu> */}
                    <div className={`menu ${isSearchClicked ? "hide" : ""}`}>
                        <NavLink
                            exact to="/"
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to='/catalogue'
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Каталог услуг
                        </NavLink>
                        <NavLink
                            to='/help'
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Помощь
                        </NavLink>
                    </div>
                    <div className="action-block">
                        <div ref={ref} className={`search ${isSearchClicked ? "show" : "hide"}`} onClick={() => { setIsSearchClicked(true) }}>
                            <div className="search-block"></div>
                            {/* <Select className="search-block__input" filterOptions={filterOptions} options={options} />, */}
                            <input className="search-block__input"></input>
                        </div>
                        <div className="btn">у меня свой сервис</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;