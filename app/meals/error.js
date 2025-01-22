'use client'
export default function Error  ({error}) {
    return (
        <main className="error">
            <h1>An Error Occured.</h1>
            <p>failed to fetch meals data, please try again.</p>
        </main>
    )
}