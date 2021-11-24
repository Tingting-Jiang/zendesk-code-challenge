import React from "react";
import {shallow, mount, render } from"enzyme";
import App from "../../App.js";


describe("<App/>", () =>{
    
    it("render App without data", () =>{
        const wrapper = shallow(<App/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text()).toBe("Mobile Ticket Viewer");
    })
    
})