import { Fragment, useEffect } from "react";

import { useCallApi } from "../hooks/useCallApi";

//components
import { Loading } from "../components/utils/Loading";
import { GroupNewsCards } from "../components/card/GroupNewsCards";
import "../styles/General.css"



export const Home = () => {
  const {data, loading, error} = useCallApi();
  useEffect(() => {}, [data]);

  return (
    <Fragment>
      <div className="container">
        {loading ? <Loading /> : <GroupNewsCards data={data}/>}
      </div>
    </Fragment>
  );
}