import React from 'react';
import TicketList from '../TicketList'
import {shallow } from"enzyme";
import testData from "../../data/test.json";
import tickets from "../../data/tickets.json";



describe("<TicketList/>", () =>{
    it("render TicketList without data", ()=>{
        const wrapper = shallow(<TicketList/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    it("render TicketList with 1 ticket", ()=>{
        const tickets = testData;
        const setList= jest.fn();
        const setTicket = jest.fn();
        const wrapper = shallow(<TicketList tickets={tickets}
                                            setList={setList}
                                            setTicket={setTicket}/>);
        
        expect(wrapper.find('ol').children()).toHaveLength(2);
    })
    
    it("render TicketList with 25 tickets", ()=>{
        const testData = tickets.tickets;
        const setList= jest.fn();
        const setTicket = jest.fn();
        const wrapper = shallow(<TicketList tickets={testData}
                                            setList={setList}
                                            setTicket={setTicket}/>);
        expect(wrapper.find('ol').children()).toHaveLength(25);
        
        wrapper.find('#list-item').at(1).simulate("click");
        expect(setList).toHaveBeenCalledTimes(1);
        expect(setTicket).toHaveBeenCalledTimes(1);
    })
    
    
})