import Link from "next/link"
import GenerateKey from "./GenerateKey"

export default function Navbar(){
    const constantPages = ['followers', 'following', 'posts', 'profile',
        'recommended'
    ]
    const dependentPages = [
        'login',
        'register',
        'logout'
    ]

    const generateKey = () => {
        return crypto.randomUUID()
    }

    return(
        <div>
            <nav>
                <Link key={GenerateKey()} href={"/"}>Home</Link>
                <div className="space-x-4 text-xl">
                    {constantPages.map((item) => (
                            <Link key={GenerateKey()} href={"/"+item}>
                                {item.replace(item[0], item[0].toUpperCase())}
                            </Link>
                    ))
                }
                </div>
                <div className="space-x-4 text-xl">
                    {dependentPages.map((item) => (
                        <Link key={GenerateKey()} href={"/"+item}>
                            {item.replace(item[0], item[0].toUpperCase())}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    )
}