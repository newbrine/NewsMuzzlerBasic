import React from "react";
import LeftMenu from "./leftMenu";
import TopNav from "./topNavBar";
import "../stylesheets/contentPage.css";

export default class contentPage extends React.Component {
    render() {
        return (
            <body className={'contentPage-body'}>
                <div className="grid-container">
                    <LeftMenu className="contentPage-leftMenu" />
                    <TopNav className="contentPage-topNav" />
                    <div className="contentPage-Main">Main</div>
                    <div className="contentPage-rightBar">RightBar</div>
                </div>
            </body>
        );
    }
}