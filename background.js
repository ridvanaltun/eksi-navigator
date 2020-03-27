const isEksi = url => {
  return url.includes("eksisozluk.com");
};

chrome.webNavigation.onCompleted.addListener(tab => {
  const { tabId, url } = tab;
  if (isEksi(url)) {
    chrome.tabs.executeScript(tabId, { file: "inject.js" });
    chrome.pageAction.setTitle({
      title: "ACTIVE",
      tabId
    });
    chrome.pageAction.setIcon({
      path: "images/active.png",
      tabId
    });
  } else {
    chrome.pageAction.setTitle({
      title: "PASSIVE",
      tabId
    });
    chrome.pageAction.setIcon({
      path: "images/passive.png",
      tabId
    });
  }
});
