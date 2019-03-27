import React from 'react';
import Loadable from 'react-loadable';

export default function createSplitPoint(path) {
  return Loadable({
    loader: () => import(`../modules/${path}`),
    loading: () => <h3>Lodaing...</h3>,
  });
}
