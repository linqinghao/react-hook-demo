import React from 'react';
import { Redirect } from 'react-router';
import HomePage from '../pages/home';
import RecommendPage from '../pages/recommend';

export default [
  {
    path: '/',
    component: HomePage,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to='/recommend' />,
      },
      {
        path: '/recommend',
        component: RecommendPage,
      },
    ],
  },
];
