import React, { useState, useCallback, useEffect } from 'react';

import { Input } from './styles';

interface FilterData {
  data: any;
  setResult: any;
}

const Filter: React.FC<FilterData> = ({ data, setResult = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const d = [...data];

  useEffect(() => {
    const result = d.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setResult(result);
  }, [data, searchTerm]);

  const handleFilteredCompanies = useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <Input placeholder="Pesquisa" onChange={e => handleFilteredCompanies(e)} />
  );
};

export default Filter;
