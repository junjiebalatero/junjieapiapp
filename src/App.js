import React, { Component } from 'react';

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


            </div>
        );

        }

    }

}



export default App;
