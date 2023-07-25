import { defineSiteConfig } from './utils/siteConfig';

export default defineSiteConfig({
  header: {
    logo: {
      src: '/logo.png',
      width: 32 / 121 * 300,
      height: 32,
      alt: 'OSS Insight',
    },
    items: [
      {
        label: 'Data Explorer',
        href: 'https://ossinsight.io/explore/',
      },
      {
        label: 'Collections',
        href: 'https://ossinsight.io/collections/',
      },
      {
        label: 'Live',
        items: [
          { label: '2D Version', href: 'https://live.ossinsight.io' },
          { label: '3D Version - GitHub City', href: 'https://live.ossinsight.io/3d' }
        ]
      },
      {
        label: 'Blog',
        href: 'https://ossinsight.io/blog/',
      },
      {
        label: 'API',
        href: 'https://ossinsight.io/docs/api/',
      },
      {
        label: 'More',
        items: [
          { label: 'Workshop', href: '/docs/workshop' },
          { label: 'About OSS Insight', href: '/docs/about' },
          {
            label: 'About TiDB Cloud',
            href: 'https://en.pingcap.com/tidb-cloud?utm_source=ossinsight&utm_medium=referral'
          },
          { label: 'How do we implement OSS Insight?', href: '/blog/why-we-choose-tidb-to-support-ossinsight' },
          { label: 'Report an Issue', href: 'https://github.com/pingcap/ossinsight/issues' },
        ]
      },
      'spacer',
    ],
  },
});