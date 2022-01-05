import React from 'react'; 
import ReactDom from 'react-dom'; 

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), 
        (err) => console.log(err)
    ); 

    return <div>Welcome to the world of tomorrow</div>
}

ReactDom.render(
    <App/>, 
    document.getElementById('root')
); 