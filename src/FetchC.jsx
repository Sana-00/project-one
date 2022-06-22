import React from "react";

function FetchC({ postId, id, email, name, body }) {
  return (
    <div className="card-body">
      <p className="card-text">
        {postId}
        {id}
        {name}
        {email}
        {body}
      </p>
    </div>
  );
}

export default FetchC;
