import React from "react";
import {shallow, mount, render } from"enzyme";
import TicketSummary from '../TicketSummary'


describe("<TicketSummary/>", () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TicketSummary />);
    })

    
    
    it("render TicketSummary without data", () =>{
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })
    
})