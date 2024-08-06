import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

import { connect } from 'react-redux';

class ImageList extends React.Component {
    render () {
        let i = 0;
        let load_next = false;
        const images = this.props.images.map((image) => {
            i++;
            if (i === this.props.images.length) load_next = true;
            return <ImageCard key={image.id} image={image} load_next={load_next}/>
        });
        return <div className='image-list'>{images}</div>;
    }
}

const mapStateToProps = (state) => {
    return { images: state.images };
}

export default connect(
    mapStateToProps,
    {}
)(ImageList);