import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import imgPlaceholder from '../../images/user-placeholder.png';

import { Container, Selector } from './styles';

interface Props {
  data?: any;
  onClick?: any;
  selected?: any;
}

const WidgetSelector: React.FC<Props> = ({ data, onClick, selected }) => {
  const history = useHistory();
  const select = history.location.state;

  const list = [...data];

  const [selectedItem, setSelectedItem] = useState(select);

  useEffect(() => {
    return onClick;
  }, [onClick]);

  // const handleSelector = useCallback((id: string) => {
  //   setSelectedItem(id);
  // }, []);

  return (
    <Container>
      {list &&
        list.map((item, i) => (
          <Selector
            key={i}
            onClick={() => onClick}
            selected={item.id === selectedItem}
          >
            <img
              src={item.avatar_url ? item.avatar_url : imgPlaceholder}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Selector>
        ))}
    </Container>
  );
};

export default WidgetSelector;
