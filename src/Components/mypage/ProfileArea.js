import React from 'react';
import propTypes from 'prop-types';



function ProfileCard(props) {
   

    return (
        <React.Fragment>
        <div className="container-fluid">
            <div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="image" style={{ width: "18rem" }}>
                            <div className="body">
                                <div className="text-center mt-4">
                                <img src={props.profile.avatar} className="rounded-circle" width={175} alt="avatar" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-6 col-md-6 col-sm-2">
                        <div className="body">
                            <div className="text-center mt-4">
                                <p>About Me</p>
                            </div>
                        </div>
                    </div>
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