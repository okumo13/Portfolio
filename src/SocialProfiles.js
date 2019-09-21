import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){
        console.log('this.props', this.props);
        const { link, image}= this.props.socialProfile
        return(
            <div style={{display:'inline-block', margin: 10}}>               
                <a href={link}><img style={{ width:50, height: 50}} src={image}/></a>
            </div>
        )
        }
}
class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILES=>{
                            return  <SocialProfile key={SOCIAL_PROFILES.id} socialProfile={SOCIAL_PROFILES}/>;
                            
                        })
                    }
                </div>
            </div>
        )
    }
}
export default SocialProfiles;