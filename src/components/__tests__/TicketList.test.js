import React from 'react';
import TicketList from '../TicketList'
import {shallow, mount, render } from"enzyme";
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
        
        expect(wrapper.find('ol').children()).toHaveLength(1);
    })
    
    it("render TicketList with 25 tickets", ()=>{
        const testData = tickets.tickets;
        // console.log("-------------", tickets.length());
        const setList= jest.fn();
        const setTicket = jest.fn();
        const ViewTicket = jest.fn(x => 42 + x);
        const wrapper = shallow(<TicketList tickets={testData}
                                            setList={setList}
                                            setTicket={setTicket}/>);
        expect(wrapper.find('ol').children()).toHaveLength(25);
        wrapper.find('#list-item').at(0).props().onClick();
        wrapper.find('#list-item').at(1).props().onClick();

        expect(ViewTicket).toHaveBeenCalledTimes(2);
        
    })
    
    
    
    
    
    
    
    
})