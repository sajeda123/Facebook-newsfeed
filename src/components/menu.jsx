import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './resources/menu.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark,faBell,faLeaf,faTimes,faExclamationTriangle,faUserSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faBookmark,faBell,faLeaf,faTimes,faExclamationTriangle,faUserSlash)

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div class="dropdown-menu-right dropdown" >
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} dropdown-menu-right>
        <DropdownToggle>
          :
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem ><FontAwesomeIcon icon="bookmark" /> Save post</DropdownItem>
            <DropdownItem divider />
            <DropdownItem ><FontAwesomeIcon icon="bell" /> Turn on notification for this post</DropdownItem>
            <DropdownItem><FontAwesomeIcon icon="leaf" /> Embed</DropdownItem>
            <DropdownItem divider />
            <DropdownItem><FontAwesomeIcon icon="times" /> Hide Post</DropdownItem>
            <DropdownItem><FontAwesomeIcon icon="user-slash" /> Unfollow</DropdownItem>
            <DropdownItem><FontAwesomeIcon icon="exclamation-triangle" /> Report Post</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    );
  }
}