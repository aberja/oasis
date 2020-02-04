const { a, strong } = require("hyperaxe");

module.exports = {
  en: {
    // navbar items
    extended: "Extended",
    extendedDescription:
      "Who: People you're not following\nWhat: Posts and comments",
    popular: "Popular",
    popularDescription:
      "Posts and comments (from anyone) with the most hearts (from people you follow)",
    latest: "Latest",
    latestDescription: "Who: People you're following\nWhat: Posts and comments",
    topics: "Topics",
    topicsDescription:
      "Who: People you're following\nWhat: Posts.  (To see comments, click the timestamp of a post)",
    profile: "Profile",
    mentions: "Mentions",
    private: "Private",
    search: "Search",
    settings: "Settings",
    // post actions
    comment: "Comment",
    reply: "Reply",
    json: "JSON",
    // relationships
    unfollow: "Unfollow",
    follow: "Follow",
    relationshipFollowing: "You are following",
    relationshipYou: "This is you",
    relationshipBlocking: "You are blocking",
    relationshipNone: "You are neither following or blocking",
    relationshipConflict: "You are somehow both following and blocking",
    // author view
    viewLikes: "View likes",
    // likes view
    likedBy: "'s likes",
    // composer
    publish: "Publish",
    commentWarning: [
      " Messages cannot be edited or deleted. To respond to an individual message, select ",
      strong("reply"),
      " instead."
    ],
    commentLabel: ({ publicOrPrivate, markdownUrl }) => [
      "Write a ",
      strong(`${publicOrPrivate} comment`),
      " on this thread with ",
      a({ href: markdownUrl }, "Markdown"),
      "."
    ],
    newMessageLabel: ({ markdownUrl, linkTarget }) => [
      "Write a new message in ",
      a(
        {
          href: markdownUrl,
          target: linkTarget
        },
        "Markdown"
      ),
      ". Messages cannot be edited or deleted."
    ],
    replyLabel: ({ markdownUrl }) => [
      "Write a ",
      strong("public reply"),
      " to this message with ",
      a({ href: markdownUrl }, "Markdown"),
      ". Messages cannot be edited or deleted. To respond to an entire thread, select ",
      strong("comment"),
      " instead."
    ],
    // settings
    settingsIntro: ({ readmeUrl }) => [
      "Check out ",
      a({ href: readmeUrl }, "the readme"),
      ", configure your theme, or view debugging information below."
    ],
    theme: "Theme",
    themeIntro:
      "Choose from any theme you'd like. The default theme is Atelier-SulphurPool-Light.",
    setTheme: "Set theme",
    language: "Language",
    languageDescription:
      "If you'd like to use Oasis in another language, choose one below. Please be aware that this is very new and very basic. We'd love your help translating Oasis to other languages and locales.",
    setLanguage: "Set language",

    status: "Status",
    peerConnections: "Peer Connections 💻⚡️💻",
    connectionsIntro:
      "Your computer is syncing data with these other computers. It will connect to any scuttlebutt pub and peer it can find, even if you have no relationship with them, as it looks for data from your friends.",
    noConnections: "No peers connected.",
    connectionActionIntro:
      "You can decide when you want your computer to network with peers. You can start, stop, or restart your networking whenever you'd like.",
    startNetworking: "Start networking",
    stopNetworking: "Stop networking",
    restartNetworking: "Restart networking",
    indexes: "Indexes",
    // search page
    searchLabel: "Add word(s) to look for in downloaded messages.",
    // posts and comments
    commentDescription: ({ parentUrl }) => [
      "commented on ",
      a({ href: parentUrl }, " thread")
    ],
    replyDescription: ({ parentUrl }) => [
      "replied to ",
      a({ href: parentUrl }, " message")
    ],
    mysteryDescription: "posted a mysterious message",
    // misc
    oasisDescription: "Friendly neighborhood scuttlebutt interface",
    submit: "Submit",
    following: "Following" // TODO: remove this - it isn't used now that the Following page is gone
  },
  /* spell-checker: disable */
  es: {
    popular: "Popular",
    latest: "Nuevo",
    profile: "Pagina",
    search: "Buscar",
    settings: "Reglas"
  }
};