module.exports = {
  apps: [
    {
      name: "mutolaxona",
      cwd: "/var/www/mutolaxona",
      script: "npx",
      // 3002-portni promoboost'ning vite dev prosessi egallagan — shu sababli 3003 ishlatiladi
      args: "wrangler dev --local --ip 127.0.0.1 --port 3003 --log-level warn",
      interpreter: "none",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      min_uptime: "30s",
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
