import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'config/routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        {/*<div className='Menu-logo'>*/}
          {/*<img*/}
            {/*src={ workAndCoLogoImg }*/}
            {/*alt='Work & Co logo'*/}
          {/*/>*/}
        {/*</div>*/}
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routeCodes.DASHBOARD }
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.ABOUT }
          >
            About
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.CODE }
          >
            Personalized Code
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.INVITE_BUTTON }
          >
            Invite Button
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.INVITE_FORM }
          >
            Invite Form
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.INVITE_EMAIL }
          >
            Invite Email
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.BEHAVIOR }
          >
            Behavior
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.AB_TESTS }
          >
            AB Tests
          </NavLink>
        </div>
      </div>
    );
  }
}
