import React from 'react'

function Loading() {
    return (
        <div className='text-center'>
            <div className="spinner-border" role="status" style={{ height: '120px', width: '120px', marginTop: '100px' }}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading