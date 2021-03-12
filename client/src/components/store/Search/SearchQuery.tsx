import React from 'react'; // we need this to make JSX compile
import './search.css';

type Props = {
    query: string | "",
}

export const SearchQuery = ({ query}: Props) =>
    <div className='SearchQuery'>
        <div className='SearchTextBox'>
            <textarea placeholder='What are you looking for?'>{query}</textarea>
        </div>
        <div className='GoButton'>
            <button>Go</button>
        </div>
    </div>

