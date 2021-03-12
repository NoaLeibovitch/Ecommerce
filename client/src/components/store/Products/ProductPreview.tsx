import React from 'react'; // we need this to make JSX compile
import './products.css';

type Props = {
    title: string,
    description: string,
    imgURL: string,
}

export const ProductPreview = ({ title, description, imgURL }: Props) =>
    <div className='ProductPreview'>
        <div className='ProductImage'><img src={imgURL}/></div>
        <div className='ProductContent'>
            <div className='ProductTitle'>{ title }</div>
            <div className='ProductDescription'>{ description }</div>
        </div>
    </div>

