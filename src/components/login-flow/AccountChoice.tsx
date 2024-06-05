import SVGPersonFace from "../../assets/images/person-face-icon.svg";

const AccountChoice = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="w-3/5 text-wrap text-center p-1 tracking-wider mb-6">
        <p>Please choose your account</p>
        <p>アカウントの種類を選択してください</p>
      </h1>
      <div className="flex flex-row h-2/5 w-full justify-around items-center">
        <button className="flex flex-col justify-around items-center w-1/2 h-4/5 bg-slate-100 p-2 mx-2">
          <h1 className="text-3xl font-bold tracking-wider">Caregiver</h1>
          <img
            className="w-1/5"
            src={SVGPersonFace}
            alt="friendly animated face with brown hair"
          />
          <p className="text-xl w-4/5 text-wrap tracking-wider">
            メンバーを世話にする方はこちらへ
          </p>
        </button>
        <button className="flex flex-col justify-around items-center w-1/2 h-4/5 bg-slate-100 p-2 mx-2">
          <h1 className="text-3xl font-bold tracking-wider">Youths</h1>
          <img
            className="w-1/5"
            src={SVGPersonFace}
            alt="friendly animated face with brown hair"
          />
          <p className="text-xl w-4/5 text-wrap tracking-wider">
            子ども・若者（18歳未満）の方へ
          </p>
        </button>
      </div>
    </div>
  );
};

export default AccountChoice;
