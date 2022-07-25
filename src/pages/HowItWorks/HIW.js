import React from 'react';
import Skeleton from '../../components/skeleton/Skeleton';

import './HIW.scss';
function HIW() {
    
    return (
        <div>
            <div className='skeleton-container'>
                <Skeleton ></Skeleton>
            </div>
            <div className="legend">
                <div className="box-field">
                    <div className="box forestgreen">

                    </div>
                    <p>&#128524;</p>
                </div>
                <div className="box-field">
                    <div className="box greenyellow">
                        
                    </div>
                    <p>&#128515;</p>
                </div>
                <div className="box-field">
                <div className="box aqua">
                        
                    </div>
                    <p>&#128528;</p>
                </div>
                <div className="box-field">
                <div className="box dodgerblue">
                        
                    </div>
                    
                    <p>&#128532;</p>
                </div>
                <div className="box-field">
                <div className="box blueviolet">
                        
                    </div>
                    
                    <p>&#128546;</p>
                </div>
            </div>
        </div>
    );
}

export default HIW;