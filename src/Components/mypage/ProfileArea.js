import React from 'react';
import propTypes from 'prop-types';



function ProfileCard(props) {
   

    return (
        <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.profile.avatar} className="card-img-top" alt="avatarUrl" />
          <div className="card-body">
                <h5 className="card-title">{props.profile.firstName} {props.profile.lastName}</h5>
                <p className="card-text">
                 Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </p>
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