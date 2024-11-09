import React from 'react';

const Footer = ({length}) => {
    // const today = new Date();
    return (
      <footer>
         {/* <h4>Copyright &copy; {today.getFullYear()}</h4> */}
         <p>{length} List {length === 1 ? "item" : "items"} Items </p>

      </footer>
    );
  }
  export default Footer