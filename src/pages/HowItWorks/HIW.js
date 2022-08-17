import React from 'react';
import Skeleton from '../../components/skeleton/Skeleton';
import Day from '../../domain/Day';

import './HIW.scss';
function HIW() {
    
    return (
        <div>
            <div className="uvod"><p>Oceni svoje raspoloženje svakog dans</p></div>
            <div className='skeleton-container'>
            <iframe src="https://free.timeanddate.com/clock/i8giy0kf/n35/tlrs36/fn8/fs24/ftb/tt0/ts1/tb2" frameborder="0" width="506" height="29" title='datetime'></iframe>

                <Skeleton year={[new Day(1,2,2, "abe"),new Day(3,5,1, "penis"),new Day(2,8,3, "retard"),new Day(26,9,5, "wtf"),new Day(31,12,2, "fk 12")]}></Skeleton>
                

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