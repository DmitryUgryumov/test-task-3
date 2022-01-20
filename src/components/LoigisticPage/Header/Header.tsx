import React from "react";

interface HeaderProps {
  changeAdminHandler(): void;
  isAdmin: boolean;
  counter: number;
}

const Header: React.FC<HeaderProps> = ({
  changeAdminHandler,
  isAdmin,
  counter,
}) => {
  const buttonHandler = () => changeAdminHandler();

  return (
    <header className="header">
      <div className="header__container">
        <div className="counter">
          <span>Всего заявок : </span>
          <span>{counter}</span>
        </div>
        <div className="header__admins-container">
          <p className="header__admin">
            {isAdmin ? "Режим администратора" : "Режим просмотра"}
          </p>
          <button onClick={buttonHandler} className="header__button">
            Переключить режим
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
