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
        fetch('https://junjiemegavision.herokuapp.com/api/posts')
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
                        <li key={item._id}>
                            Date Posted: {item.date} | Ravencoin Asset Name: {item.ravencoin_asset_name} | Total Circulating Supply: {item.total_circulating_supply} | Description: {item.description} | For Sale: {item.for_sale} | Contact Address: {item.contact_address} | Contact Email: {item.contact_email} | Contact Cellphone: {item.contact_cellphone} | Contact Phone: {item.contact_phone} | Nick Name: {item.nick_name} | Issuer: {item.issuer} | Website Url: {item.website_url} | IPFS Attachment: {item.IPFS_attachment} |
                        </li>
                        ))};
                </ul>                
				<ul>
					<h3>Use this backtrack to play Flor De Luna by Santana</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/eVHsvYcJ9ks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</ul>
				<ul>
                    <h3>Use this backtrack to play Europa by Santana</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lRjTCVrweGE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ul>
                <ul>
                    <h3>Use this backtrack to play I Love You Much Too Much by Santana</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EC-MFRqDjk8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ul>
                <ul>
                    <h3>Use this backtrack to play Wave by Jobim</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MwEjps-Kdo0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ul>
                <ul>
                    <h3>Use this backtrack to play Bato Sa Buhangin by Cinderella</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6bfThhSUR-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ul>	
                <ul>
                    <h3>Use this backtrack to play Matud Nila by Ben Zubiri</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ap0J-GyuKkw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ul>
            </div>   
        );
        }
    }
}

export default App;
