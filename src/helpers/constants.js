export const HEADER_DATA = [
  {
    title: 'Start messaging with XMTP',
    subtitle:
      'Use an app built with XMTP to start learning how to build one',
    url: '/docs/client-sdk/javascript/tutorials/start-messaging',
    icon: 'x-new.svg',
  },
  {
    title: 'Start building with XMTP client SDKs',
    subtitle: 'Build web3 messaging apps in React, JS, Kotlin, Swift, & Dart',
    url: '/sdks-and-tools',
    icon: 'quickstart-icon.svg',
  },
  {
    title: 'Build Lens DMs with XMTP',
    subtitle:
      'Build key XMTP chat features to provide DMs in a Lens app',
    url: '/docs/client-sdk/javascript/tutorials/build-key-xmtp-chat-features-in-a-lens-app',
    icon: 'dms-icon.svg',
  },
]

const tags = {
  announcements: { name: 'Announcements', url: '/blog/tags/announcements/' },
  awards: { name: 'Awards', url: '/blog/tags/awards/' },
  builtwithxmtp: { name: 'Built with XMTP', url: '/blog/tags/built-with-xmtp/' },
  company: { name: 'Company', url: '/blog/tags/company/' },
  contenttypes: { name: 'Content Types', url: '/blog/tags/content-types/' },
  developers: { name: 'Developers', url: '/blog/tags/developers/' },
  grants: { name: 'Grants', url: '/blog/tags/grants/' },
  hackathon: { name: 'Hackathon', url: '/blog/tags/hackathon/' },
  lens: { name: 'Lens', url: '/blog/tags/lens/' },
  litepaper: { name: 'Litepaper', url: '/blog/tags/litepaper/' },
  messaging: { name: 'Messaging', url: '/blog/tags/messaging/' },
  nfts: { name: 'NFTs', url: '/blog/tags/nfts/' },
  privacySecurity: { name: 'Privacy & Security', url: '/blog/tags/privacy-security/' },
  protocol: { name: 'Protocol', url: '/blog/tags/protocol/' },
  sdks: { name: 'SDKs', url: '/blog/tags/sd-ks' },
  spotlight: { name: 'Spotlight', url: '/blog/tags/spotlight/' },
  wallets: { name: 'Wallets', url: '/blog/tags/wallets/' },
}

export const BLOG_DATA = [
  {
    tag: [tags.builtwithxmtp, tags.developers, tags.messaging, tags.nfts],
    title:
      'Join the movement: own your conversations with Converse',
    content:
      "Discover the WhatsApp for web3: end-to-end encrypted messages between wallets, that only you own and can take with you anywhere.",
    user: {
      name: 'Rochelle Guillou',
      date: '9 May 2023 · 4 min read',
      img: 'rochelle-headshot.jpeg',
      url: 'https://twitter.com/RochelleSophie_'
    },
    url: '/blog/join-the-movement',
  },
  {
    tag: [tags.announcements, tags.developers, tags.messaging],
    title: 'Breaking the web2 barrier: How XMTP and Notifi are bridging the gap for web3 apps with web2 notifications',
    content:
      "With Notifi, XMTP in-app messages can now trigger notifications to any web2 app, so devs can reliably reach their end-users without compromising on security.",
    user: {
      name: 'Rochelle Guillou',
      date: '28 Apr 2023 · 3 min read',
      img: 'rochelle-headshot.jpeg',
      url: 'https://twitter.com/RochelleSophie_'
    },
    url: '/blog/notifi',
  },
  {
    tag: [tags.contenttypes, tags.developers, tags.sdks],
    title:
      'Some new content types',
    content:
      "Let's talk about some new content types for XMTP. What's a content type? A content type is a way to describe the type of content a message contains on XMTP.",
    user: {
      name: 'Engineering',
      date: '06 Mar 2023 · 7 min read',
      img: 'xmtp-icon.jpeg',
      url: 'https://twitter.com/xmtp_'
    },
    url: '/blog/attachments-and-remote-attachments',
  },
]

export const XMTP_JS_URL = 'https://api.github.com/repos/xmtp/xmtp-js'
export const XMTP_ANDROID_URL = 'https://api.github.com/repos/xmtp/xmtp-android'
export const XMTP_IOS_URL = 'https://api.github.com/repos/xmtp/xmtp-ios'
export const XMTP_FLUTTER_URL = 'https://api.github.com/repos/xmtp/xmtp-flutter'
export const XMTP_WEB_URL = 'https://api.github.com/repos/xmtp/xmtp-web'
export const XMTP_NOTIF_SERVER_URL = 'https://api.github.com/repos/xmtp/example-notification-server-go'
export const QUICKSTART_CHAT_URL = 'https://api.github.com/repos/xmtp/xmtp-quickstart-react'

export const CHAT_ITEM = {
  id: '2534740',
  full_name: 'Hosted XMTP Inbox chat app',
  description:
    'Hosted xmtp-inbox-web app connected to the XMTP production network',
  text: 'Try it',
  html_url: 'https://xmtp.chat/',
  icon: 'chat-icon.svg',
}
