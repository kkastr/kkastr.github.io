import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function socialMediaBar() {
    return (
        <div className="social-container">
            <a href='https://github.com/kkastr'>
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
            </a>
        </div>
    )
}