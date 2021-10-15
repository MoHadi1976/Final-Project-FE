import React from "react";


export const Postcard = ({ user }) => {
    
    return(
        
        <div>
            {user.notifications && user.notifications.map((photo, index) => {
                return <img className="postcards" key={index} src={photo} style={{ height: '300px' }} />
            })}
        </div>

    );
};