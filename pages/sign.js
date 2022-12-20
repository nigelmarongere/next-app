import Layout from "../components/layout";
import Link from "next/link";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Profile from "../components/profile";

export default function Sign(){
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <Layout siteTitle={!session? "Sign In" : "Profile"}>
            <div className="container" style={{ padding: '50px 0 100px 0' }}>
                {!session ? (
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
                ) : (
                    <Profile session={session}/>
                )}
            </div>
            <Link href='/'>Back to Home</Link>
        </Layout>
    )
}   