import React from 'react';
import ProfileArea from './ProfileArea';
import propTypes from 'prop-types';


class Profile extends React.Component {
        state = {
            user: {
            firstName: 'Miguel',
            lastName: 'Cirilo',
            avatar: 'https://avatars2.githubusercontent.com/u/64857551?s=460&v=4'
            }
        }
    
    
    render() {
        return (
            <ProfileArea
                profile={this.state.user}
            />
        )
    }
}

Profile.propTypes = {
    user: propTypes.shape({
        firstName: propTypes.string,
        lastName: propTypes.string,
        avatr: propTypes,
    })
}

export default Profile;