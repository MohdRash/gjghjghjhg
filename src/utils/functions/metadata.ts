import { Metadata } from "next";

export const generateMetadata = ({
    title = `DEVMONIX TECHNOLOGIES | Innovative Softwares with Precision`,
    description = `DEVMONIX TECHNOLOGIES | Crafting cutting-edge software solutions tailored to your needs. From concept to deployment, we build the future, today.`,
    image = "/Devmonix-drk.png",
    icons = [
        {
            rel: "dev-logo",
            sizes: "100x100",
            url: "/singledr.png"
        },
        {
            rel: "icon",
            sizes: "100x100",
            url: "/singledr.png"
        },
        {
            rel: "icon",
            sizes: "100x100",
            url: "/singledr.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@devmonixtech",
    },
    // metadataBase: new URL(process.env.APP_DOMAIN!),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
