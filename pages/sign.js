import Layout from "../components/layout";
import Link from "next/link";
import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Profile from "../components/profile";

export default function Sign(){
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <Layout siteTitle={!session? "Sign In" : "Profile"}>
            <div>
                {!session ? (
                    <Auth supabaseClient={supabase} />
                ) : (
                    <Profile session={session}/>
                )}
            </div>
            <Link href='/'>Back to Home</Link>
        </Layout>
    )
}   