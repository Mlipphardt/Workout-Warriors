import React from 'react';
import './style.css';

function PostCard(props) {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-1">
          <div id="postImgDiv">
            <img id="postImg" src={props.image} alt="profile-pic" />
          </div>
        </div>
        <div className="col-11">
          <h6 className="card-subtitle mb-2 text-muted">
            {props.firstName} {props.lastName}
          </h6>
          <div className="card-text mb-1">{props.postBody}</div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default PostCard;