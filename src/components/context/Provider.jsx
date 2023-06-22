import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    
  const value = {
    products,
    setProducts,
    loading,
    setLoading,
  };

  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
