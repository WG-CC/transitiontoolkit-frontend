import SVGBackButton from "../../assets/images/back-arrow.svg";

const OAuthSignUpOrLogin = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <button className="fixed top-14 left-7">
        <img src={SVGBackButton} alt="back arrow" />
      </button>
      <button className="font-bold p-1 w-2/5 bg-slate-300 my-2">
        Sign Up with Twitter
      </button>
      <button className="font-bold p-1 w-2/5 bg-slate-300 my-2">
        Sign Up with LINE
      </button>
      <button className="font-bold p-1 w-2/5 bg-slate-300 my-2">
        Sign Up with Yahoo
      </button>
      <hr className="w-4/5 border-b-2 border-slate-300 my-10" />
      <h2 className="w-2/5 text-wrap text-center p-1">
        Please log in <a className="text-blue-700">here</a> when you have an
        account
      </h2>
    </div>
  );
};

export default OAuthSignUpOrLogin;
