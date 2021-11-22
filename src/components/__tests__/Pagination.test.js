import React from 'react';
import Pagination from '../Pagination';
import {shallow, mount, render } from"enzyme";
import renderer from "react-test-renderer";





describe("<Pagination/>", () =>{
    // let wrapper;
    // beforeEach(() => {
    //     wrapper = shallow(<Pagination />);
    // })
    //
    it(" render the Pagination without data", () => {
        // const wrapper = shallow(<Pagination />);
        const tree = renderer.create(<Pagination />).toJSON();
        expect(tree).toMatchSnapshot();

    });
    
    it("render Pagination with data", () => {
        const ticketPerPage = 2;
        const totalTickets = 3;
        // const wrapper = shallow(<Pagination
        //     ticketsPerPage={ticketPerPage}
        //     totalTickets={totalTickets} />);
        const tree= renderer.create(<Pagination
            ticketsPerPage={ticketPerPage}
            totalTickets={totalTickets} />);
        expect(tree).toMatchSnapshot();
        

    })
    
    
    
    
    
    
    
});

