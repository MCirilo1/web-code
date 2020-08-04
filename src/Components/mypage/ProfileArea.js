import React from 'react';
import propTypes from 'prop-types';
import {Button} from 'reactstrap';


function ProfileArea(props) {
    const handleEditClick = () => {
        props.handleEdit(props.Profile)
    };

    return (
        <div>
            <Button
                onClick={handleEditClick}
                ></Button>
        </div>
    )
}


ProfileArea.propTypes = {
    profile: propTypes.shape({
        firstName: propTypes.string,
        lastName: propTypes.string,
    }),
    handleEditClick: propTypes.func,
}

export default ProfileArea;