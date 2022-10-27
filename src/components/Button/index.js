import React from 'react'

export default function index(props) {
    const {className, operation} = props
    return (
        <div>
            <button className={className}> {operation} </button>
        </div>
)
}
