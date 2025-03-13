    browser.contextMenus.create({
      id: "translate-with-kagi",
      title: "Translate text with Kagi Translate",
      contexts: ["selection"],
      icons:{
        16: 'icons/favicon.svg'
      }
    });
    browser.contextMenus.create({
      id: "translate-page-with-kagi",
      title: "Translate page with Kagi Translate",
      contexts: ["link"],
      icons:{
        16: 'icons/favicon.svg'
      }
    });

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "translate-with-kagi":
      let creating = browser.tabs.create({
        active: true,
        url: "https://translate.kagi.com/?text=" + info.selectionText
    });
      break;
    case "translate-page-with-kagi":
      let creating2 = browser.tabs.create({
        active: true,
        url: "https://translate.kagi.com/" + info.linkUrl
    });
      break;
    }
});