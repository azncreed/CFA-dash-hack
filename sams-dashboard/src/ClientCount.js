import React from 'react';
import PropTypes from 'prop-types';

const ClientCount = (props) => {
   return (
   	<p> {props.clients.length} </p>
   	);
};

ClientCount.propTypes = {
	clients: PropTypes.array.isRequired
}

export default ClientCount;