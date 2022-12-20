import Head from "next/head";

export default function Layout({siteTitle, children}) {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main>{children}</main>
        </div>
    )
}