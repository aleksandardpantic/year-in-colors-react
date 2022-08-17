import React, { Component } from 'react';
import './Skeleton.scss';
import Day from '../day/Day'
import Year from '../../domain/Year';


class Skeleton extends Component {
    
    
    
    render() {
        const meseci = []
        const brDana = []
        const year = new Year(this.props.year)
        var polja = []
        var yearIndex = 0
        for (let januar = 0; januar < 31; januar++) {
            brDana.push(<th>{januar+1}</th>)
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Januar", day: januar+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Januar</td>{polja}</tr>)
        polja = []
        for (let februar = 0; februar < 28; februar++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Februar", day: februar+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Februar</td>{polja}</tr>)
            polja = []
        for (let mart = 0; mart < 31; mart++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Mart", day: mart+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Mart</td>{polja}</tr>)
            polja = []
        for (let april = 0; april < 30; april++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "April", day: april+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>April</td>{polja}</tr>)
            polja = []
        for (let maj = 0; maj < 31; maj++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Maj", day: maj+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Maj</td>{polja}</tr>)
            polja = []
        for (let jun = 0; jun < 30; jun++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Jun", day: jun+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Jun</td>{polja}</tr>)
            polja = []
        for (let jul = 0; jul < 31; jul++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Jul", day: jul+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Jul</td>{polja}</tr>)
            polja = []
        for (let avgust = 0; avgust < 31; avgust++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Avgust", day: avgust+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Avgust</td>{polja}</tr>)
            polja = []
        for (let septembar = 0; septembar < 30; septembar++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Septembar", day: septembar+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Septembar</td>{polja}</tr>)
            polja = []
        for (let oktobar = 0; oktobar < 31; oktobar++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Oktobar", day: oktobar+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Oktobar</td>{polja}</tr>)
            polja = []
        for (let novembar = 0; novembar < 30; novembar++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Novembar", day: novembar+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Novembar</td>{polja}</tr>)
            polja = []
        for (let decembar = 0; decembar< 31; decembar++) {
            polja.push(<td><Day data = {{mood: year.days[yearIndex].mood, month: "Decembar", day: decembar+1, text: year.days[yearIndex].text}}></Day></td>)
            yearIndex++
            
        }
        meseci.push(<tr> <td className='mesec'>Decembar</td>{polja}</tr>)
            polja = []

        
        return (
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {brDana}
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