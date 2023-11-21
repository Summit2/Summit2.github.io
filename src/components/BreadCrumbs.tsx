import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '5px',
    margin: '10px 0',
  };

  return (
    <Breadcrumb style={breadcrumbStyle}>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Breadcrumb.Item
            key={name}
            linkAs={Link}
            linkProps={{ to: routeTo }}
            active={isLast}
            style={{ color: isLast ? 'black' : '#007bff', fontWeight: isLast ? 'bold' : 'normal' }}
          >
            {name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
