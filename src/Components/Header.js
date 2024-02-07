import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Common from '../helpers/Common';
import colors from '../helpers/color';
import { callIcon, facebookIcon } from '../helpers/Icon';

const Wrap = styled.div`
    max-width:${Common.WIDTH};width:100%;margin:0 auto;padding:0 20px;
    & .company-logo{
        & .text{}
    }
    & .navbar-wrap{
        & .company-info{
            & .contact-number-wrap{color:${colors.yellow};display: flex;align-items: center;justify-content: center;}
            & .social-link{}
            & .req-btn{background: none;padding: 10px;}
        }
        & .nav-wrap{
            & .link{color:${colors.dark}}
        }
    }
`;
const Header = () => {
    return (
        <Wrap>
            <Link className='company-logo' to="/">Solution <span className='text'>21</span></Link>
            <div className="navbar-wrap">
                <div className="company-info">
                    <Link className="contact-number-wrap">
                        {callIcon({width:20,height:20})}
                        <span>(888) 426-9235</span>
                    </Link>
                    <div className="social-link">
                        <Link>{facebookIcon({width:20,height:20})}</Link>
                        <Link>{facebookIcon({width:20,height:20})}</Link>
                        <Link>{facebookIcon({width:20,height:20})}</Link>
                    </div>
                    <button className='req-btn' type="button">Request your free consultation</button>
                </div>
                <div className="nav-wrap">
                    <Link className='link' to="/about-us">ABOUT</Link>
                    <Link className='link' to="/services">SERVICES</Link>
                    <Link className='link' to="/solutions">SOLUTIONS</Link>
                    <Link className='link' to="/work">OUR WORK</Link>
                    <Link className='link' to="/blog">BLOG</Link>
                    <Link className='link' to="/contact-us">CONTACT US</Link>
                </div>
            </div>
        </Wrap>
    );
}
export default Header