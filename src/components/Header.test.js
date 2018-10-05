import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe(`Header`, () =>
  it(`renders correctly on home page`, () => {
    const props = {
      pathname: `/`,
    };

    const tree = renderer.create(<Header pathname={`/`} />).toJSON();
    expect(tree).toMatchSnapshot();
  }));

describe(`Header`, () =>
  it(`renders correctly on Word page`, () => {
    const props = {
      pathname: `/`,
    };

    const tree = renderer.create(<Header pathname={`/word`} />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
