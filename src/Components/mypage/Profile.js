import React from 'react';
import ProfileCard from './ProfileArea';
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
            
                <ProfileCard
                    profile={this.state.user}
                />
            
        )
    }
}

Profile.propTypes = {
    user: propTypes.shape({
        firstName: propTypes.string,
        lastName: propTypes.string,
        avatar: propTypes,
    })
}

export default Profile;