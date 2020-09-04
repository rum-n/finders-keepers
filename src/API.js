import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://app.finderskeepers.pro/ghost',
    key: 'dcbd247e43dc938503593427ab',
    version: "v3"
  });

  export default api;