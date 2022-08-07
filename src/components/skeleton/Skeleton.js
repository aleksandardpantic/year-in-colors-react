import React, { Component } from 'react';
import './Skeleton.scss';
import {YearMap} from '../../domain/yearmap';
import Day from '../day/Day'

class Skeleton extends Component {
    constructor(props){
        super(props);
        this.state = {
            mesecc: "",
            dan: 0
        }
        
    }
    
    
    render() {
        const meseci = []
        const dani = []
        var polja = []
        
        for (let mesec of YearMap) {
            
            for (let index = 1; index <= mesec.days; index++) {
                
                polja.push(<td><Day data={{day: index, month: mesec, mood: ""}}></Day></td>)
                
            }
            meseci.push(<tr> <td className='mesec'>{mesec.name}</td>{polja}</tr>)
            polja = []
        }
        for (let index = 1; index <= 31; index++) {
            dani.push(<th>{index}</th>)
        }
        return (
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {dani}
                        </tr>
                    </thead>
                    <tbody>
                        {meseci}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Skeleton;