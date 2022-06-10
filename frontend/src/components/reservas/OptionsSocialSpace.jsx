import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSocialSpaces } from "../../redux/actions";

export default function OptionsSocialSpace({ socialSpace, handlerSpace }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSocialSpaces());
  }, []);

  return (
    <div class="input-group w-50 m-auto justify-content-between">
      {Object.keys(socialSpace).length !== 0
        ? socialSpace.data.map((space) => (
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="space"
                value={space.id}
                key={space.id + "social"}
                aria-label="Radio button for following text input"
                onClick={handlerSpace}
              />
              <label
                className="form-check-label"
                htmlFor="space"
                key={space.id + "labelSocial"}
              >
                {space.space}
              </label>
            </div>
          ))
        : ""}
    </div>
  );
}
