import React from 'react';
import { addPage, addImages } from '../actions';
import { connect } from 'react-redux';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
        this.imageRef.current.addEventListener('load', () => {
            if (this.props.load_next === true) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.props.addPage();
                            this.props.addImages();
                            console.log('LOADED ANOTHER PAGE');
                            observer.unobserve(this.imageRef.current);
                        }
                    });
                }, {});
                observer.observe(this.imageRef.current);
            }
        });
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 30);
        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default connect(
    null,
    { addPage, addImages }
)(ImageCard);