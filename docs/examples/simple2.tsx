import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notification from 'rc-notification';

// const notification = new Notification({
//     maxCount: 5
// })
// console.log('notification :>> ', notification);

let notification: any = null
Notification.newInstance({
    maxCount: 5
}, (n) => {
    notification = n

    console.log('notification :>> ', notification);
})


export default class PureSimple extends Component {
    simpleShow() {
        notification.notice({
            content: "<p>notice</p>"
        })
    }
    render() {
        return (
            <>
                <button onClick={this.simpleShow}>pure simple show</button>
            </>
        )
    }
}