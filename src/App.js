import React, { Component } from 'react';
import Iframe from 'react-iframe';

class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://junjienotes.herokuapp.com/api/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
        return (
            <div className="App">                
                <ul>
                    {items.map(item => (
                        <li key={item.uid}>
                            Date: {item.date} | Name: {item.name} | App: {item.app} | Username or Email: {item.username_or_email} | Password: {item.password} | Image Url: {item.imageUrl}
                        </li>
                        ))};
                </ul>
                <ul>
                	<h3>Use this backtrack to play Bosa Nova Tempo Non-stop Rendition</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/iFQ9e-nKtQY?start=136" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</ul>
				<ul>
					<h3>Use this backtrack to play Flor De Luna by Santana</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/eVHsvYcJ9ks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</ul>
				<ul>
                    <h3>Use this backtrack to play Europa by Santana</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lRjTCVrweGE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ul>
				
            </div>           
        );
        }
    }
}

export default App;
