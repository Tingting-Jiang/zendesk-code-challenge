import React from "react";
import TicketItem from './TicketItem'
import tickets from '../service/data.json'

const TicketsPerPage = 25;


const Page = ({data}) =>{
    
    const dataNum = data.count();
    
    const NewPage = (count) => {
        const TotalPage = Math.floor(dataNum / TicketsPerPage) + (dataNum % TicketsPerPage > 0 ? 1 : 0);
        const total = [];
        for (let i = 1; i <= TotalPage; i++){
            total.push(i);
        }
        return(
            <>
                <ol className="list-group list-group-numbered">
                    {total.map((ticket, key) => {
                        return <TicketItem ticket={ticket} key={key} />;
                    })}
                </ol>
            </>
        )
        
    }
    
};
export default Page;

class Pagination extends React.Component {
    createPagination = count => {
        let numPages =
            Math.floor(count / listingsPerPage) + (count % listingsPerPage > 0 && 1);
        let arr = [];
        for (let i = 1; i <= numPages; i++) {
            arr.push(i);
        }
        return arr.map(page => (
            <div
                key={`page-${page}`}
                className="pagination--button"
                onClick={() => {
                    this.props.fetchListings(page);
                }}
            >
                {
                    <span
                        className={
                            this.props.currentPage == page
                                ? "pagination--button__selected"
                                : "pagination--button__unselected"
                        }
                    >
            {page}
          </span>
                }
            </div>
        ));
    };
    
    render() {
        return (
            <div className="pagination">
                {this.props.data && this.createPagination(this.props.data.count)}
            </div>
        );
    }
}
