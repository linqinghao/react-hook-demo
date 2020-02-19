import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top } from './style';

function HomePage(props) {
  const { route } = props;
  console.log(route);
  return (
    <div>
      <Top>
        <span>WebApp</span>
      </Top>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(HomePage);
