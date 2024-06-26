import { Link } from "react-router-dom";

import Socials from "../Socials/";
import BurgerMenuButton from "../BurgerMenuButton/";

import logoPic from "../../img/logo.png";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top-part">
        <Link to="/" className="header__logo">
          <img src={logoPic} alt="" />
        </Link>
        <BurgerMenuButton className="header__burger" />
        <nav className="header__main-menu-conainer">
          <ul className="header__main-menu">
            <li>
              <Link className="header__main-menu-link" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/catalog">
                Каталог
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/collections">
                Коллекции
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/aboutus">
                O нас
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/">
                Контакты
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/shopcart">
                Корзина
              </Link>
            </li>
          </ul>
        </nav>
        <Socials className="header__socials" />
      </div>
      <ul className="header__gender-menu">
        <li>
          <Link className="header__gender-menu-link" to="/">
            Девушкам
          </Link>
        </li>
        <li>
          <Link className="header__gender-menu-link" to="/">
            Мужчинам
          </Link>
        </li>
        <li>
          <Link className="header__gender-menu-link" to="/">
            Унисекс
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
