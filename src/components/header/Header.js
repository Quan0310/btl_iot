import React, {Fragment} from "react";
import "./Header.css";

export default function Header(){
    return(
        <div className="MainNavbarContainer">
            <div className="dashboardContainer">
                <h1 className="dashtext">Dashboard</h1>
            </div>

            <div className="ProfileItemsContainer">
                <img src={require('../Icons/bell.png')} className="NotificationIcon" alt=""></img>
                <div className="profileItem">
                    <img src={require('../Icons/avatar.jpg')} className="ProfileIcon"></img>
                    <p className="ProfileText">Lê Đình Quân</p>

                </div>
            </div>

            
        </div>
    )
}
// export default Header;