import { useState } from "react"

export default function Home() {
    const [url, setUrl] = useState('')
    const [img, setImg] = useState("")

    function gen() {
        fetch('/api/generate', {
            method: "POST",
            body: JSON.stringify({
                url: url
            })
        }).then((a) => a.json())
            .then((res) => {
                setImg(res?.qr);
                if(res.error) console.warn(res.error)
            });
    }

    return (
        <main>
            <h1>QR Generator</h1>
            <div>
                <input placeholder="Text or URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                <button onClick={() => gen()}>Generate</button>
            </div>

            <img src={img} />
        </main>
    )
}