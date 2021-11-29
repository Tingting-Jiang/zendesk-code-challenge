import React from 'react';
import Pagination from '../Pagination';
import {shallow} from"enzyme";

import { cleanup } from '@testing-library/react'



describe("<Pagination/>", () =>{
    afterAll( () => {
        cleanup();
    })
    
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);
    
    
    it("render the Pagination without data", () => {
        const wrapper = shallow(<Pagination />);
        // const tree = renderer.create(<Pagination />).toJSON();
        expect(wrapper).toMatchSnapshot();

    });
    
    it("render Pagination with data", () => {
        const ticketPerPage = 2;
        const totalTickets = 3;
        const wrapper = shallow(<Pagination
            ticketsPerPage={ticketPerPage}
            totalTickets={totalTickets} />);
        const item = Math.ceil(totalTickets / ticketPerPage);
        expect(wrapper.find('ul').children()).toHaveLength(item);
    })
    
    
    
    it("render Pagination with 2 page", () => {
        const ticketPerPage = 3;
        const totalTickets = 4;
        const paginate = jest.fn();
        const wrapper = shallow(<Pagination
            ticketsPerPage={ticketPerPage}
            totalTickets={totalTickets}
            paginate={paginate}/>);
        wrapper.find('#change-page').at(1).props().onClick();
        expect(paginate).toHaveBeenCalledTimes(1);
        wrapper.find('#change-page').at(0).simulate('click');
        expect(paginate).toHaveBeenCalledTimes(2);
    })
    
    
    it("render Pagination 25 pages", () => {
        const ticketPerPage = 25;
        const totalTickets = 104;
        const wrapper = shallow(<Pagination
            ticketsPerPage={ticketPerPage}
            totalTickets={totalTickets} />);
        const item = Math.ceil(totalTickets / ticketPerPage);
        expect(wrapper.find('ul').children()).toHaveLength(item);
    })
    
    
});

