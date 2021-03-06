import { graphql, StaticQuery } from 'gatsby';
import debounce from 'lodash.debounce';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import favicon16 from '../assets/icons/favicon-16.png';
import favicon32 from '../assets/icons/favicon-32.png';
import favicon48 from '../assets/icons/favicon-48.png';
import favicon62 from '../assets/icons/favicon-62.png';
import favicon192 from '../assets/icons/favicon-192.png';
import headshot from '../assets/images/lee-allen-headshot.png';

import styles from './Layout.module.scss';

export default class extends Component {
  constructor(props) {
    super(props);

    // Create a ref for the content element
    this.content = React.createRef();

    // Bind event handlers
    this.handleResize = debounce(this.handleResize.bind(this), 200);

    /**
     * Set the minHeight dynamically to workaround mobile sizing issues and keep the footer pinned
     * to the bottom of the viewport
     */
    this.setContentHeight = () => {
      if (this.content.current) this.content.current.style.minHeight = `${window.innerHeight}px`;
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

    contentClassNames.push(styles.content);

    // Apply home-specific styles if on homepage
    if (this.props.location.pathname === `/`) contentClassNames.push(styles.contentHome);

    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                description
                siteUrl
                title
              }
            }
          }
        `}
        render={data => {
          const metaInfo = data.site.siteMetadata;
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
          const structuredData = JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Lee Allen",
            "url": `${metaInfo.siteUrl}`,
            "sameAs": [
              "https://linkedin.com/in/leeericallen",
              "https://twitter.com/leeericallen",
              "https://github.com/leeericallen",
              "https://instagram.com/toastcowboy",
              "https://last.fm/user/toastcowboy",
            ]
          });

          return (
            <React.Fragment>
              <Helmet>
                <title>{metaInfo.title}</title>
                <meta name={`description`} content={metaInfo.description}/>
                <meta name={`robots`} content={`NOYDIR, NOODP`}/>
                {favicons.map((favicon, index) =>
                  <link key={index} rel={`icon`} {...favicon} type={`image/png`}/>)}
                {metaOpenGraph.map((meta, index) => <meta key={index} {...meta}/>)}
                {metaTwitter.map((meta, index) => <meta key={index} {...meta}/>)}
                <script type={`application/ld+json`}>{structuredData}</script>
              </Helmet>
              <div className={styles.container}>
                <div className={contentClassNames.join(` `)} ref={this.content}>
                  <Header pathname={this.props.location.pathname}/>
                  <main>{this.props.children}</main>
                  <Footer pathname={this.props.location.pathname}/>
                </div>
              </div>
            </React.Fragment>
          )
        }}/>
    );
  }
}
