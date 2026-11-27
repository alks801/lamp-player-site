(() => {
  // Public Yandex Metrica counter ID.
  const counterId = 114730021;

  // Do not send development traffic to the production counter.
  if (!counterId || window.location.protocol === 'file:' ||
      ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
    return;
  }

  window.ym = window.ym || function () {
    (window.ym.a = window.ym.a || []).push(arguments);
  };
  window.ym.l = Date.now();

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://mc.yandex.ru/metrika/tag.js';
  document.head.appendChild(tag);

  window.ym(counterId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false,
  });

  const trackDownload = (event) => {
    if (event.type === 'auxclick' && event.button !== 1) return;

    const link = event.target.closest('a[data-download="apk"]');
    if (!link) return;

    const url = new URL(link.href);
    const release = url.pathname.match(/\/releases\/download\/([^/]+)\//);
    window.ym(counterId, 'reachGoal', 'download_apk', {
      language: document.documentElement.lang,
      version: release ? release[1].replace(/^v/, '') : 'unknown',
      platform: 'android',
      file_name: url.pathname.split('/').pop(),
    });
  };

  // Keep the native link behavior, including keyboard and middle-click activation.
  document.addEventListener('click', trackDownload);
  document.addEventListener('auxclick', trackDownload);
})();
