import React, { useState } from 'react'
import './Design.css'


export default function Design(): JSX.Element {
    

    return (
        <div className='design-container'>
            <div className='design-header'>
                <h1>Design</h1>
            </div>
            <div className='design-body'>
                <button onClick={newSection}>New Section</button>
            </div>
        </div>
    )
}