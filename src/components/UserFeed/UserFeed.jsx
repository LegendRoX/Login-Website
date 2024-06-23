import React, { Component } from "react";
import ReactLinkify from "react-linkify";
import "./UserFeed.css";
//import TimeAgo from 'react-timeago';

class UserFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userFeed = this.props.feedData.map(function (feedData, index) {
      return (
        <div className="medium-12-columns" key={index}>
          <div className="people-know">
            <div className="row-people-section">
              <div className="small-columns-people-know">
                <div className="about-people-author">
                  <p className="author-name">
                    <b>{this.props.name}</b>
                    <ReactLinkify>{feedData.feed}</ReactLinkify>
                    <br />
                  </p>
                </div>
              </div>
              <div className="small-medium-add-friend">
                <div className="add-friend-action">
                  <button
                    id="del"
                    className="button-snall-colour"
                    onClick={this.props.deleteFeed}
                    data={feedData.feed_id}
                    value={this.props.index}
                  >
                    <i className="fa-user-times" aria-hidden="true"></i>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }, this);

    return <div>{userFeed}</div>;
  }
}

export default UserFeed;
