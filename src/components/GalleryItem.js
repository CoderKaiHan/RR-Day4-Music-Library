import { useState } from 'react';
import { Link } from 'react-router-dom';

function GalleryItem(props) {
    let [view, setView] = useState(false);

    const simpleStyle = {
        'width': '300px',
        'height': '200px',
        'border': '1px solid black',
        'margin': '30px',
        'vertical-align':'top'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '500px',
        'border': '1px solid black',
        'margin': '2vh',
        // 'backgroundImage': `url(${props.item.artworkUrl100})`,
        // 'backgroundRepeat': 'no-repeat',
        // 'backgroundSize': 'contain',
        // 'backgroundPosition': 'center',
        'color': 'orange',
        'background-color':'teal'
    }    

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
                <img src={props.item.artworkUrl100} alt='' style={{width: '50px', height:'50px'}}/>
            </div>
        );
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to = {`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to = {`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
                <img src={props.item.artworkUrl100} alt='' style={{width: '250px', height:'250px'}}/>
            </div>
        );
    }    

    

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>

            {view ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItem;

