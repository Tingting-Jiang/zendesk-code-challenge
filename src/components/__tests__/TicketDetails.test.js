import React from 'react';
import TicketDetails from '../TicketDetails'
import {shallow, mount, render } from"enzyme";
import testData from "../../data/test.json";
import { cleanup } from '@testing-library/react';
import tickets from  "../../data/tickets.json";

describe("<TicketDetails/>", () =>{
    
    afterAll( () => {
        cleanup();
    })
    it("render TicketDetails without data", () =>{
        const wrapper = shallow(<TicketDetails/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    it("render TicketDetails with fake data", () =>{
        const ticket = undefined;
        const setList = jest.fn();
        const wrapper = shallow(<TicketDetails ticket={ticket} setList={setList}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#error').text()).toBe("Oops, the ticket is empty...");
        wrapper.find('#button2').simulate('click');
        expect(setList).toHaveBeenCalledTimes(1);
    });
    
    it("render TicketDetails with button click", () =>{
        const ticket = testData[0];
        const setList = jest.fn();
        const wrapper = shallow(<TicketDetails setList={setList}
                                               ticket={ticket}/>);
        wrapper.find('#button1').simulate('click');
        expect(setList).toHaveBeenCalledTimes(1);
    });
    
    it("render TicketDetails 1 data", () =>{
        const ticket = testData[0];
        const setList = jest.fn();
        const wrapper = shallow(<TicketDetails setList={setList}
                                                ticket={ticket}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#header').text()).toBe("Subject: My printer is on fire!");

    })

    it("render TicketDetails 1 data", () =>{
        const ticket = tickets.tickets[24];
        const setList = jest.fn();
        const wrapper = shallow(<TicketDetails setList={setList}
                                               ticket={ticket}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#header').text())
            .toBe("Subject: Lorem aliqua id nisi minim");
        expect(wrapper.find("#time").text())
            .toBe("Created At: 11/23/2021, 3:07:49 PM");

    })
})