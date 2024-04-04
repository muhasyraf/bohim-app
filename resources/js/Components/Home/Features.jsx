export default function Features() {
    return (
        <div className="container relative mt-24 mb-10">
            <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bohim-jet tracking-wide">
                    Tertarik Untuk Ikut Berperan?
                </h2>
                <h3 className="text-md mt-6 sm:text-xl md:text-2xl font-medium text-bohim-jet tracking-wide mx-4">
                    Yuk, temukan bagaimana Anda bisa berkontribusi di sini!
                </h3>
            </div>
            <div>
                <div className="w-full mt-10 p-4">
                    <div className="grid gap-24 md:grid-cols-3 md:gap-14">
                        <div className="rounded-xl bg-bohim-sky p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-24 w-24 -translate-y-20 transform items-center justify-center rounded-full bg-bohim-light-blue shadow-lg shadow-teal-500/40">
                                <svg
                                    width="66"
                                    height="66"
                                    viewBox="0 0 66 66"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M51.5625 55H14.4375C12.1546 55.0001 9.95822 54.1267 8.29887 52.5589C6.63951 50.9911 5.643 48.8477 5.51375 46.5685L5.5 46.0625V17.1875C5.49981 15.6197 6.09481 14.1102 7.16477 12.9642C8.23472 11.8182 9.69983 11.1211 11.264 11.0138L11.6875 11H46.0625C47.6304 10.9998 49.1398 11.5948 50.2858 12.6648C51.4318 13.7347 52.1289 15.1998 52.2363 16.764L52.25 17.1875V19.25H54.3125C55.8804 19.2498 57.3898 19.8448 58.5358 20.9148C59.6818 21.9847 60.3789 23.4498 60.4863 25.014L60.5 25.4375V46.0625C60.5002 48.3454 59.6267 50.5418 58.0589 52.2011C56.4911 53.8605 54.3477 54.857 52.0685 54.9862L51.5625 55ZM14.4375 50.875H51.5625C52.7707 50.8749 53.9347 50.4203 54.8232 49.6016C55.7117 48.7829 56.2598 47.6599 56.3585 46.4557L56.375 46.0625V25.4375C56.375 24.9391 56.1945 24.4576 55.8669 24.0819C55.5393 23.7063 55.0868 23.462 54.593 23.3942L54.3125 23.375H52.25V44.6875C52.25 45.1859 52.0695 45.6674 51.7419 46.0431C51.4143 46.4187 50.9618 46.663 50.468 46.7307L50.1875 46.75C49.6891 46.75 49.2076 46.5695 48.8319 46.2419C48.4563 45.9143 48.212 45.4618 48.1443 44.968L48.125 44.6875V17.1875C48.125 16.6891 47.9445 16.2076 47.6169 15.8319C47.2893 15.4563 46.8368 15.212 46.343 15.1442L46.0625 15.125H11.6875C11.1891 15.125 10.7076 15.3055 10.3319 15.6331C9.95632 15.9607 9.71203 16.4132 9.64425 16.907L9.625 17.1875V46.0625C9.62505 47.2703 10.0792 48.4339 10.8974 49.3223C11.7155 50.2108 12.8378 50.7591 14.0415 50.8585L14.4375 50.875ZM33.6765 39.875H41.943C42.4656 39.8752 42.9686 40.0737 43.3504 40.4304C43.7323 40.7872 43.9645 41.2756 44.0001 41.7969C44.0357 42.3183 43.8721 42.8337 43.5423 43.2391C43.2125 43.6444 42.7412 43.9095 42.2235 43.9807L41.943 44H33.6765C33.1539 43.9998 32.6509 43.8013 32.2691 43.4446C31.8872 43.0878 31.6551 42.5994 31.6194 42.0781C31.5838 41.5567 31.7474 41.0413 32.0772 40.6359C32.407 40.2306 32.8783 39.9655 33.396 39.8942L33.6765 39.875ZM25.4183 30.2637C25.9653 30.2637 26.4899 30.481 26.8767 30.8678C27.2635 31.2546 27.4808 31.7792 27.4808 32.3262V41.9375C27.4808 42.4845 27.2635 43.0091 26.8767 43.3959C26.4899 43.7827 25.9653 44 25.4183 44H15.807C15.26 44 14.7354 43.7827 14.3486 43.3959C13.9618 43.0091 13.7445 42.4845 13.7445 41.9375V32.3262C13.7445 31.7792 13.9618 31.2546 14.3486 30.8678C14.7354 30.481 15.26 30.2637 15.807 30.2637H25.4183ZM23.3558 34.3887H17.8695V39.875H23.3558V34.3887ZM33.6765 30.2637H41.943C42.4656 30.2639 42.9686 30.4624 43.3504 30.8192C43.7323 31.1759 43.9645 31.6643 44.0001 32.1857C44.0357 32.707 43.8721 33.2225 43.5423 33.6278C43.2125 34.0332 42.7412 34.2983 42.2235 34.3695L41.943 34.3887H33.6765C33.1502 34.3941 32.6418 34.1981 32.2553 33.8408C31.8689 33.4835 31.6337 32.9919 31.5978 32.4668C31.562 31.9418 31.7282 31.4228 32.0625 31.0163C32.3968 30.6098 32.8739 30.3465 33.396 30.2802L33.6765 30.2637ZM15.807 20.6305H41.943C42.4693 20.6251 42.9777 20.8212 43.3642 21.1785C43.7506 21.5358 43.9858 22.0273 44.0217 22.5524C44.0575 23.0775 43.8913 23.5964 43.557 24.0029C43.2227 24.4094 42.7456 24.6728 42.2235 24.739L41.943 24.7555H15.807C15.2844 24.7553 14.7814 24.5568 14.3996 24.2001C14.0177 23.8433 13.7855 23.3549 13.7499 22.8336C13.7143 22.3122 13.8779 21.7968 14.2077 21.3914C14.5375 20.9861 15.0088 20.721 15.5265 20.6497L15.807 20.6305Z"
                                        fill="#55C4CA"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-white -mt-16 mb-2 text-2xl font-bold lg:px-14">
                                Protect Now!
                            </h1>
                            <p className="text-white px-4">
                                Pelajari jenis-jenis biota laut yang dilindungi di Indonesia.
                            </p>
                        </div>
                        <div className="rounded-xl bg-bohim-sky p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-24 w-24 -translate-y-20 transform items-center justify-center rounded-full bg-bohim-light-blue shadow-lg shadow-teal-500/40">
                                <svg
                                    width="66"
                                    height="66"
                                    viewBox="0 0 66 66"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M51.5625 55H14.4375C12.1546 55.0001 9.95822 54.1267 8.29887 52.5589C6.63951 50.9911 5.643 48.8477 5.51375 46.5685L5.5 46.0625V17.1875C5.49981 15.6197 6.09481 14.1102 7.16477 12.9642C8.23472 11.8182 9.69983 11.1211 11.264 11.0138L11.6875 11H46.0625C47.6304 10.9998 49.1398 11.5948 50.2858 12.6648C51.4318 13.7347 52.1289 15.1998 52.2363 16.764L52.25 17.1875V19.25H54.3125C55.8804 19.2498 57.3898 19.8448 58.5358 20.9148C59.6818 21.9847 60.3789 23.4498 60.4863 25.014L60.5 25.4375V46.0625C60.5002 48.3454 59.6267 50.5418 58.0589 52.2011C56.4911 53.8605 54.3477 54.857 52.0685 54.9862L51.5625 55ZM14.4375 50.875H51.5625C52.7707 50.8749 53.9347 50.4203 54.8232 49.6016C55.7117 48.7829 56.2598 47.6599 56.3585 46.4557L56.375 46.0625V25.4375C56.375 24.9391 56.1945 24.4576 55.8669 24.0819C55.5393 23.7063 55.0868 23.462 54.593 23.3942L54.3125 23.375H52.25V44.6875C52.25 45.1859 52.0695 45.6674 51.7419 46.0431C51.4143 46.4187 50.9618 46.663 50.468 46.7307L50.1875 46.75C49.6891 46.75 49.2076 46.5695 48.8319 46.2419C48.4563 45.9143 48.212 45.4618 48.1443 44.968L48.125 44.6875V17.1875C48.125 16.6891 47.9445 16.2076 47.6169 15.8319C47.2893 15.4563 46.8368 15.212 46.343 15.1442L46.0625 15.125H11.6875C11.1891 15.125 10.7076 15.3055 10.3319 15.6331C9.95632 15.9607 9.71203 16.4132 9.64425 16.907L9.625 17.1875V46.0625C9.62505 47.2703 10.0792 48.4339 10.8974 49.3223C11.7155 50.2108 12.8378 50.7591 14.0415 50.8585L14.4375 50.875ZM33.6765 39.875H41.943C42.4656 39.8752 42.9686 40.0737 43.3504 40.4304C43.7323 40.7872 43.9645 41.2756 44.0001 41.7969C44.0357 42.3183 43.8721 42.8337 43.5423 43.2391C43.2125 43.6444 42.7412 43.9095 42.2235 43.9807L41.943 44H33.6765C33.1539 43.9998 32.6509 43.8013 32.2691 43.4446C31.8872 43.0878 31.6551 42.5994 31.6194 42.0781C31.5838 41.5567 31.7474 41.0413 32.0772 40.6359C32.407 40.2306 32.8783 39.9655 33.396 39.8942L33.6765 39.875ZM25.4183 30.2637C25.9653 30.2637 26.4899 30.481 26.8767 30.8678C27.2635 31.2546 27.4808 31.7792 27.4808 32.3262V41.9375C27.4808 42.4845 27.2635 43.0091 26.8767 43.3959C26.4899 43.7827 25.9653 44 25.4183 44H15.807C15.26 44 14.7354 43.7827 14.3486 43.3959C13.9618 43.0091 13.7445 42.4845 13.7445 41.9375V32.3262C13.7445 31.7792 13.9618 31.2546 14.3486 30.8678C14.7354 30.481 15.26 30.2637 15.807 30.2637H25.4183ZM23.3558 34.3887H17.8695V39.875H23.3558V34.3887ZM33.6765 30.2637H41.943C42.4656 30.2639 42.9686 30.4624 43.3504 30.8192C43.7323 31.1759 43.9645 31.6643 44.0001 32.1857C44.0357 32.707 43.8721 33.2225 43.5423 33.6278C43.2125 34.0332 42.7412 34.2983 42.2235 34.3695L41.943 34.3887H33.6765C33.1502 34.3941 32.6418 34.1981 32.2553 33.8408C31.8689 33.4835 31.6337 32.9919 31.5978 32.4668C31.562 31.9418 31.7282 31.4228 32.0625 31.0163C32.3968 30.6098 32.8739 30.3465 33.396 30.2802L33.6765 30.2637ZM15.807 20.6305H41.943C42.4693 20.6251 42.9777 20.8212 43.3642 21.1785C43.7506 21.5358 43.9858 22.0273 44.0217 22.5524C44.0575 23.0775 43.8913 23.5964 43.557 24.0029C43.2227 24.4094 42.7456 24.6728 42.2235 24.739L41.943 24.7555H15.807C15.2844 24.7553 14.7814 24.5568 14.3996 24.2001C14.0177 23.8433 13.7855 23.3549 13.7499 22.8336C13.7143 22.3122 13.8779 21.7968 14.2077 21.3914C14.5375 20.9861 15.0088 20.721 15.5265 20.6497L15.807 20.6305Z"
                                        fill="#55C4CA"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-white -mt-16 mb-2 text-2xl font-bold lg:px-14">
                                Report
                            </h1>
                            <p className="text-white px-4">
                                Laporkan temuan aktivitas ilegal terhadap biota laut yang dilindungi
                            </p>
                        </div>
                        <div className="rounded-xl bg-bohim-sky p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-24 w-24 -translate-y-20 transform items-center justify-center rounded-full bg-bohim-light-blue shadow-lg shadow-teal-500/40">
                                <svg
                                    width="66"
                                    height="66"
                                    viewBox="0 0 66 66"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M51.5625 55H14.4375C12.1546 55.0001 9.95822 54.1267 8.29887 52.5589C6.63951 50.9911 5.643 48.8477 5.51375 46.5685L5.5 46.0625V17.1875C5.49981 15.6197 6.09481 14.1102 7.16477 12.9642C8.23472 11.8182 9.69983 11.1211 11.264 11.0138L11.6875 11H46.0625C47.6304 10.9998 49.1398 11.5948 50.2858 12.6648C51.4318 13.7347 52.1289 15.1998 52.2363 16.764L52.25 17.1875V19.25H54.3125C55.8804 19.2498 57.3898 19.8448 58.5358 20.9148C59.6818 21.9847 60.3789 23.4498 60.4863 25.014L60.5 25.4375V46.0625C60.5002 48.3454 59.6267 50.5418 58.0589 52.2011C56.4911 53.8605 54.3477 54.857 52.0685 54.9862L51.5625 55ZM14.4375 50.875H51.5625C52.7707 50.8749 53.9347 50.4203 54.8232 49.6016C55.7117 48.7829 56.2598 47.6599 56.3585 46.4557L56.375 46.0625V25.4375C56.375 24.9391 56.1945 24.4576 55.8669 24.0819C55.5393 23.7063 55.0868 23.462 54.593 23.3942L54.3125 23.375H52.25V44.6875C52.25 45.1859 52.0695 45.6674 51.7419 46.0431C51.4143 46.4187 50.9618 46.663 50.468 46.7307L50.1875 46.75C49.6891 46.75 49.2076 46.5695 48.8319 46.2419C48.4563 45.9143 48.212 45.4618 48.1443 44.968L48.125 44.6875V17.1875C48.125 16.6891 47.9445 16.2076 47.6169 15.8319C47.2893 15.4563 46.8368 15.212 46.343 15.1442L46.0625 15.125H11.6875C11.1891 15.125 10.7076 15.3055 10.3319 15.6331C9.95632 15.9607 9.71203 16.4132 9.64425 16.907L9.625 17.1875V46.0625C9.62505 47.2703 10.0792 48.4339 10.8974 49.3223C11.7155 50.2108 12.8378 50.7591 14.0415 50.8585L14.4375 50.875ZM33.6765 39.875H41.943C42.4656 39.8752 42.9686 40.0737 43.3504 40.4304C43.7323 40.7872 43.9645 41.2756 44.0001 41.7969C44.0357 42.3183 43.8721 42.8337 43.5423 43.2391C43.2125 43.6444 42.7412 43.9095 42.2235 43.9807L41.943 44H33.6765C33.1539 43.9998 32.6509 43.8013 32.2691 43.4446C31.8872 43.0878 31.6551 42.5994 31.6194 42.0781C31.5838 41.5567 31.7474 41.0413 32.0772 40.6359C32.407 40.2306 32.8783 39.9655 33.396 39.8942L33.6765 39.875ZM25.4183 30.2637C25.9653 30.2637 26.4899 30.481 26.8767 30.8678C27.2635 31.2546 27.4808 31.7792 27.4808 32.3262V41.9375C27.4808 42.4845 27.2635 43.0091 26.8767 43.3959C26.4899 43.7827 25.9653 44 25.4183 44H15.807C15.26 44 14.7354 43.7827 14.3486 43.3959C13.9618 43.0091 13.7445 42.4845 13.7445 41.9375V32.3262C13.7445 31.7792 13.9618 31.2546 14.3486 30.8678C14.7354 30.481 15.26 30.2637 15.807 30.2637H25.4183ZM23.3558 34.3887H17.8695V39.875H23.3558V34.3887ZM33.6765 30.2637H41.943C42.4656 30.2639 42.9686 30.4624 43.3504 30.8192C43.7323 31.1759 43.9645 31.6643 44.0001 32.1857C44.0357 32.707 43.8721 33.2225 43.5423 33.6278C43.2125 34.0332 42.7412 34.2983 42.2235 34.3695L41.943 34.3887H33.6765C33.1502 34.3941 32.6418 34.1981 32.2553 33.8408C31.8689 33.4835 31.6337 32.9919 31.5978 32.4668C31.562 31.9418 31.7282 31.4228 32.0625 31.0163C32.3968 30.6098 32.8739 30.3465 33.396 30.2802L33.6765 30.2637ZM15.807 20.6305H41.943C42.4693 20.6251 42.9777 20.8212 43.3642 21.1785C43.7506 21.5358 43.9858 22.0273 44.0217 22.5524C44.0575 23.0775 43.8913 23.5964 43.557 24.0029C43.2227 24.4094 42.7456 24.6728 42.2235 24.739L41.943 24.7555H15.807C15.2844 24.7553 14.7814 24.5568 14.3996 24.2001C14.0177 23.8433 13.7855 23.3549 13.7499 22.8336C13.7143 22.3122 13.8779 21.7968 14.2077 21.3914C14.5375 20.9861 15.0088 20.721 15.5265 20.6497L15.807 20.6305Z"
                                        fill="#55C4CA"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-white -mt-16 mb-2 text-2xl font-bold lg:px-14">
                                Article
                            </h1>
                            <p className="text-white px-4">
                                Telusuri artikel dan berita terkait biota laut yang dilindungi.
                            </p>
                        </div>
                        {/* Campaign */}
                        {/* <div className="rounded-xl bg-bohim-sky p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-24 w-24 -translate-y-20 transform items-center justify-center rounded-full bg-bohim-light-blue shadow-lg shadow-teal-500/40">
                                <svg
                                    width="66"
                                    height="66"
                                    viewBox="0 0 66 66"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M51.5625 55H14.4375C12.1546 55.0001 9.95822 54.1267 8.29887 52.5589C6.63951 50.9911 5.643 48.8477 5.51375 46.5685L5.5 46.0625V17.1875C5.49981 15.6197 6.09481 14.1102 7.16477 12.9642C8.23472 11.8182 9.69983 11.1211 11.264 11.0138L11.6875 11H46.0625C47.6304 10.9998 49.1398 11.5948 50.2858 12.6648C51.4318 13.7347 52.1289 15.1998 52.2363 16.764L52.25 17.1875V19.25H54.3125C55.8804 19.2498 57.3898 19.8448 58.5358 20.9148C59.6818 21.9847 60.3789 23.4498 60.4863 25.014L60.5 25.4375V46.0625C60.5002 48.3454 59.6267 50.5418 58.0589 52.2011C56.4911 53.8605 54.3477 54.857 52.0685 54.9862L51.5625 55ZM14.4375 50.875H51.5625C52.7707 50.8749 53.9347 50.4203 54.8232 49.6016C55.7117 48.7829 56.2598 47.6599 56.3585 46.4557L56.375 46.0625V25.4375C56.375 24.9391 56.1945 24.4576 55.8669 24.0819C55.5393 23.7063 55.0868 23.462 54.593 23.3942L54.3125 23.375H52.25V44.6875C52.25 45.1859 52.0695 45.6674 51.7419 46.0431C51.4143 46.4187 50.9618 46.663 50.468 46.7307L50.1875 46.75C49.6891 46.75 49.2076 46.5695 48.8319 46.2419C48.4563 45.9143 48.212 45.4618 48.1443 44.968L48.125 44.6875V17.1875C48.125 16.6891 47.9445 16.2076 47.6169 15.8319C47.2893 15.4563 46.8368 15.212 46.343 15.1442L46.0625 15.125H11.6875C11.1891 15.125 10.7076 15.3055 10.3319 15.6331C9.95632 15.9607 9.71203 16.4132 9.64425 16.907L9.625 17.1875V46.0625C9.62505 47.2703 10.0792 48.4339 10.8974 49.3223C11.7155 50.2108 12.8378 50.7591 14.0415 50.8585L14.4375 50.875ZM33.6765 39.875H41.943C42.4656 39.8752 42.9686 40.0737 43.3504 40.4304C43.7323 40.7872 43.9645 41.2756 44.0001 41.7969C44.0357 42.3183 43.8721 42.8337 43.5423 43.2391C43.2125 43.6444 42.7412 43.9095 42.2235 43.9807L41.943 44H33.6765C33.1539 43.9998 32.6509 43.8013 32.2691 43.4446C31.8872 43.0878 31.6551 42.5994 31.6194 42.0781C31.5838 41.5567 31.7474 41.0413 32.0772 40.6359C32.407 40.2306 32.8783 39.9655 33.396 39.8942L33.6765 39.875ZM25.4183 30.2637C25.9653 30.2637 26.4899 30.481 26.8767 30.8678C27.2635 31.2546 27.4808 31.7792 27.4808 32.3262V41.9375C27.4808 42.4845 27.2635 43.0091 26.8767 43.3959C26.4899 43.7827 25.9653 44 25.4183 44H15.807C15.26 44 14.7354 43.7827 14.3486 43.3959C13.9618 43.0091 13.7445 42.4845 13.7445 41.9375V32.3262C13.7445 31.7792 13.9618 31.2546 14.3486 30.8678C14.7354 30.481 15.26 30.2637 15.807 30.2637H25.4183ZM23.3558 34.3887H17.8695V39.875H23.3558V34.3887ZM33.6765 30.2637H41.943C42.4656 30.2639 42.9686 30.4624 43.3504 30.8192C43.7323 31.1759 43.9645 31.6643 44.0001 32.1857C44.0357 32.707 43.8721 33.2225 43.5423 33.6278C43.2125 34.0332 42.7412 34.2983 42.2235 34.3695L41.943 34.3887H33.6765C33.1502 34.3941 32.6418 34.1981 32.2553 33.8408C31.8689 33.4835 31.6337 32.9919 31.5978 32.4668C31.562 31.9418 31.7282 31.4228 32.0625 31.0163C32.3968 30.6098 32.8739 30.3465 33.396 30.2802L33.6765 30.2637ZM15.807 20.6305H41.943C42.4693 20.6251 42.9777 20.8212 43.3642 21.1785C43.7506 21.5358 43.9858 22.0273 44.0217 22.5524C44.0575 23.0775 43.8913 23.5964 43.557 24.0029C43.2227 24.4094 42.7456 24.6728 42.2235 24.739L41.943 24.7555H15.807C15.2844 24.7553 14.7814 24.5568 14.3996 24.2001C14.0177 23.8433 13.7855 23.3549 13.7499 22.8336C13.7143 22.3122 13.8779 21.7968 14.2077 21.3914C14.5375 20.9861 15.0088 20.721 15.5265 20.6497L15.807 20.6305Z"
                                        fill="#55C4CA"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-white -mt-16 mb-2 text-2xl font-bold lg:px-14">
                                Learn
                            </h1>
                            <p className="text-white px-4">
                                Jelajahi informasi dan pengetahuan tentang keanekaragaman hayati laut.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
