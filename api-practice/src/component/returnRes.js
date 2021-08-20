import React from 'react'

const ReturnRes = (props) => {

    const res = props.map((res, id) => {



        return (
            <div key={id}>
                <img src={res.id.image} alt='' />
                <div>{res}</div>
            </div>

        )
    })
}

export default ReturnRes