import React, {Component} from "react";
import {SignUpForm} from "../components/Users/forms/SignUpForm";
import {SearchQuery} from "../components/store/Search/SearchQuery";
import {ProductsGrid} from "../components/store/Products/ProductsGrid";
import {ProductPreview} from "../components/store/Products/ProductPreview";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/products")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  displayProducts(){
      let products=0;
      let i;
      if(this.state.apiResponse.length==0){
          products = "no products found";
      }
      else{
          let res = JSON.parse(this.state.apiResponse);
          products=res.map(function(product){
              return  <ProductPreview key={i}
                  title={product.productname}
                  description={product.productdescription}
                  imgURL={product.productimg}/>;
          });
      }
      return products;
  }

  render() {
    return (
        <div>
            <SearchQuery></SearchQuery>
            <ProductsGrid>
                {this.displayProducts()}
                <ProductPreview title={"Very nice product"} description={"hello lalalalalalallalalalalalal"} imgURL={"https://i.ebayimg.com/images/g/Su8AAOSwMbxgMn82/s-l640.jpg"}/>
                <ProductPreview title={"Very good product"} description={"hello lililililili"} imgURL={"https://i.ebayimg.com/images/g/q0YAAOSwQSdfvVG1/s-l500.jpg"}/>
            </ProductsGrid>
        </div>
    );
  }
}

export default HomePage;
