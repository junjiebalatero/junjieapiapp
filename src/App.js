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
                <table>
			<tr>
				<th>Date Posted</th>
				<th>Ravencoin Asset Name</th>
				<th>Total Circulating Supply</th>
				<th>Description</th>
				<th>For Sale</th>
				<th>Contact Address</th>
				<th>Contact Email</th>
				<th>Contact Cellphone</th>
				<th>Contact Phone</th>
				<th>Nick Name</th>
				<th>Issuer</th>
				<th>Website Url</th>
				<th>IPFS Attachment</th>
			</tr>
		{items.map(item => (
			<tr key={item.uid}>
				<td>{item.date}</td>
				<td>{item.ravencoin_asset_name}</td>
				<td>{item.total_circulating_supply}</td>
				<td>{item.description}</td>
				<td>{item.for_sale}</td>
				<td>{item.contact_address}</td>
				<td>{item.contact_email}</td>
				<td>{item.contact_cellphone}</td>
				<td>{item.contact_phone}</td>
				<td>{item.nick_name}</td>
				<td>{item.issuer}</td>
				<td>{item.website_url}</td>
				<td>{item.IPFS_attachment}</td>
			</tr>
		 ))};
</table>             
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
