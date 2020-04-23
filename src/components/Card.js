import React from "react";

const Card = ({GithubLink, DeployedLink, Png, Title}) => {
    const bg = {
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundImage: `url(${Png})`,
        height: '230px'
    }
    return (
        <div className="w-1/3 pt-4">
            <div className="shadow rounded-md max-w-sm flex justify-center items-center mx-auto" style={bg}>
            </div>
            <div className="rounded-b pb-6 px-4 border-b ">
                <div className="text-gray-900 font-bold text-xl mb-2">{Title}</div>
                <p className="text-gray-700 text-base">
                    <a className="py-2 px-4 border rounded border-teal-600 text-teal-400 hover:text-white hover:bg-teal-500 mr-2"
                       href={DeployedLink}>live</a>
                    <a className="py-2 px-4 border rounded border-teal-600 text-teal-400 hover:text-white hover:bg-teal-500 mr-2"
                       href={GithubLink}>GitHub</a>
                </p>
            </div>

        </div>
    )
}

export default Card;