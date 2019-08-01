import React from 'react';

import { Text } from 'react'
import { Dropdown } from 'react-bootstrap';

import ProductService from '../services/ProductService';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import SearchBox from '../components/SearchBox'
import ProductList from '../components/ProductList'
import Close from 'react-ionicons/lib/IosClose'

export class ProductListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            searchfield: '',
            filteredProducts: [],
            dropdownTitle: 'Categories',
            priceFilter: '',
            advancedSearch: false
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        ProductService.getProducts().then((data) => {
            console.log(data)
            this.setState({
                data: data,
                loading: false,
                filteredProducts: data
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }

    onAdvSearchChange = (event) => {
        this.setState({ advSearchfield: event.target.value })
    }

    onSearchClick = (event) => {
        const filteredList = this.state.data.filter(product => {
            return product.description.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        this.setState({ filteredProducts: filteredList })
    }

    searchFilter() {
        const filteredList = this.state.data.filter(product => {
            return product.description.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        this.setState({ filteredProducts: filteredList })
    }

    onFilter(category, price) {
        ProductService.getFilteredProducts(category, price).then((data) => {
            console.log(data)
            this.setState({
                data: data,
                loading: false,
                filteredProducts: data
            });
        }).then(() => {
            if(this.state.searchfield) {
                this.searchFilter()
            }
        }).catch((e) => {
            console.error(e);
        });

    }

    onSelected(category) {
        this.setState({dropdownTitle: category});
    }

    myFormat(num) {
        this.setState({priceFilter: num})
        return num + '€';
    }

    handleUpdate(e) {
        if (e.target.validity.valid) {
            this.setState({ priceFilter: e.target.value });
        }
    }

    toggle() {
        if (this.state.advancedSearch === true) {
            this.setState({advancedSearch: false, dropdownTitle: 'Categories', priceFilter: ''})
            ProductService.getProducts().then((data) => {
                this.setState({
                    filteredProducts: data
                });
            }).catch((e) => {
                console.error(e);
            });
        } else {
            this.setState({advancedSearch: true})
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        if (this.state.filteredProducts.length === 0) {
            return (
                <div>
                    <Header/>
                    <h1 className='d-flex justify-content-center text-secondary' style={{marginTop: 20}}>Find the Perfect Gift!</h1>
                    <div className='d-flex justify-content-center' style={{marginTop:10, marginBottom: 20}}>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <button className='btn btn-secondary' onClick={this.onSearchClick} style={{marginLeft: 10}}>Find!</button>
                        <button className='btn btn-primary ml-2' onClick={this.toggle.bind(this)}>Advanced Search</button>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-center container'>
                        <h3 className='text-secondary font-italic'>No results found!</h3>
                    </div>
                    <Footer/>
                </div>
            )
        }

        if (this.state.advancedSearch) {
            return (
                <div>
                    <Header/>
                    <h1 className='d-flex justify-content-center text-secondary' style={{marginTop: 20}}>Find the Perfect Gift!</h1>
                    <div className='d-flex justify-content-center' style={{marginTop:10, marginBottom: 20}}>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center' style={{marginTop:10, marginBottom: 20}}>
                            <h6 className='font-weight-light pt-2'>Max Price:</h6>
                            <input type="number" value={this.state.priceFilter} onChange={this.handleUpdate} step="any" style={{width: 80}}/>
                            <Dropdown onSelect={selectedKey => this.onSelected(`${selectedKey}`)} className='ml-2'>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    {this.state.dropdownTitle}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey='All'>All</Dropdown.Item>
                                    <Dropdown.Item eventKey='Cinema'>Cinema</Dropdown.Item>
                                    <Dropdown.Item eventKey='Food'>Food</Dropdown.Item>
                                    <Dropdown.Item eventKey='Shopping'>Shopping</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <button className='btn btn-primary ml-2' onClick={() => { this.onFilter(this.state.dropdownTitle, this.state.priceFilter) }}>Search</button>
                            <a onClick={this.toggle.bind(this)}><Close fontSize={32}/></a>
                        </div>
                        <hr />
                    </div>
                    <div className='container'>
                        <ProductList products={this.state.filteredProducts}/>
                    </div>
                    <Footer/>
                </div>
            )
        }

        return (
            <div>
                <Header/>
                <h1 className='d-flex justify-content-center text-secondary' style={{marginTop: 20}}>Find the Perfect Gift!</h1>
                <div className='d-flex justify-content-center' style={{marginTop:10, marginBottom: 20}}>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <button className='btn btn-secondary' onClick={this.onSearchClick} style={{marginLeft: 10}}>Find!</button>
                    <button className='btn btn-primary ml-2' onClick={this.toggle.bind(this)}>Advanced Search</button>
                </div>
                <hr/>
                <div className='container'>
                  <ProductList products={this.state.filteredProducts}/>
                </div>
                <Footer/>
            </div>
        );
    }
};
