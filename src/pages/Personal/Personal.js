import React, { Component } from 'react'
import Skeleton from '../../components/skeleton/Skeleton'

export class Personal extends Component {
  render() {
    return (
        <div>
        
        <div className='skeleton-container'>
            <Skeleton ></Skeleton>
        </div>
        
    </div>
    )
  }
}

export default Personal