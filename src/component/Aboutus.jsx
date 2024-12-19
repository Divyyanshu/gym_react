import AboutImage from '../assets/images/About.jpg';

const Aboutus = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-around mt-10 sm:mt-20 items-center gap-y-10">
                <div className="px-5 py-5 sm:px-10 sm:py-10">
                    <img
                        src={AboutImage}
                        alt=""
                        className="w-[18rem] h-[26rem] sm:w-[22rem] sm:h-[32rem] rounded-lg"
                    />
                </div>
                <div className="px-5 py-5 sm:px-10 sm:py-20 items-center">
                    <p className="text-2xl sm:text-3xl text-[#7f7f7f] font-[500] text-center sm:text-left">About Us</p>
                    <p className="text-3xl sm:text-4xl font-semibold mt-3 text-center sm:text-left">
                        WE <span className="text-[#0B9AD6]">BELIEVE</span>
                    </p>
                    <p className="text-3xl sm:text-4xl font-semibold uppercase mb-3 text-center sm:text-left">
                        little things <span className="text-[#0B9AD6]">matter</span>
                    </p>
                    <p className="text-[1rem] sm:text-[1.1rem] font-[500] text-justify">
                        Welcome to SR Fine, your number one source for your good health. We're dedicated to
                    </p>
                    <p className="text-[1rem] sm:text-[1.1rem] font-[500] text-justify">
                        providing you the very best of your fitness, with an emphasis on extremely trained coaches, up
                    </p>
                    <p className="text-[1rem] sm:text-[1.1rem] font-[500] text-justify">
                        to the mark infrastructure, personal focus on each client.
                    </p>
                    <br />
                    <p className="text-[1rem] sm:text-[1.1rem] font-[500] text-justify">
                        Founded in 1001 by Divyanshu Tailor, DR Fitness has come a long way from its beginnings in
                        Bhilwara,
                    </p>
                    <p className="text-[1rem] sm:text-[1.1rem] font-[500] text-justify">
                        Rajasthan. When Divyanshu Tailor first started out, his passion for fitness and health drove
                        them to
                    </p>
                    <p className="text-[1rem] sm:text-[1.1rem] font-[500] text-justify">
                        start their own business.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-around items-center my-10 gap-y-5 sm:gap-y-0">
                        {/* Happy Clients */}
                        <div className="text-center sm:text-left">
                            <p className="text-2xl font-semibold">450+</p>
                            <p className="font-semibold">Happy Clients</p>
                        </div>

                        {/* Year of Excellence */}
                        <div className="text-center sm:text-left">
                            <p className="text-2xl font-semibold">12+</p>
                            <p className="font-semibold">Year of Excellence</p>
                        </div>

                        {/* Coaches */}
                        <div className="text-center sm:text-left">
                            <p className="text-2xl font-semibold">10+</p>
                            <p className="font-semibold">Coaches</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Aboutus;