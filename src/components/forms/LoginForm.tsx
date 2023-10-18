import { Button } from "../controls/Button";
import { InputField } from "../controls/InputField";
import { toast } from "react-hot-toast";

const LoginForm: React.FC<{ setHide: Function }> = ({ setHide }) => {
  return (
    <form>
      <div className="space-y-4">
        <InputField placeholder="Email" type="email" name="email" />
        <InputField placeholder="Password" type="password" name="password" />
        <div className="flex space-x-2">
          <Button type="button" text="Cancel" onClick={() => setHide(false)} />
          <Button
            type="button"
            text="Login"
            onClick={() => {
              setTimeout(() => {}, 1000);
              toast.success("login successfully!");
            }}
          />
        </div>
        <div className="flex justify-center">
          <span>
            <label className="font-medium text-slate-600">Copyright</label>
            <label className="text-slate-600"> © </label>
            <label className="font-semibold text-blue-600">TINHNA</label>
          </span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
