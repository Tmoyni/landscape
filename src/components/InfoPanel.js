import PlantComponent from "./PlantComponent";

function InfoPanel() {      
    // const response = await fetch(`https://trefle.io/api/v1/genus?token=${YOUR_TREFLE_TOKEN}`, {
    //     mode: 'no-cors'
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data)
    // })
    // .catch(console.error);


    // (async () => {
    //     const response = await fetch(`https://trefle.io/api/v1/genus?token=${YOUR_TREFLE_TOKEN}`, {
    //         mode: 'no-cors'
    //     }).then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .catch(console.error);
    //     // const json = await response.json();
    //     // console.log(json);
    // })();

    let json = {
        "LayerName": "Meadow High Layer",
        "Plants": [
            {
                "common_name": "Big bluestem",
                "image_url": "https://bs.plantnet.org/image/o/fa733d97286728a96f5847b73e06f334bc0a02f6"
            },
            {
                "common_name": "New york ironweed",
                "image_url": "https://bs.plantnet.org/image/o/7bf721b86fa70f1cc19db3ba6cc72b97efc0b8c6"    
            },
            {   
                "common_name": "Eutrochium purpureum",
                "image_url": "https://d2seqvvyy3b8p2.cloudfront.net/c77ec28f06da961d023e0ee679fa947a.jpg",
            }

            // , "Cutleaf Black Eyed Susan", "Giant Black Eyed Susan", "Tall Coreopsis", "Thousand Flowered Aster", "New England Aster"
        ], 
        // "LayerName": "Meadow Low Layer",
        // "Plants": [
        //     "Creeping Phlox", "Eastern Bee Balm", "Threadleaf Coreopsis", "Yarrow"
        // ]
    }

  return (
    <div className="info-panel">
        <h2>Meadow Low Layer</h2> 
        {json.Plants.map((item) => (
            <div >
                <img src={item.image_url}></img>
                <p>{item.common_name}</p>
            </div>
        ))}
        {console.log(json.Plants)}
        <PlantComponent />
    </div>
  );
}

export default InfoPanel;
