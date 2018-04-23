import React from 'react';

const Gallery2Helper = (props) => (
    <div className="flexdisp" style={{width: parseFloat(props.imageProps.width, 10)*280/parseFloat(props.imageProps.height) + 'px', flexGrow: parseFloat(props.imageProps.width, 10)*280/parseFloat(props.imageProps.height)}}>
        <figure>
            <i style={{paddingBottom: parseFloat(props.imageProps.height, 10)/parseFloat(props.imageProps.width, 10)*props.galSet.bottom + '%'}}></i>
            <img src={props.imageProps.url} />
        </figure>
    </div>
);

export default class Gallery2 extends React.Component {
    render() {
        const styles = {
            innerPadding: {
                bottom: '10'
            },
            images: [{
                width: '700px',
                height: '921px',
                url: '/images/Durchgang1.jpg'
            }, {
                width: '700px',
                height: '936px',
                url: '/images/Mittendrin1.jpg'
            }, {
                width: '700px',
                height: '526px',
                url: '/images/Schnee1.jpg'
            }, {
                width: '700px',
                height: '522px',
                url: '/images/Schneelandschaft1.jpg'
            }, {
                width: '700px',
                height: '519px',
                url: '/images/Verhuellt1.jpg'
            }]
        };

        return (
            <div className="my-gallery gal-visibility">
                {
                    styles.images.map((image) => {
                        return <Gallery2Helper key={image.url} imageProps={image} galSet={styles.innerPadding } />;
                    })
                }

            </div>
        );
    }
}