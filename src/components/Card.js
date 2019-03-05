import React from 'react';

const Card = ({id, name, email}) => {
    return (
      <div className="bg-green-light p-3 m-3 shadow inline-block rounded">
        <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
        <div className="flex flex-col items-center">
          <h2 className="text-orange">{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;
