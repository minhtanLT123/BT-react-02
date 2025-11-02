import React from 'react'


export default function GlassTryOnModel(props) {
    const { glassTryDetail } = props

    if (!glassTryDetail) return null; // chưa chọn kính

    return (
        <div className=''>
            <img
                src={glassTryDetail.url}
                // alt={glassTryDetail.name}
                className="opacity-80 w-40"
            />
        </div>
    )
}
