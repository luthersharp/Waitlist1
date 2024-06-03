import NavLink from "../NavLink"
import SubscribeForm from "../SubscribeForm"

const CenteredCTA = () => {
    return (
        <section className="px-1 mt-7 pb-5  text-center">
            <div className="max-w-2xl md:mx-auto">
                <h2 className="text-gray-800 text-2xl font-semibold lg:text-4xl">
                    How to Find Podcast <span className="text-teal-400">Guests?</span>
                </h2>
                <h2 className="text-gray-800 text-2xl font-semibold lg:text-4xl">
                    How to be a <span className="text-teal-400">guest</span> on a podcast
                </h2>
                <p className="mt-3 text-gray-600">
                Welcome to our podcast guest network!
                <br/>
                </p>
                <p className="mt-3 text-gray-600">
                    Whether you're here to find podcast guests or want to be a guest on a podcast, this is the right place.
                    </p>
                <p className="mt-3 text-gray-600 underline underline-offset-4 decoration-teal-400">
                Podsynk will help you get more monthly listeners and attract Sponsors.
                </p>
            </div>
            <div id="forme1" className="mt-4 flex items-center justify-center">
               <SubscribeForm/>
            </div>
        </section>
    )
}

export default CenteredCTA