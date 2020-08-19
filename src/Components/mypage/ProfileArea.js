import React from 'react';
import propTypes from 'prop-types';



function ProfileCard(props) {
   

    return (
        <React.Fragment>
        <div className="image" style={{ width: "18rem" }}>
            <div className="body">
                <div className="text-center mt-4">
                    <img src={props.profile.avatar} className="rounded-circle" width={200} alt="avatar" />
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}


ProfileCard.propTypes = {
    profile: propTypes.shape({
        firstName: propTypes.string,
        lastName: propTypes.string,
        avatar: propTypes,
    }),
    
}

export default ProfileCard;