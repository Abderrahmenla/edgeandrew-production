/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["images.ctfassets.net"],
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: `/${process.env.CONTENTFUL_SPACE_ID}/4nY3PnhVV8PJ4k7uL2Bo9o/2c313a1394c894024511de24d1d51e2f/**`,
            },
        ],
    },
};
