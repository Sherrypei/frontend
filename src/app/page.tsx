export default function Home() {
    const width = 80;
    const percent = 30;


    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-96 gap-3 bg-sky-500 pt-48" >
            <div >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={require('../image/ScratchGO_icon.png')} className="text-white" alt="ScratchGO Icon"/>
            </div>
            <div>
                <p className="text-white">
                    ScratchGO beta0.7
                </p>
            </div>
            <div className="w-full h-6 rounded-full bg-white">
                <div className="h-6 rounded-full bg-orange-400 w-1/5" ></div>
            </div>

            <div>
                <p className="text-white">
                    Loading Game 25%
                </p>
            </div>
            <div>
                <p className="text-white">
                    Developed with
                </p>
            </div>


        </main>
    )
}
