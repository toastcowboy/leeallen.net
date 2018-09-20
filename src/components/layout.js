import debounce from 'lodash.debounce';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

import favicon16 from '../assets/icons/favicon-16.png';
import favicon32 from '../assets/icons/favicon-32.png';
import favicon48 from '../assets/icons/favicon-48.png';
import favicon62 from '../assets/icons/favicon-62.png';
import favicon192 from '../assets/icons/favicon-192.png';
import headshot from '../assets/images/lee-allen-headshot.png';

import styles from './layout.module.css';

export default class extends Component {
  constructor(props) {
    super(props);

    // Create a callback ref for the content element
    this.content = null;
    this.setContentRef = element => { this.content = element; };

    // Bind event handlers
    this.handleResize = debounce(this.handleResize.bind(this), 200);

    /**
     * Set the minHeight dynamically to workaround mobile sizing issues and keep the footer pinned
     * to the bottom of the viewport
     */
    this.setContentHeight = () => {
      if (this.content) this.content.style.minHeight = `${window.innerHeight}px`;
    };
  }

  componentDidMount() {
    this.setContentHeight();

    window.addEventListener(`resize`, this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.handleResize.cancel);
  }

  handleResize(event) {
    this.setContentHeight();
  }

  render() {
    const contentClassNames = [];
    const favicons = [
      {
        href: favicon16,
        sizes: `16x16`,
      },
      {
        href: favicon32,
        sizes: `32x32`,
      },
      {
        href: favicon48,
        sizes: `48x48`,
      },
      {
        href: favicon62,
        sizes: `62x62`,
      },
      {
        href: favicon192,
        sizes: `192x192`,
      },
    ];
    const metaInfo = this.props.data.site.siteMetadata;
    const metaOpenGraph = [
      {
        content: metaInfo.siteUrl,
        property: `og:url`,
      },
      {
        content: `website`,
        property: `og:type`,
      },
      {
        content: metaInfo.title,
        property: `og:title`,
      },
      {
        content: headshot,
        property: `og:image`,
      },
      {
        content: metaInfo.description,
        property: `og:description`,
      },
      {
        content: `leeallen.net`,
        property: `og:site_name`,
      },
      {
        content: `en_US`,
        property: `og:locale`,
      },
      {
        content: `Lee Allen`,
        property: `article:author`,
      },
    ];
    const metaTwitter = [
      {
        content: `summary`,
        name: `twitter:card`,
      },
      {
        content: `@leeericallen`,
        name: `twitter:creator`,
      },
      {
        content: metaInfo.siteUrl,
        name: `twitter:url`,
      },
      {
        content: metaInfo.title,
        name: `twitter:title`,
      },
      {
        content: metaInfo.description,
        name: `twitter:description`,
      },
      {
        content: headshot,
        name: `twitter:image`,
      },
    ];

    contentClassNames.push(styles.content);

    // Apply home-specific styles if on homepage
    if (this.props.location.pathname === `/`) contentClassNames.push(styles.contentHome);

    return (
      <div>
        <Helmet>
          <title>{metaInfo.title}</title>
          <meta name={`description`} content={metaInfo.description}/>
          {favicons.map((favicon, index) =>
            <link key={index} rel={`icon`} {...favicon} type={`image/png`}/>)}
          {metaOpenGraph.map((meta, index) => <meta key={index} {...meta}/>)}
          {metaTwitter.map((meta, index) => <meta key={index} {...meta}/>)}
        </Helmet>
        <div className={styles.container}>
          <div className={contentClassNames.join(` `)} ref={this.setContentRef}>
            <Header pathname={this.props.location.pathname}/>
            <main>{this.props.children}</main>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;
