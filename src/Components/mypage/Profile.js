import React from 'react';


class Profile extends React.Component {
        state = {
            firstName: 'Miguel',
            lastName: 'Cirilo',
        }
    
    
    render() {
        return this.state.firstName + ' ' + this.state.lastName
    }
}

export default Profile;