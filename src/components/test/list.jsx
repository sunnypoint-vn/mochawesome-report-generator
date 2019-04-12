import React from 'react';
import PropTypes from 'prop-types';
import { Test } from 'components/test';
import classNames from 'classnames/bind';
import styles from './test.css';

const cx = classNames.bind(styles);

const TestList = ({ className, tests, beforeHooks, afterHooks, enableCode, expandedAll }) => (
  <div className={ cx(className) }>
    { !!beforeHooks && beforeHooks.map(test => (
      <Test key={ test.uuid } test={ test } enableCode={ enableCode } expandedAll={ expandedAll } />))
    }
    { !!tests && tests.map(test => (
      <Test key={ test.uuid } test={ test } enableCode={ enableCode } expandedAll={ expandedAll } />))
    }
    { !!afterHooks && afterHooks.map(test => (
      <Test key={ test.uuid } test={ test } enableCode={ enableCode } expandedAll={ expandedAll } />))
    }
  </div>
);

TestList.propTypes = {
  className: PropTypes.string,
  tests: PropTypes.array,
  beforeHooks: PropTypes.array,
  afterHooks: PropTypes.array,
  enableCode: PropTypes.bool,
  expandedAll: PropTypes.bool
};

TestList.displayName = 'TestList';

export default TestList;
