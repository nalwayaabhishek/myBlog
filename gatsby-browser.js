import ReactGA from 'react-ga';
ReactGA.initialize('UA-6884993-4');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
