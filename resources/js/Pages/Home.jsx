import { Header } from "@/Layouts/Header";
import { Footer } from "@/Layouts/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <div className="container h-screen mt-20">
                <h1 className="">This is Content</h1>
            </div>
           <Footer />
        </>
    );
}
