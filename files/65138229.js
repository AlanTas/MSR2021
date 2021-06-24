await new Promise((resolve) => {
  page.on('request', async (request) => {
    if(request.url().includes(baseUrl)){
      const downloadUrl = fixUrl(request.url());
      const info = await getSongInfo(page);
      downloadSong(downloadUrl, info.title);
      await tagSong(info);
      await request.abort();
      await page.close();
      resolve();
    } else {
      request.continue();
    }
  });
})
