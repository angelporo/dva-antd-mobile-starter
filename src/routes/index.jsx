import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { NavBar, Icon } from "antd-mobile";
import styles from "./index.less";

import Main from "../layouts/main.jsx";

class Index extends Component {
  handleGotoUserInfo = () => {
    const {
      dispatch,
      history: { goBack },
    } = this.props;
    console.log(this.props);
    goBack();
    // dispatch(routerRedux.replace("/page01"))
  };

  goBack = e => {
    e.preventDefault();
    const {
      history: { goBack },
    } = this.props;
    goBack();
  };

  render() {
    const { location } = this.props;
    return (
      <Main location={location}>
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={this.goBack}
            rightContent={[<Icon key="1" type="ellipsis" />]}
          >
            首页
          </NavBar>
          <div className={styles.normal}>
            <h1 className={styles.title}>Yay! Welcome to dva!</h1>
            <div onClick={this.handleGotoUserInfo} className={styles.welcome} />
            <ul className={styles.list}>
              <li>
                To get started, edit <code>src/index.js</code> and save to
                reload.
              </li>
              <li>
                <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Main>
    );
  }
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
