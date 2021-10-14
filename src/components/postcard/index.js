import React from "react";

export const Postcard = ({ user }) => {
    return(
        <div>
            {user.notifications && user.notifications.map((photo, index) => {
                return <img key={index} src={photo} />;
            })}
        </div>
    );
};