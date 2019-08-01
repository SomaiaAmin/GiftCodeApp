import React from 'react';

export class Pagination extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list,
        currentPage: 1,
        perPage: this.props.itemCount,
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { list, currentPage, perPage } = this.state;
  
      const indexLast = currentPage * perPage;
      const indexFirst = indexLast - perPage;
      const currentTodos = list.slice(indexFirst, indexLast);
  
      const renderTodos = currentTodos.map((item, index) => {
        return <div key={index}>{item}</div>;
      });
  
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(list.length / perPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <div
            key={number}
            id={number}
            onClick={this.handleClick}
            style={{fontSize:20,marginLeft:0,border:'1px double lightgrey',paddingLeft:15,paddingRight:15,paddingTop:6,paddingBottom:6}}
          >
            {number}
          </div>
        );
      });
  
      return (
        <div>
          <div>
            {renderTodos}
          </div>
          <div className='d-flex justify-content-center' style={{fontSize:22,color:' #0000EE',marginBottom:20}}>
          {renderPageNumbers}
          </div>
            
        </div>
      );
    }
  }
  
  
