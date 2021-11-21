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


