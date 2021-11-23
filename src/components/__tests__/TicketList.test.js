import React from 'react';
import TicketList from '../TicketList'
import {shallow, mount, render } from"enzyme";
import testData from "../../data/test.json";


describe("<TicketList/>", () =>{
    it("render TicketList without data", ()=>{
        const wrapper = shallow(<TicketList/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    it("render TicketList with 1 ticket", ()=>{
        const tickets = testData;
        const setList= jest.fn();
        const setTicket = jest.fn();
        const viewTicket = jest.fn();
        const wrapper = shallow(<TicketList tickets={tickets}
                                            setList={setList}
                                            setTicket={setTicket}/>);
        
        expect(wrapper.find('ol').children()).toHaveLength(1);
        expect(wrapper.find('button').text()).toBe('Details');
    })
    
    // it("render TicketList with 1 ticket", ()=>{
    //     const tickets = testData;
    //     const setList= jest.fn();
    //     const setTicket = jest.fn();
    //     const ViewTicket = jest.fn();
    //     const wrapper = shallow(<TicketList tickets={tickets}
    //                                         setList={setList}
    //                                         setTicket={setTicket}/>);
    //
    //     wrapper.find('button').simulate('click');
    //     expect(ViewTicket).toHaveBeenCalled();
    // })
    
    
    
    
    
    
    
    
})