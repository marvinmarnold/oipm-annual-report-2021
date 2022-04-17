import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import TopNav from "./top-nav"

const Header = ({ siteTitle }) => (
  <header>
    <TopNav siteTitle={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
