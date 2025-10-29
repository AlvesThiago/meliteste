/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Libera os domínios externos que você usa em <Image src="https://...">
    domains: ['fesmo.com.br'],

    // (Opcional) Desativa warnings em dev e otimização em URLs externas desconhecidas
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // permite qualquer domínio https
      },
    ],
  },
};

export default nextConfig;
