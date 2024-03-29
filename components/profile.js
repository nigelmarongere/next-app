import { useState, useEffect } from "react"
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"

export default function Profile({ session }) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try {
          setLoading(true)
    
          let { data, error, status } = await supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', user.id)
            .single()
    
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            setUsername(data.username)
            setWebsite(data.website)
            setAvatarUrl(data.avatar_url)
          }
        } catch (error) {
          alert('Error loading user data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    }
    
    async function updateProfile({ username, website, avatar_url }) {
        try {
            setLoading(true)

            const updates = {
            id: user.id,
            username,
            website,
            avatar_url,
            updated_at: new Date().toISOString(),
            }

            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div>
            <h1>Profile</h1>
            <div>
                <label>Email</label>
                <br/>
                <input id="email" type="text" value={session.user.email} disabled />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <br/>
                <input id="username" type="text" value={username || ''} onChange={(ev) => setUsername(ev.target.value)}/>
            </div>
            <div>
                <label>Website</label>
                <br/>
                <input id="website" type="text" value={website || ''} onChange={(ev) => setWebsite(ev.target.value)}/>
            </div>

            <div>
                <button onClick={() => updateProfile({ username, website, avatar_url })} disabled={loading}>
                    {loading? 'Loading...' : 'Update'}
                </button>
            </div>
            <br/>
            <div>
                <button onClick={() => supabase.auth.signOut()}>
                    Sign Out
                </button>
            </div>
            <br/>
        </div>
    )
}
