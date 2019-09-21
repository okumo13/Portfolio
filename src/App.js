import React, {Component} from 'react';
import Projects from './Project';
import SocialProfiles from './SocialProfiles';
import oscarFoto from './assets/oscarpe.jpg'
class App extends Component{
    state= {displayBio: true}
    
    toggleDisplayBio= ()=>{
        this.setState({displayBio: !this.state.displayBio})
    }
    render(){
        
        return (
            <div>
                <img src={oscarFoto} alt='profile' className='profile'/>
                <h1>Hello!</h1>
            <p>My name is Oscar. I'm a software enigneer.</p>
            <p>I'm always looking forward to working on meaningul projects.</p>
            {
                this.state.displayBio ? (
                    <div>
                            <p>I live in Lima, and I code everyday</p>
                            <p>My favorite language is node.js.</p>
                            <p>Besides coding, I also love music speacilly cumbia peruana.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
            }
            <hr/>
            <Projects/>
<hr/>
                <SocialProfiles/>
            </div>
        )
    }
}
export default App;