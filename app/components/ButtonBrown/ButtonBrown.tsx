import Link from 'next/link'
import React from 'react'

interface ButtonBrownProps {
    text: string
}

const ButtonBrown = (props: ButtonBrownProps) => {
    return (
        <Link
            href=""
            className="bg-[#d68e5d] text-white font-bold py-3 px-10 rounded-tl-[15px] rounded-br-[15px] px-10 py-3 hover:bg-[#c47642] text-bold transition duration-500 hover:duration-500"
        >
            {props.text}
        </Link>
    )
}

export default ButtonBrown