/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname:'/deyofhj4o/**'
          }
        ]
    
}
}

module.exports = nextConfig
