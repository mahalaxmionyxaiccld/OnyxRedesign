import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonical?: string;
}

export default function SEO({
    title = "Onyx Industries - Precision Manufacturing & 3D Printing",
    description = "Custom CNC Machining, Sheet Metal Fabrication, 3D Printing, and Engineering Solutions. ISO 9001:2015 certified in Pune, India.",
    keywords = "Manufacturing, CNC Machining, 3D Printing, Sheet Metal, Pune, India, Precision, Engineering",
    ogTitle,
    ogDescription,
    ogImage = "/onyx_vertical.png",
    canonical,
}: SEOProps) {
    const siteTitle = title.includes("Onyx Industries") ? title : `${title} | Onyx Industries`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitle || siteTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || siteTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}
