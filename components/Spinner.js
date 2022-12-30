import { Oval } from "react-loader-spinner";

function Spinner() {
    return (
        <div className="grid h-screen place-items-center">
            <Oval
                height={80}
                width={80}
                color="#FF7D1B"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#ffffff"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
}

export default Spinner;
