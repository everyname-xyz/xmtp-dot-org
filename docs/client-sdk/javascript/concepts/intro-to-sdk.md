---
sidebar_label: Intro to the XMTP JavaScript SDK
sidebar_position: 1
---

# Introduction to the XMTP JavaScript SDK

The [XMTP JavaScript SDK](https://github.com/xmtp/xmtp-js) is a TypeScript implementation of an XMTP client for use with JavaScript and React apps.

When you build an app with XMTP, you can use the following functions provided by the SDK:

| Function | Description |
| --- | --- |
| Wallet-based authentication  | Connect to a user's wallet to get the wallet address, sign keys used for message signing and encryption, and authenticate incoming messages. |
| Wallet connection management | Manage changes in wallet addresses or chain IDs. Manage connection issues. |
| Key pair generation | Create keys used for message signing and encryption and advertising public keys to the network. |
| Key storage | Store keys securely. |
| Key signing | Sign keys with a connected wallet. |
| Relationship initiation | Create a secure messaging relationship between two wallets. |
| Conversation initiation | Create a container of messages between two wallets. |
| Message sending | Capture plaintext and submit it to the network. |
| Message history retrieval | Retrieve the history of messages between two wallets, filterable by date range. |
| Message streaming | Receive new messages in real-time. |
| Message content validation | Ensure message security using this middleware. |
| Message format validation | Ensure messages are properly formatted for the XMTP network using this middleware. |

To learn how to build an app with the XMTP SDK, see [Quickstart for the XMTP JavaScript SDK](/docs/client-sdk/javascript/tutorials/quickstart).

To learn about XMTP SDK classes and interfaces, see [XMTP Javascript SDK Reference](/docs/client-sdk/javascript/reference/classes/Client).