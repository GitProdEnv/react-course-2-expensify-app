import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Components from './ComponentIndex';

const MainFill = (props) => {
    const ComponentToRender = Components[props.type];
    return (
        <div>
            <ComponentToRender/>
        </div>
    )
};

export default MainFill;

