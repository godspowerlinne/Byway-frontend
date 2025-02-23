import FacebookIcon from "/Facebook_icon.svg";
import GoogleIcon from "/google.svg";
import MicrosoftIcon from "/microsoft_icon.svg";

const Account = () => {
    return (
        <>
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#94A3B8] dark:border-[#867CB8]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white   dark:bg-gray-800 text-[#94A3B8] dark:text-[#867CB8]">
                        Sign up with
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 min-h-[50px]">
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-[1px] border-[#E2E8F0] dark:border-[#867CB8] rounded-lg bg-white dark:bg-gray-700 text-[#0866FF] hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                    <img src={FacebookIcon} />
                    Facebook
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-[1px] border-[#E2E8F0] dark:border-[#867CB8] rounded-lg bg-white dark:bg-gray-700 text-[#EA4335] hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                    <img src={GoogleIcon} />
                    Google
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-[1px] border-[#E2E8F0] dark:border-[#867CB8] rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-[#c9af3d] hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                    <img src={MicrosoftIcon} />
                    Microsoft
                </button>
            </div>
        </>
    );
};

export default Account;
