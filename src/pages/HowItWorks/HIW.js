import React from 'react';
import Skeleton from '../../components/skeleton/Skeleton';

import './HIW.scss';
function HIW() {
    
    return (
        <div>
            <div className="uvod"><p>Oceni svoje raspoloženje svakog dans</p></div>
            <div className='skeleton-container'>
                <Skeleton ></Skeleton>
            </div>
            <div className="legend">
                <div className="box-field">
                    <div className="box excellent">

                    </div>
                    <p>&#128524;</p>
                </div>
                <div className="box-field">
                    <div className="box good">
                        
                    </div>
                    <p>&#128515;</p>
                </div>
                <div className="box-field">
                <div className="box neutral">
                        
                    </div>
                    <p>&#128528;</p>
                </div>
                <div className="box-field">
                <div className="box bad">
                        
                    </div>
                    
                    <p>&#128532;</p>
                </div>
                <div className="box-field">
                <div className="box awful">
                        
                    </div>
                    
                    <p>&#128546;</p>
                </div>
            </div>
        </div>
    );
}

export default HIW;