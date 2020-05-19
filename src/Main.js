import React, {Component} from 'react';
import ProfilePhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';

class Main extends Component{
    render() {
    return(
        <div className='Main'>
<FullName></FullName>
<ProfilePhoto></ProfilePhoto>
<Address></Address>
        </div>

    )
}
}
export default Main;