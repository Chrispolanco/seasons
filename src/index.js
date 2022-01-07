import React from 'react'; 
import ReactDom from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position), 
//         (err) => console.log(err)
//     ); 

//     return <div></div>
// }

class App extends React.Component {
    state = { lat: null, errorMessage: ''}; 

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}), 
            err => this.setState({ errorMessage: err.message })
        );  
    }

    //render is required for class 
    render(){
        if(this.state.errormessage && !this.state.lat){
            return <div>Error: {this.state.errormessage}</div>; 
        }

        if(!this.state.errormessage && this.state.lat){
            return <SeasonDisplay lat= {this.state.lat} />; 
        }
        
        return <div> Loading! </div>; 
    }
}


ReactDom.render(<App/>, document.getElementById('root')); 