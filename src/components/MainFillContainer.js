import React from 'react';
import { connect } from 'react-redux';
import MainFillItem from './MainFillItem';

export const MainFillContainer = (props) => (
    <div>
        {
            props.mainFillContainer.length === 0 ? (
                <p>Start to edit</p>
            ) : (
                <div>
                    {
                        props.mainFillContainer.map((mainItem) => {
                            return (
                                <MainFillItem
                                    key={mainItem.id}
                                    {...mainItem}
                                />
                            );
                        })
                    }
                </div>
                // props.mainFillContainer.map((mainItem) => {
                //     return (
                //         <MainFillContainerItem
                //             key={mainItem.id}
                //             {...mainItem}/>
                //     )
                // })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        mainFillContainer: state.container
    }
};

export default connect(mapStateToProps)(MainFillContainer);