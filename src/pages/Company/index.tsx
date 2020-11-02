import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WidgetCard from '../../shared/Card';
import Layout from '../../shared/layout';

import { TitleWidget } from './styles';

const CompanyPanel: React.FC = () => {
  return (
    <Layout>
      <Link to="/companies">
        <WidgetCard>
          <TitleWidget>
            <FiBriefcase /> Empresas
          </TitleWidget>
        </WidgetCard>
      </Link>
      <Link to="/users">
        <WidgetCard>
          <TitleWidget>
            <FiBriefcase /> Pessoas
          </TitleWidget>
        </WidgetCard>
      </Link>
    </Layout>
  );
};

export default CompanyPanel;
