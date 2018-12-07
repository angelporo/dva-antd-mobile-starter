import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavBar, Icon } from "antd-mobile";

import styles from "./header.less";

class Header extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.normal}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >
          首页
        </NavBar>
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
