import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout siteTitle="Next App">
      <section>
        <h1>Next App</h1>
        <p>This is a full-stack web application.</p>
        <p>Built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://supabase.com/" target="_blank">Supabase</a>.</p>
        <p>Users can:</p>
        <ul>
          <li>Sign up & sign in</li>
          <li>View & update profile</li>
          <li>Navigate between pages</li>
        </ul>
      </section>
      <section>
        <Link href='/sign'>Sign In</Link>
      </section>
      <footer>
        <p>Made by <a href="https://gwinyayi.com/" target="_blank">Nigel.</a></p>
      </footer>
    </Layout>
  )
}