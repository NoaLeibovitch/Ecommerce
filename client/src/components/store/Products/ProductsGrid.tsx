import React, {ReactComponentElement} from 'react'; // we need this to make JSX compile
import './products.css';

type Props = {
    children: React.ReactNode,
}

export class ProductsGrid extends React.Component<Props> {

    render(){
        const displayChildren = React.Children.map(this.props.children, child=>{
            return(<span className='ProductsGridRow'>{child}</span>);
        });
        return(
            <div className='ProductsGrid'>
                {displayChildren}
            </div>
        )
    }
}