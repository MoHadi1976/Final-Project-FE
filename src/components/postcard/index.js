import React from "react";
import { useHistory } from "react-router-dom";




export const Postcard = ({ user }) => {
    
    return(
        
        <div>
            {user.notifications && user.notifications.map((photo, index) => {
                return <img key={index} src={photo} />;
            })}
        </div>

    );
};