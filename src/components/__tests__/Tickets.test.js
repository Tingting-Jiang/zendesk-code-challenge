import React from 'react';
import Tickets from '../Tickets'
import {shallow } from"enzyme";
import testData from "../../data/test.json";
import TicketList from '../TicketList';
import TicketDetails from '../TicketDetails'


describe("<Tickets/>", () => {
    
    it("render Tickets without data", () => {
        const wrapper = shallow(<Tickets />);
        expect(wrapper).toMatchSnapshot();
    });
    
    
    it ("render Tickets with loading to be true", () =>{
        const wrapper = shallow(<Tickets loading={true}/>);
        expect(wrapper.find('h2').text()).toBe("Loading...");
   
    })
    
    
    it ("render Tickets with TicketList", () =>{
        const ticket = testData;
        const setList = jest.fn();
        const wrapper = shallow(<Tickets tickets={ticket}
                                         isList={true}
                                         setList={setList}
                                         loading={false}/>);
        expect(wrapper.find(TicketList)).toHaveLength(1);
        expect(wrapper.find(TicketDetails)).toHaveLength(0);

    })
    
    
    it ("render Tickets with TicketDetails", () =>{
        const ticket = testData;
        const setList = jest.fn();
        const wrapper = shallow(<Tickets tickets={ticket}
                                         isList={false}
                                         setList={setList}
                                         loading={false}/>);
        expect(wrapper.find(TicketList)).toHaveLength(0);
        expect(wrapper.find(TicketDetails)).toHaveLength(1);
        
    })
})