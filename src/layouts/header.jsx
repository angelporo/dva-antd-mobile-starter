import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavBar, Icon } from "antd-mobile";

import styles from "./header.less";

class Header extends Component {
  goBack() {
    console.log("ok");
    const {
      history: { goBack },
    } = this.props;
    goBack();
  }

  render() {
    const { location } = this.props;
    return (
      <div className={styles.normal}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
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
