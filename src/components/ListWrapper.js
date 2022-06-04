import React from "react";
import ListItem from "./ListItem.js";
import './ListWrapper.css';
import {twitterAccounts}  from "../data.js";

const ListWrapper = () => {
    return (
        <ul className={"listWrapper_wrapper"}>
            {twitterAccounts.map(item => (
                <ListItem key={item.name} {...item}></ListItem>
            ))}
        </ul>
    )
}

export default ListWrapper;